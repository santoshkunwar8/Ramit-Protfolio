import React from 'react'
import { WorkWrapper } from './Works.styles'
import Navbar from '../../Layouts/Navbar/Navbar'
import ProjectItem from '../../components/works/ProjectItem/ProjectItem'

const Works = () => {
  return (
    <WorkWrapper>
        <Navbar/>
        <div className='workWrapper'>

          <ProjectItem/>

          <ProjectItem/>

          <ProjectItem/>

          <ProjectItem/>

          <ProjectItem/>

        </div>
    </WorkWrapper>
  )
}

export default Works