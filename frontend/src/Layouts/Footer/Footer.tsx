import { FooterWrapper } from "./Footer.styles";
import { AiOutlineRight } from "react-icons/ai";
import { FaLinkedinIn} from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import { PiYoutubeLogo } from "react-icons/pi";
import { BsTiktok } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footerTop">
        <div className="leftFooter">
          <h1 className="logo_text">Ramit Neupane</h1>
          <p className="left_footer_desc">
            Get in Touch: Let's Collaborate on Your Next Project or Answer Your
            Queries.
          </p>
          {/* <button></button> */}
          <a href="/contact">
          <Link to={"/contact"} className="contactButton">
            <h5 className="contactButtonText">Contact Me </h5>
            <AiOutlineRight className="icon" strokeWidth={68} />
          </Link></a>
          <a href="https://www.cornortech.com" className="exploreButton">
            Explore Cornor Tech's Website
          </a>
        </div>
        <div className="rightFooter">
          <ul>
           <a href="/works"> <li>Projects</li></a>
            <a href="/"><li>About</li></a>
            <a href="/contact"><li>Contact</li></a>
            <a href="/"></a><li>Clients</li>
            <a href="/review"><li>Reviews</li></a>
          </ul>
          <ul>
            <a href="https://cornortech.com/"><li>Blogs</li></a>
            <a href="https://cornortech.com/"><li>Company</li></a>
            <a href="https://cornortech.com/"><li>Blogs</li></a>
            <a href="https://cornortech.com/"><li>Career</li></a>
            <a href="https://cornortech.com/"><li>Get Job</li></a>
          </ul>
        </div>
      </div>
      <hr className="line" />
      <div className="footerBottom">
        <ul className="bottom_footer_left">
          <li>
            <a href="https://www.facebook.com/cornortech" className="cornorTM">
              @2024 Cornor Tech Pvt Ltd.
            </a>
          </li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Sitemap</li>
        </ul>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/ramitnpn/">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://www.fiverr.com/santoshkunwa442">
              <TbBrandFiverr />
            </a>
          </li>
          <li>
            <a href="https://github.com/RamitNpn">
              <VscGithub />
            </a>
          </li>
          <li>
            <a href="https://wa.me/9867387360">
            <FaWhatsapp />

            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@ramitnpn">
              <PiYoutubeLogo />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@ramitneupane01">
              <BsTiktok />
            </a>
          </li>
        </ul>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
