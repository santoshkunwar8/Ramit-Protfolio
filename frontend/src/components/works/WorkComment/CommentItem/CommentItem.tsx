import React from 'react'
import { CommentItemWrapper } from './CommentItem.styles'

const CommentItem = () => {
  return (
    <CommentItemWrapper>
        <div className='comment_header'>

            <div className="userProfileInfo">
                <img src="https://images.pexels.com/photos/17927562/pexels-photo-17927562/free-photo-of-laundry-hanging-on-the-clothesline-in-front-of-an-old-house.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="user profile image" />
            
                    <div className='primaryUserInfo'>


                        <h3 className='userName'>Rajiv Stha</h3>
                        <span className='userEmail'>newarRajiv@gmail.com</span>

                    </div>
             
            </div>
           
                    <p className='createdTime' >4 min ago</p>
 

        </div>
        <div className='comment_text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur omnis iste nisi?
        </div>
    </CommentItemWrapper>
  )
}

export default CommentItem