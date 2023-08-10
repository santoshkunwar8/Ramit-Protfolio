// import React from 'react'
import { HeroItemsWrapper } from './HeroItem.styles';


const HeroItems = () => {
  return (
    <HeroItemsWrapper  >
      <div className='itemBox'>
    <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/briefcase--v2.png" alt="briefcase--v2"/>
    <p> <span className='item_count'>2+  </span>  Experience</p>
      </div>
       <div className='itemBox current_item'>

      <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/hard-working.png" alt="hard-working"/>
      <p> <span className='item_count'>99+</span>  Works</p>
      </div>
       <div className='itemBox'>
        <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/user-group-man-woman--v3.png" alt="user-group-man-woman--v3"/>
      <p> <span className='item_count'> 55+</span> Clients</p>
      </div>
      <div className='itemBox'>
        <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/maintenance.png" alt="maintenance"/>
        <p> <span className='item_count'>23+</span> Skills</p>
      </div>
    </HeroItemsWrapper>
  )
}

export default HeroItems