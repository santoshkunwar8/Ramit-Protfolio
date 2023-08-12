// import React from 'react'

import About from "../../components/home/About/About"
import UserInfo from "../../components/home/UserInfo/UserInfo"
// import WorkItem from "../../components/home/Works/Work"
import HeroItems from "../../components/home/heroItems/HeroItems"
import WorkBox from "../../components/works/WorkBox"
import { HomeWrapper } from "./Home.styles"
import Skills from "./Skills/Skills"

const Home = () => {
  return (
    <HomeWrapper >
        <div className="hero_section">
          <div className="hero_section_left" >

          
              <div  className="main_info_box">
                <h1>Hey I am a Fullstack Devloper in Turing </h1>
                <button className="cv_button">
                  <img width="24" height="24" src="https://img.icons8.com/emoji/48/vulcan-salute-emoji.png" alt="vulcan-salute-emoji"/>
                  <p>View CV</p></button>
              </div>
              <HeroItems/>
              <div className="hero_item_wrapper" >
                {/* {
                  works.map(work=><WorkItem work={work}/>)
                } */}
                {/* <WorkItem />
                <WorkItem/>
                <WorkItem/> */}
              </div>
            </div>
            <div className="hero_section_right">
                    <UserInfo/>
                    <About/>
              </div> 
        </div>
                <WorkBox/>
                <Skills/>
    </HomeWrapper>
  )
}

export default Home


const works=[

  {
    url:"https://www.vrumies.org",
    name:"vrumies.org",
    createdAt:"2022/10/2",
    image:"/images/workLogo.png"
  },
   {
    url:"https://www.debai.org",
    name:"debai.org",
    createdAt:"2023/1/2",
    image:"https://res.cloudinary.com/onlinecoder/image/upload/v1690193097/fmjmbazdcvuftgdudpnx.jpG"
  },
   {
    url:"https://www.vrumies.org",
    name:"fotoprofilpro.com",
    createdAt:"2021/5/2",
    image:"/images/fotoprofilpro.png"
  },
]