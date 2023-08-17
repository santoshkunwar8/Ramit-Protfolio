import React from 'react'
import { WorkDetailsWrapper } from './workDetail.styles'
import Navbar from '../../Layouts/Navbar/Navbar'
import MainWorkDetails from '../../components/works/mainWorkDetail/MainWorkDetails'

const WorkDetail = () => {
  return (
    <WorkDetailsWrapper>
        <Navbar/>
        <MainWorkDetails/>
    </WorkDetailsWrapper>
  )
}

export default WorkDetail