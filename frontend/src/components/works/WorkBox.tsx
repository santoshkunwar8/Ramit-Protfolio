// import React from 'react'

import { WorkBoxWrapper } from "./workBox.styles";
import {AiOutlineRight} from "react-icons/ai"

const WorkBox = () => {
  return (
    <WorkBoxWrapper>
      <div className="text_content">
        <div className="circle_bg">

        </div>
        <div>

      <h1>Creative Creations</h1> 
      
      
      <h1> Showcasing My Innovative And Creative Projects</h1>
        </div>
          <button className="explore_button">
          <a href="/works">Explore My Innovations</a>
             <AiOutlineRight/>

          </button>
      </div>  
      <div className="work_image"> 

      <img src="/images/workList.png" alt="worksImg" />


      </div>
    </WorkBoxWrapper>
    
  )
}

export default WorkBox;