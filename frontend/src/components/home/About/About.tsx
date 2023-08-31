// import React from 'react'
import { UserType } from '../../../utils/Types'
import { AboutWrapper } from './About.styles'
type AdminInfoProps={
  adminData : UserType |null
}
const About:React.FC<AdminInfoProps> = ({adminData}) => {

  return (
    <AboutWrapper >
        <div>
            <h5>About </h5> 
        </div>
        <p className='aboutText'>
          {adminData?.about}
  </p>
    </AboutWrapper>
  )
}

export default About