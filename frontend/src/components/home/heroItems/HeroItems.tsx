// import React from 'react'
import { getAdminInfoApi } from '../../../utils/api';
import { HeroItemsWrapper } from './HeroItem.styles';
import {useState ,useEffect} from "react"


type itemCountType={
  work:null|number,
  skill:null|number,
  client:null| number;
}

const HeroItems = () => {

    const [itemCount,setItemCount] = useState<itemCountType>({
      work:null,
      skill:null, 
      client:null,
    })
    useEffect(() => {
      AdminInfo()
    }, [])
    
    const AdminInfo=async()=>{

      try {
          const {status,data} = await getAdminInfoApi()
          if(status===200){
            const {worksCount,skillsCount,clientsCount} = data;
            setItemCount({
              work:worksCount,
              skill:skillsCount,
              client:clientsCount,
            })
          }
      } catch (error) {
          console.log(error)
      }
    }

  return (
    <HeroItemsWrapper  >
      <div className='itemBox'>
    <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/briefcase--v2.png" alt="briefcase--v2"/>
    <p> <span className='item_count'>2+  </span>  Experience</p>
      </div>
       <div className='itemBox current_item'>

      <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/hard-working.png" alt="hard-working"/>
      <p> <span className='item_count'>{itemCount.work}+</span>  Works</p>
      </div>
       <div className='itemBox'>
        <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/user-group-man-woman--v3.png" alt="user-group-man-woman--v3"/>
      <p> <span className='item_count'> {itemCount.client}+</span> Clients</p>
      </div>
      <div className='itemBox'>
        <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/maintenance.png" alt="maintenance"/>
        <p> <span className='item_count'>{itemCount.skill}+</span> Skills</p>
      </div>
    </HeroItemsWrapper>
  )
}

export default HeroItems