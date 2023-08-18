import React from 'react'
import { WorkDetailsWrapper } from './workDetail.styles'
import Navbar from '../../Layouts/Navbar/Navbar'
import MainWorkDetails from '../../components/works/mainWorkDetail/MainWorkDetails'
import WorkComments from '../../components/works/WorkComment/WorkComments'

const WorkDetail = () => {
  return (
    <WorkDetailsWrapper>
        <Navbar/>
        <div className='workDetailsContainer'>

        <MainWorkDetails/>
        <WorkComments/>
        </div>

    </WorkDetailsWrapper>
  )
}

export default WorkDetail