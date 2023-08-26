import  { useEffect, useState } from 'react'
import { WorkDetailsWrapper } from './workDetail.styles'
import Navbar from '../../Layouts/Navbar/Navbar'
import MainWorkDetails from '../../components/works/mainWorkDetail/MainWorkDetails'
import WorkComments from '../../components/works/WorkComment/WorkComments'
import { useParams } from 'react-router-dom'
import { getSingleProjectApi } from '../../utils/api'
import { WorkType } from '../../utils/Types'
import { useSelector } from 'react-redux'
import { State } from '../../redux/reducers'

const WorkDetail = () => {
  const [workData,setWorkData] =useState<WorkType| null>(null)
  const {refresh} = useSelector((state:State)=>state.other)

  const {id} =useParams()
  
  useEffect(()=>{
    fetchWorkById()
  },[id,refresh])

  const fetchWorkById=async()=>{

    if(!id)return;
    try {
    const {data,status} = await getSingleProjectApi(id);
    if(status===200){
      setWorkData(data.message[0]);
    }

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <WorkDetailsWrapper>
        <Navbar/>
        <div className='workDetailsContainer'>
        <MainWorkDetails work={workData}/>
        <WorkComments work={workData}/>
        </div>

    </WorkDetailsWrapper>
  )
}

export default WorkDetail