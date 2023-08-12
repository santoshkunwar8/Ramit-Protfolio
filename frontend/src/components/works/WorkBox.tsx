// import React from 'react'

import { WorkBoxWrapper } from "./workBox.styles";
import {AiOutlineRight} from "react-icons/ai"

const WorkBox = () => {
  return (
    <WorkBoxWrapper>
      <div className="text_content">
        <div>

      <h1>  Code Creations</h1> 
      
      
      <h1> Showcasing My Innovative Development Projects</h1>
        </div>
          <button className="explore_button">
          <p>
          Explore my innovation 
             </p>
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