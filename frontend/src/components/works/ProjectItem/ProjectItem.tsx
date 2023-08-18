import React from 'react'
import { ProjectItemWrapper } from './ProjectItem.styles'
import { BiSolidShareAlt } from 'react-icons/bi'

const ProjectItem = () => {
  return (
    <ProjectItemWrapper>
      
            <h1 className='mainText'>Debai : Online Debate Platform </h1>
            <div className='secondary_text'>
                <span>debai.org |</span> <span>web application</span>
                </div>
            <p className='project_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptates non voluptatum.</p>

            <button className='progressBtn'>Done</button>
            <div className="project_bottom">

            <div>
                <b>debai.org</b>
                <p className='editedTime'>Edited 3days ago</p>
                </div>
                <div className='project_action'>
                    <BiSolidShareAlt/>
                </div>  
            </div>

        
    </ProjectItemWrapper>
  )
}

export default ProjectItem