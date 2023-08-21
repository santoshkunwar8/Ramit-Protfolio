import React from 'react'
import { WorkSliderItemWrapper } from './workSlider.styles'
import WorkBox from '../WorkBox'
import { works } from '../../../utils/data'
import ProjectItem from '../ProjectItem/ProjectItem'

const WorkSliderItem = () => {
  return (
    <WorkSliderItemWrapper>
        <div className='work_header'>
            <div className='header_left'>

    <img width="44" height="44" src="https://img.icons8.com/3d-fluency/94/hard-working.png" alt="hard-working"/>
            <h1 className='header_text'>Explore my project</h1>
            </div>
            <button className='explore_button'>
                Explore All
            </button>

        </div>
        <div className='work_item_wrapper'>
            {
              works.map((w)=><ProjectItem />)
            }
        </div>
    </WorkSliderItemWrapper>
  )
}

export default WorkSliderItem