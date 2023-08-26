import { WorkSliderItemWrapper } from './workSlider.styles'

import ProjectItem from '../ProjectItem/ProjectItem'
import {Link} from "react-router-dom";
import { WorkType } from '../../../utils/Types';
import { useEffect, useState } from 'react';
import { getAllProjectApi } from '../../../utils/api';



const WorkSliderItem = () => {
    const [worksArr,setWorkArr] =useState<WorkType[]>([])



  useEffect(()=>{
    fetchAllWorks()
  },[])

  const fetchAllWorks=async()=>{
    try {
      const {data,status}= await getAllProjectApi();
      if(status===200){
        setWorkArr(data.message);
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <WorkSliderItemWrapper>
        <div className='work_header'>
            <div className='header_left'>

    <img width="44" height="44" src="https://img.icons8.com/3d-fluency/94/hard-working.png" alt="hard-working"/>
            <h1 className='header_text'>Explore my project</h1>
            </div>
         <Link to="/works">
            <button className='explore_button'>
                Explore All
            </button>
         </Link>

        </div>
        <div className='work_item_wrapper'>
            {
              worksArr.map((w)=><ProjectItem big={false} key={w._id}  work={w} />)
            }
        </div>
    </WorkSliderItemWrapper>
  )
}

export default WorkSliderItem