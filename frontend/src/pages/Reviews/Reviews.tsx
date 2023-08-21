import { ReviewsWrapper } from './Reviews.styles'
import Navbar from '../../Layouts/Navbar/Navbar'
import ReviewItem from '../../components/home/Reviews/ReviewItem/ReviewItem'
import ReviewModal from '../../Layouts/modal/ReviewModal/ReviewModal'
import { useEffect, useState } from 'react'
import { getAllReviewsApi } from '../../utils/api'

const Reviews = () => {


  const [reviewsData,setReviewsData] =useState([])

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

        <Navbar/>

        <div className='reviews_container'>

          <div className='review_header'>
            <div className="header_left">
    <img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/rating.png" alt="rating"/>
      <h1>My reviews</h1>
            </div>
            <div className='header_right'>

        <ReviewModal >

              <button className='reviewButton'>Add review</button>
        </ReviewModal>

            </div>

          </div>
    <div className="review_wrapper">

         {
          reviewsData.map(review=><ReviewItem big={true} review={review}/>
          

          )
         } 
          
    </div>

        </div>


    </ReviewsWrapper>
  )
}

export default Reviews