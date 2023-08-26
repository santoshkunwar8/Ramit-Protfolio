
import { Rating } from '@mui/material'
import { MainWorkDetailsWrapper } from './MainWorkDetails.styles'
import SmallSkillItem from '../../home/SkillsItem/SmallSkillItem'
import { WorkType } from '../../../utils/Types'
import React from 'react'
import { BiShare } from 'react-icons/bi'

type MainWorkPropsType={
  work:WorkType |null,
}

const MainWorkDetails:React.FC<MainWorkPropsType> = ({work}) => {
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

        <Rating name="read-only"  value={work?.rating} readOnly />
        <p>(0)</p>
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
                <BiShare/>
            {/* <img width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/twitter-circled--v1.png" alt="twitter-circled--v1"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/> */}
            
        </div>

    </div>
    </div>



    </MainWorkDetailsWrapper>
  )
}

export default MainWorkDetails

