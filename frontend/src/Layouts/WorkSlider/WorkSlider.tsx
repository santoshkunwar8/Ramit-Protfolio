import React from 'react'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { WorkSliderWrapper } from './WorkSlider.styles';
import WorkBox from '../../components/works/WorkBox';
import WorkSliderItem from '../../components/works/WorkSliderItem/WorkSliderItem';

const WorkSlider = () => {
     const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <WorkSliderWrapper>
          <Slider {...settings} className='slider'>
            <WorkBox/>
            <WorkSliderItem/> 
        </Slider>
    </WorkSliderWrapper>
  )
}

export default WorkSlider