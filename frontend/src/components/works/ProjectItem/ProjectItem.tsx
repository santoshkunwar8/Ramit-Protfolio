import React from "react";
import { ProjectItemWrapper } from "./ProjectItem.styles";
import { useNavigate } from "react-router-dom";
import { WorkType } from "../../../utils/Types";
import { format } from "timeago.js";
import { Rating } from "@mui/material";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

type ProjectItemPropsType = {
  work: WorkType;
  big: boolean;
};

const ProjectItem: React.FC<ProjectItemPropsType> = ({ work, big }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/work/${work._id}`);
  };

  return (
    <ProjectItemWrapper
      big={big}
      progress={work?.status === "progress"}
      onClick={handleNavigate}
    >
      <img src={work.mainImg} alt={work.name} className="project_image" />

      <h1 className="mainText"> {work.name} </h1>
      <div className="secondary_text">
        <span>{work.type} |</span> <span>{work.platform}</span>
      </div>
      <p className="project_desc">{work.desc}</p>
      <div className="midBox">
        <button className="progressBtn">{work.status}</button>
        <div className="ratingBox">
          <Rating size="small" precision={0.5} value={work.rating} readOnly />

          <p>({work.ratings.length})</p>
        </div>
      </div>
      <div className="project_bottom">
        <div className="project_other_info">
          <b>{work.link}</b>
          <p className="editedTime">
            Edited {work.updatedAt && format(work?.updatedAt)}
          </p>
        </div>
        <div className="project_action">
          {/* <BiSolidShareAlt onClick={handleShareMode}/> */}
          <FacebookShareButton
            url={work.link}
            onClick={(e) => e.stopPropagation()}
          >
            <FacebookIcon opacity={0.8} size={28} round={true} />
          </FacebookShareButton>
          <LinkedinShareButton
            url={work.link}
            onClick={(e) => e.stopPropagation()}
          >
            <LinkedinIcon opacity={0.8} size={28} round={true} />
          </LinkedinShareButton>
          <WhatsappShareButton
            url={work.link}
            onClick={(e) => e.stopPropagation()}
          >
            <WhatsappIcon opacity={0.8} size={28} round={true} />
          </WhatsappShareButton>
        </div>
      </div>
    </ProjectItemWrapper>
  );
};

export default ProjectItem;
