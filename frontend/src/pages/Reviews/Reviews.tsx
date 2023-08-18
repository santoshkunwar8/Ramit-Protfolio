import { ReviewsWrapper } from './Reviews.styles'
import Navbar from '../../Layouts/Navbar/Navbar'
import ReviewItem from '../../components/home/Reviews/ReviewItem/ReviewItem'
import ReviewModal from '../../Layouts/modal/ReviewModal/ReviewModal'

const Reviews = () => {
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

          <ReviewItem big={true}/>
            <ReviewItem big={true}/>
              <ReviewItem big={true}/>
                <ReviewItem big={true}/>

                  <ReviewItem big={true}/>
                    <ReviewItem big={true}/>
                      <ReviewItem big={true}/>
                        <ReviewItem big={true}/>
    </div>

        </div>


    </ReviewsWrapper>
  )
}

export default Reviews