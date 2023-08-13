import Rating from '@mui/material/Rating';
import { ReviewItemWrapper } from './Review.styles'

const ReviewItem = () => {
  return (
    <ReviewItemWrapper>

        <div className="review_top">
    <div className='user_image_wrapper'>

            <img  className='reviewImg' src="/images/user.png" alt="user image" />
    </div>
    <div className='review_item_right'>

        <div className='userInfo'>
    <div className=''>

            <h4 className='userName'>Rajiv Stha</h4>
            <span className='userEmail'>newar_rajiv@gmail.com</span>

    </div>
    <Rating color='red' name="size-small" defaultValue={2} size="small" />
    

            

        </div>
        <div className='review_text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis ut quo ad, id distinctio!
        </div>
        </div>
    </div>

    </ReviewItemWrapper>
  )
}

export default ReviewItem