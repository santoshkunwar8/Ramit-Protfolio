
import { WorkWrapper } from './Works.styles'
import Navbar from '../../Layouts/Navbar/Navbar'
import ProjectItem from '../../components/works/ProjectItem/ProjectItem'
import { useEffect, useState } from 'react'
import { WorkType } from '../../utils/Types'
import { getAllProjectApi } from '../../utils/api'
import WorkSkeleton from '../../Layouts/skeleton/WorkSkeleton/WorkSkeleton'

const Works = () => {

  const [worksArr,setWorkArr] =useState<WorkType[]|null>(null)



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
    <WorkWrapper isLoading={!worksArr}>
        <Navbar/>
        <div className="work_container">
          <div className="work_header">
            <div className='filter_item'>
             <label htmlFor="platform">Platform</label>
            <select name="" id="">
              <option value="platform">All</option>
              <option value="Web application">Web application</option>
              <option value="Web application">Mobile application</option>


            </select>
            </div>
                <div className='filter_item'>
             <label htmlFor="platform">Progress</label>
            <select name="" id="">
              <option value="platform">All</option>
              <option value="Web application">Completed</option>
              <option value="Web application">Progress</option>


            </select>
            </div>
                   <div className='filter_item'>
             <label htmlFor="platform">Ratings</label>
            <select name="" id="">
              <option value="platform">All</option>
              <option value="Web application">5</option>
              <option value="Web application">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>


            </select>
            </div>
          </div>
        <div className='workWrapper'>

  {
  worksArr ?   worksArr.map(work=><ProjectItem big={true} key={work._id} work={work}/>):<WorkSkeleton/>

    
  }          



        </div>
        </div>
    </WorkWrapper>
  )
}

export default Works