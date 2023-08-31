// import React from 'react'

import Footer from "../../Layouts/Footer/Footer"
import Navbar from "../../Layouts/Navbar/Navbar"
import WorkSlider from "../../Layouts/WorkSlider/WorkSlider"
import About from "../../components/home/About/About"
import Clients from "../../components/home/Clients/Clients"

import HeroItems from "../../components/home/heroItems/HeroItems"
import Reviews from "../../components/home/Reviews/Reviews"
import UserInfo from "../../components/home/UserInfo/UserInfo"
// import WorkItem from "../../components/home/Works/Work"
import { HomeWrapper } from "./Home.styles"
import Skills from "./Skills/Skills"
import FileSaver from "file-saver";

const Home = () => {
  const handleDownloadCV=()=>{

    FileSaver.saveAs("https://img.freepik.com/free-vector/minimalist-cv-template_23-2148916161.jpg?w=2000",'text.png')
    


  }
  return (
    <HomeWrapper >
      <Navbar/>
        <div className="hero_section">
          <div className="hero_section_left" >

          
              <div  className="main_info_box">
                <h1>Hey I am a Fullstack Devloper in Turing </h1>
                <button className="cv_button" onClick={handleDownloadCV}>
                  {/* <img width="24" height="24" src="https://img.icons8.com/emoji/48/vulcan-salute-emoji.png" alt="vulcan-salute-emoji"/> */}
                  <p>View CV</p></button>
              </div>
              <HeroItems/>
              <div className="hero_item_wrapper" >
             
              </div>
            </div>
            <div className="hero_section_right">
                    <UserInfo/>
                    <About/>
              </div> 
        </div>
                <WorkSlider/>
                <Skills/>
                <Clients/>
                <Reviews/> 
                <Footer/>
    </HomeWrapper>
  )
}

export default Home

