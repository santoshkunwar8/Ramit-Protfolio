
import {useState} from "react"
import { Rating } from '@mui/material'
import { MainWorkDetailsWrapper } from './MainWorkDetails.styles'
import SmallSkillItem from '../../home/SkillsItem/SmallSkillItem'
import { WorkType } from '../../../utils/Types'
import React from 'react'
import { BiShare } from 'react-icons/bi'
import { rateProjectApi } from '../../../utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../../redux/reducers'
import { bindActionCreators } from "redux"
import { actionCreators } from "../../../redux"
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, WhatsappIcon, WhatsappShareButton } from "react-share"


type MainWorkPropsType={
  work:WorkType |null,
}

const MainWorkDetails:React.FC<MainWorkPropsType> = ({work}) => {
const {user} = useSelector((state:State)=>state.user);
const dispatch = useDispatch()
const {refreshAction} = bindActionCreators(actionCreators,dispatch)





  const handleRateWork=async(rating:number)=>{
    if(!user?._id || !work)return;

    const ratingPayload = {
      user:user?._id,
      work:work?._id,
      rating
    }
    try {
    await rateProjectApi(ratingPayload);
    refreshAction()  
    } catch (error) {
      console.log(error)
    }
  }

  const handleRatingChange=async(_:React.SyntheticEvent<Element,Event>,rating:number|null)=>{
    if(!rating)return;
try {
  await handleRateWork(rating);

} catch (error) {
  console.log("error while rating",error)
}


  }
  console.log(work?.rating)
  return (
    <MainWorkDetailsWrapper status={work?.status?? ""}>

    <div className='imageBox'>
        <div className='mainImgWrapper'>

        <img src={work?.mainImg} alt="" />

        </div>
        <div className='otherImages'>
          {
            work?.photos.map(img=>     <img key={img} src={img} alt={"projects Img"} />
              )
          }
         
            </div>

    </div>
    <div className='otherInfo'>
        <div className='infoTop'>

        <div className='primaryInfo'>
            <div className='main_info'>

            <h1 className='workName'>{work?.name}</h1>
            <p className='workType'>Online thrift marketplace</p>
            <a className='workLink' href={work?.link} target='_blank'>{work?.link}</a>
            </div>
    <div className='ratingBox'>

        <Rating precision={0.5} name="read-only"   value={work?.rating ?? 0} onChange={handleRatingChange} />
        <p>({work?.ratings.length})</p>
    </div>
            </div>
            <p className='workDesc'>{work?.desc}</p>
            <button className="statusButton">
              {work?.status}
            </button>
        </div>

    <div className='actionBox'>
        <div className='techUsed'>
                {
                    work?.tools.map(skill=><SmallSkillItem key={skill.name} skill={skill}/>)
                }
        </div>
        
        <div className='shareBox'>
                  
                    {/* <BiSolidShareAlt onClick={handleShareMode}/> */}
                    <FacebookShareButton url={work?.link ?? ""}>

                  <FacebookIcon size={40} borderRadius={5}   />
                
                    </FacebookShareButton>
                    <LinkedinShareButton url={work?.link ?? ""}>
                      <LinkedinIcon size={40}  borderRadius={5}/>
                    </LinkedinShareButton>
                        <WhatsappShareButton url={work?.link ?? ""}>
                      <WhatsappIcon size={40}  borderRadius={5}/>
                    </WhatsappShareButton>
               
        </div>

    </div>
    </div>



    </MainWorkDetailsWrapper>
  )
}

export default MainWorkDetails

