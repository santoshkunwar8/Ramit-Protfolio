import React from 'react'
import { ProjectItemWrapper } from './ProjectItem.styles'
import { BiSolidShareAlt } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { WorkType } from '../../../utils/Types'
import {format} from "timeago.js"

type ProjectItemPropsType={
  work:WorkType
}

const ProjectItem:React.FC<ProjectItemPropsType> = ({work}) => {
  const navigate =useNavigate()

  const handleNavigate=()=>{
    navigate(`/work/123`)
  }

  return (
    <ProjectItemWrapper big={false} progress={work?.status === "progress"} onClick={handleNavigate}>
      
            <h1 className='mainText'> {work.name} </h1>
            <div className='secondary_text'>
                <span>{work.type} |</span> <span>{work.platform }</span>
                </div>
            <p className='project_desc'>{work.desc}</p>

            <button className='progressBtn'>{work.status}</button>
            <div className="project_bottom">

            <div className='project_other_info'>
                <b>{work.link}</b>
                <p className='editedTime'>Edited { work.updatedAt && format(work?.updatedAt)}</p>
                </div>
                <div className='project_action'>
                    <BiSolidShareAlt/>
                </div>  
            </div>

        
    </ProjectItemWrapper>
  )
}

export default ProjectItem