import React from "react";
import HeroWrapper from "./Hero.styles";
import HeroItems from "../heroItems/HeroItems";
import { AdminInfoType } from "../../../pages/Home/Home";
import About from "../About/About";
import UserInfo from "../UserInfo/UserInfo";
import FileSaver from "file-saver";

type HeroProps = {
  adminInfo: AdminInfoType;
};

const Hero: React.FC<HeroProps> = ({ adminInfo }) => {
  const handleDownloadCV = () => {
    const cvUrl = adminInfo.info?.cv;
    if (cvUrl) {
      FileSaver.saveAs(
        "https://drive.google.com/file/d/1MEplgEv4k2ZA8PIQisSPbf5lHuDMc9-7/view?usp=sharing",
        "RamitNeupane.pdf"
      );
    }
  };

  return (
    <HeroWrapper>
      <div className="hero_section">
        <div className="hero_section_left">
          <div className="main_info_box">
            <h1>Hey I am a Entrepreneur with specialized IT skills!</h1>
            <button className="cv_button" onClick={handleDownloadCV}>
              {/* <img width="24" height="24" src="https://img.icons8.com/emoji/48/vulcan-salute-emoji.png" alt="vulcan-salute-emoji"/> */}
              <p>Download CV</p>
            </button>
          </div>
          <HeroItems adminData={adminInfo} />
          <div className="hero_item_wrapper"></div>
        </div>
        <div className="hero_section_right">
          <UserInfo adminData={adminInfo.info} />
          <About adminData={adminInfo.info} />
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
