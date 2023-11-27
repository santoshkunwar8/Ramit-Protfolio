import React from 'react'
import HeroWrapper from './Hero.styles'
import HeroItems from '../heroItems/HeroItems'
import { AdminInfoType } from '../../../pages/Home/Home'
import About from '../About/About'
import UserInfo from '../UserInfo/UserInfo'
import FileSaver from 'file-saver'

type HeroProps={
    adminInfo:AdminInfoType
}

const Hero:React.FC<HeroProps> = ({adminInfo}) => {

    
    const handleDownloadCV=()=>{

        const cvUrl = adminInfo.info?.cv;
        if(cvUrl){
          FileSaver.saveAs("https://res.cloudinary.com/onlinecoder/image/upload/v1701071534/mtciiur9y3mlpiz6t4vz.pdf",'codewithmamaCV.pdf')
        }
        
    
    
      }
    
  return (
    <HeroWrapper>

<div className="hero_section">
          <div className="hero_section_left" >

          
              <div  className="main_info_box">
                <h1>Hey I am a Fullstack Devloper in Turing </h1>
                <button className="cv_button" onClick={handleDownloadCV}>
                  {/* <img width="24" height="24" src="https://img.icons8.com/emoji/48/vulcan-salute-emoji.png" alt="vulcan-salute-emoji"/> */}
                  <p>Download CV</p></button>
              </div>
              <HeroItems adminData={adminInfo}/>
              <div className="hero_item_wrapper" >
             
              </div>
            </div>
            <div className="hero_section_right">
                    <UserInfo adminData={adminInfo.info}/>
                    <About adminData={adminInfo.info}/>
              </div> 
        </div>



    </HeroWrapper>
  )
}

export default Hero