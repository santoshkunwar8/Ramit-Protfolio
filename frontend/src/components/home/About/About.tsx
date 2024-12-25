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
        Meet Ramit Neupane, a visionary entrepreneur and tech enthusiast with a passion for innovation. Ramit’s expertise lies in web development, graphics design, and crafting dynamic business strategies. As the Founder & CEO of Cornor Tech, he leads a dedicated team focused on digitalizing Nepal and delivering accessible IT solutions.

A dynamic individual with a knack for both technical and creative pursuits, Ramit blends his technical skills in MERN stack development with a strategic approach to driving growth. His commitment to excellence and forward-thinking mindset inspires those around him to push boundaries and achieve greatness.
  </p>
    </AboutWrapper>
  )
}

export default About