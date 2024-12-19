import { AiOutlineRight } from "react-icons/ai";
import { SkillWrapper } from "./Skill.styles";
import SkillItem from "../../../components/home/SkillsItem/SkillItem";
import { getToolsApi } from "../../../utils/api";
import { useEffect, useState } from "react";
import { ToolType } from "../../../utils/Types";

const Skills = () => {
  const [skillsData, setSkillsData] = useState<ToolType[]>([]);

  useEffect(() => {
    fetchSkillsFromDB();
  }, []);

  const fetchSkillsFromDB = async () => {
    try {
      const { data, status } = await getToolsApi();
      if (status === 200) {
        setSkillsData(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SkillWrapper>
      <div className="tech_box">
        <div className="text_box">
          <h1 className="main_text">Tools i use to built softwares</h1>
          <div className="desc_text">
            Tech tools I like to learn new emergingg tools in the software
            industry
          </div>
        </div>

        <div className="viewMoreButton">
          <p className="">View More</p>
          <AiOutlineRight />
        </div>
        <div className="toolsContainer">
          {skillsData.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
      <div className="skill_box">
        <div className="text_box">
          <h4 className="main_text">Showcasing My Multifacilated Skills</h4>
          <div className="desc_text">
            My multifacilied Skill's Whcih can help you on your business!
          </div>
        </div>
        <div className="viewMoreButton">
          <p className="">View More</p>
          <AiOutlineRight />
        </div>
        <div className="mySkillsContainer">
          <div className="skillItem">
            <div className="skillInfo">
              <img
                width="94"
                height="94"
                src="https://cdn-icons-png.flaticon.com/512/4668/4668243.png"
                alt="workflow"
              />

              <p className="skillName">Graphics Design</p>
            </div>
            <div className="progress_box">
              <div className="progress_full">
                <div className="progress"></div>
              </div>
              <p className="progress_count">75%</p>
            </div>
          </div>
          <div className="skillItem">
            <div className="skillInfo">
              <img
                width="94"
                height="94"
                src="https://img.icons8.com/3d-fluency/94/chrome.png"
                alt="chrome"
              />
              <p className="skillName">Web Developement </p>
            </div>
            <div className="progress_box">
              <div className="progress_full">
                <div className="progress blue"></div>
              </div>
              <p className="progress_count">80%</p>
            </div>
          </div>
          <div className="skillItem">
            <div className="skillInfo">
              <img
                width="94"
                height="94"
                src="https://cdn-icons-png.flaticon.com/512/2886/2886890.png"
                alt="android-os"
              />
              <p className="skillName"> Video Editing </p>
            </div>
            <div className="progress_box">
              <div className="progress_full">
                <div className="progress green"></div>
              </div>
              <p className="progress_count">65%</p>
            </div>
          </div>
          <div className="skillItem">
            <div className="skillInfo">
              <img
                width="94"
                height="94"
                src="https://cdn-icons-png.freepik.com/256/4661/4661361.png?semt=ais_hybrid"
                alt="paint-palette"
              />

              <p className="skillName"> Brand Management </p>
            </div>
            <div className="progress_box">
              <div className="progress_full">
                <div className="progress red"></div>
              </div>
              <p className="progress_count">70%</p>
            </div>
          </div>
        </div>
      </div>
    </SkillWrapper>
  );
};

export default Skills;
