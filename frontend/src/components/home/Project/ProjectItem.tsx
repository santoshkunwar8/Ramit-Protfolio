// import React from 'react'

import { AiOutlineLike } from "react-icons/ai"
import { ProjectItemWrapper } from "./ProjectItem.styles"

const ProjectItem = () => {
  return (
    <ProjectItemWrapper>

    <div className="image_wrapper">

        <img src="https://images.pexels.com/photos/3584974/pexels-photo-3584974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        


    </div>
    <div className="project_info">
      <div>
        
        <h3 className="project_name">Vrumies.org</h3>
        <p className="project_desc">Online Marketplace</p>
      </div>


    <div className="projectAction">
        <p className="ratint_text">Rating 4/5</p>
        <div className="ratingBar">
            <div className="ratingProgress">

            </div>
        </div>
{/*         
        <div className="like_box">
            
                <p>33</p>
             <AiOutlineLike/>
            </div> */}

    </div>

    </div>

    </ProjectItemWrapper>
  )
}

export default ProjectItem