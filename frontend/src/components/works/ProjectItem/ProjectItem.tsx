import React from 'react'
import { ProjectItemWrapper } from './ProjectItem.styles'
import { BiSolidShareAlt } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const ProjectItem = () => {
  const navigate =useNavigate()

  const handleNavigate=()=>{
    navigate(`/work/123`)
  }

  return (
    <ProjectItemWrapper onClick={handleNavigate}>
      
            <h1 className='mainText'>Debai : Online Debate Platform </h1>
            <div className='secondary_text'>
                <span>debai.org |</span> <span>web application</span>
                </div>
            <p className='project_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptates non voluptatum.</p>

            <button className='progressBtn'>Done</button>
            <div className="project_bottom">

            <div className='project_other_info'>
                <b>debai.org</b>
                <p className='editedTime'>Edited 3 days ago</p>
                </div>
                <div className='project_action'>
                    <BiSolidShareAlt/>
                </div>  
            </div>

        
    </ProjectItemWrapper>
  )
}

export default ProjectItem