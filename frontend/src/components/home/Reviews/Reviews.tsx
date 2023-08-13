import React from 'react'
import { ReviewsWrapper } from './Reviews.styles'
import ReviewItem from './ReviewItem/ReviewItem'

const Reviews = () => {
  return (
    
    <ReviewsWrapper>

        <div className="reviewTopContent">
            <div className='vertical_line'>
                
            </div>
            <div className='content_right'>
            <div>
                <h1 className='heading_text'>Reviews</h1>
            </div>
            <h1>Words of Praise </h1>
            <h1> Client Reviews that Showcase  </h1> 
            <h1> Our Commitment to Excellence.</h1>
            </div>
        </div>
        <div className='review_wrapper'>

                <ReviewItem/>
                 <ReviewItem/>
                  <ReviewItem/>
                   <ReviewItem/>


        </div>

    </ReviewsWrapper>
  )
}

export default Reviews