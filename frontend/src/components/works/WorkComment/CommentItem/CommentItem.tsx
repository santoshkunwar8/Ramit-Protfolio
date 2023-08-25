import React from 'react'
import { CommentItemWrapper } from './CommentItem.styles'
import { CommentType } from '../../../../utils/Types'
import {format} from "timeago.js"
type CommentItemPropsType={
    comment:CommentType
}
const CommentItem:React.FC<CommentItemPropsType> = ({comment}) => {
    console.log(comment)
  return (
    <CommentItemWrapper>
        <div className='comment_header'>

            <div className="userProfileInfo">
                <img src={comment.user.profileImg} alt="user profile image" />
                    <div className='primaryUserInfo'>
                        <h3 className='userName'>{comment.user.username}</h3>
                        <span className='userEmail'>{comment.user.email}</span>
                    </div>
            </div>
                    <p className='createdTime' >{ comment?.createdAt && format(comment?.createdAt)}</p>
        </div>
        <div className='comment_text'>
        {comment.text}
        </div>
    </CommentItemWrapper>
  )
}

export default CommentItem