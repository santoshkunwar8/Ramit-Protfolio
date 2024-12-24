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
         {adminData?.about}  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati placeat repellat corporis accusantium sapiente a ea explicabo dolores voluptas quam, odio itaque. Reprehenderit similique eaque repellat minus quis? Tempore nemo corrupti eos libero aut ea veniam, dolor iure illum repellat vitae eaque accusantium, molestias fuga, dolorem quas sint eum odio.
  </p>
    </AboutWrapper>
  )
}

export default About