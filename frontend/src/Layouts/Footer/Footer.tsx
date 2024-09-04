
import { FooterWrapper } from './Footer.styles'
import { AiOutlineRight } from 'react-icons/ai'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { TbBrandFiverr } from 'react-icons/tb'
import { VscGithub } from 'react-icons/vsc'
import {PiYoutubeLogo} from "react-icons/pi"
import {BsTiktok} from "react-icons/bs"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterWrapper>
        <div className='footerTop'>

        <div className="leftFooter">
        <h1 className='logo_text'>Ramit Neupane</h1>
        <p className='left_footer_desc'>Get in Touch: Let's Collaborate on Your Next Project or Answer Your Queries.</p>
        {/* <button></button> */}
        <Link to={"/contact"} className='contactButton' >
            <h5 className='contactButtonText'>Contact Me </h5>
            <AiOutlineRight/>
        </Link>
        </div>
        <div className='rightFooter'>

            <ul>
                <li>Experiences</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
                <li>Clients</li>
                <li>Pricing</li>
            </ul>
             <ul>
                <li>Support</li>
                <li>Docs</li>
                <li>About</li>
                <li>Skills</li>
                <li>Status</li>
                <li>Contributions</li>
            </ul>
              <ul>
                <li>Blogs</li>
                <li>Company</li>
                <li>Blogs</li>
                <li>Career</li>
                <li>Shop</li>
                <li>Professional Service</li>
            </ul>

        </div>
        </div>
        <div  className='footerBottom'>
        
         <ul className='bottom_footer_left'>
          <li><a href="https://www.facebook.com/cornortech">@2024 Cornor Tech Pvt Ltd.</a></li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Sitemap</li>

         </ul>
         <ul>
          <li>
            <a href="https://www.linkedin.com/in/ramitnpn/">
              <FaLinkedinIn/>
              </a></li>
          <li><a href="https://www.linkedin.com/in/ramitnpn/">
                    <TbBrandFiverr/>
                    </a></li>
          <li><a href="https://www.linkedin.com/in/ramitnpn/">
               <VscGithub/>
               </a></li>
          <li><a href="https://www.linkedin.com/in/ramitnpn/">
            <FaTwitter/>
            </a></li>
          <li><a href="https://www.linkedin.com/in/ramitnpn/">
            <PiYoutubeLogo/>
            </a></li>
          <li><a href="https://www.linkedin.com/in/ramitnpn/">
            <BsTiktok/>
          </a></li>
         </ul>

        </div>
    </FooterWrapper>
  )
}

export default Footer