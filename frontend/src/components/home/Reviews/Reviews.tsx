import React, { useEffect, useState } from 'react'
import { ReviewsWrapper } from './Reviews.styles'
import ReviewItem from './ReviewItem/ReviewItem'
import { getAllReviewsApi } from '../../../utils/api'
import { ReviewType } from '../../../utils/Types'

const Reviews = () => {

   const [reviewsData,setReviewsData] =useState<ReviewType[]>([])

  useEffect(()=>{
    handleFetchReviews()
  },[])


  const handleFetchReviews=async()=>{


      try {
        const {data,status} = await  getAllReviewsApi();  
        if(status===200){
          setReviewsData(data.message)
        }

      } catch (error) {
        
      }
  }
  

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

              {
                reviewsData.map(review=><ReviewItem  big={true} review={review} key={review._id}/>)
              }

        </div>

    </ReviewsWrapper>
  )
}

export default Reviews