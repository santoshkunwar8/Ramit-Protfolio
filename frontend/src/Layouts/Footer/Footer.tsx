import React from 'react'
import { FooterWrapper } from './Footer.styles'
import { AiOutlineRight } from 'react-icons/ai'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { TbBrandFiverr } from 'react-icons/tb'
import { VscGithub } from 'react-icons/vsc'
import {PiYoutubeLogo} from "react-icons/pi"
import {BsTiktok} from "react-icons/bs"

const Footer = () => {
  return (
    <FooterWrapper>
        <div className='footerTop'>

        <div className="leftFooter">
        <h1 className='logo_text'>CodeWithMama</h1>
        <p className='left_footer_desc'>Get in Touch: Let's Collaborate on Your Next Project or Answer Your Queries.</p>
        {/* <button></button> */}
        <div className='contactButton'>
            <h5 className='contactButtonText'>Contact Me </h5>
            <AiOutlineRight/>
        </div>
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
          <li>@2023 Github Inc.</li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Sitemap</li>

         </ul>
         <ul>
          <li>
              <FaLinkedinIn/>
          </li>
          <li>
                    <TbBrandFiverr/>
          </li>
          <li>
               <VscGithub/>
          </li>
          <li>
            <FaTwitter/>
          </li>
          <li>
            <PiYoutubeLogo/>
          </li>
          <li>
            <BsTiktok/>
          </li>
         </ul>

        </div>
    </FooterWrapper>
  )
}

export default Footer