import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { UploadWrapper } from './Upload.styles'

const Upload = () => {
  return (
    <UploadWrapper>
        <div className='buttonBox'>
           <Link to={"work"}>
           <div className='uplaodItem'>
             <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/hard-working.png" alt="hard-working"/>

            <p>Work</p></div>
           </Link> 
           <Link to={"tool"}>
            <div className='uplaodItem'>
              <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/maintenance.png" alt="maintenance"/>
              <p>Tool</p></div>
           </Link>

        </div>
        <Outlet/>

    </UploadWrapper>
  )
}

export default Upload