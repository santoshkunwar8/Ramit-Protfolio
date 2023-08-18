import { ReviewsWrapper } from './Reviews.styles'
import Navbar from '../../Layouts/Navbar/Navbar'
import ReviewItem from '../../components/home/Reviews/ReviewItem/ReviewItem'

const Reviews = () => {
  return (
    <ReviewsWrapper>

        <Navbar/>

        <div className='reviews_container'>

          <ReviewItem big={true}/>
            <ReviewItem big={true}/>
              <ReviewItem big={true}/>
                <ReviewItem big={true}/>

                  <ReviewItem big={true}/>
                    <ReviewItem big={true}/>
                      <ReviewItem big={true}/>
                        <ReviewItem big={true}/>

        </div>


    </ReviewsWrapper>
  )
}

export default Reviews