import React, { useState } from 'react'
import CommentItem from './CommentItem/CommentItem'
import { WorkCommentsWrapper } from './WorkComments.styles'
import { WorkType } from '../../../utils/Types'
type workCommentPropsType={
    work:WorkType|null
}
const WorkComments:React.FC<workCommentPropsType> = ({work}) => {

    const [hidden,setHidden] =useState(true)



  return (

    <WorkCommentsWrapper hidden={hidden}>
        <div className='commentHeader'>
            <div className="vertical_line"></div>
            <div className="header_content">
            <div className='topic_box'>
                <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/comments.png" alt="comments"/>

            <h1 className='topic_text'>Comments</h1>
            </div>

            <h1 className='main_text'>Explore the archive of comments </h1>
            <h1 className='main_text'>  from others who have interacted with this project. </h1>
                <h1 className='main_text'>
                     Your comment could be the next addition.</h1>
            </div>
                    
        </div>
        <div className='add_commentBox'>
            
        <button className='commentButton' onClick={()=>setHidden(!hidden)}>Add comment </button>
        <div className='hiddenComment'>
            <textarea name="" id=""  placeholder='Add your comment...'></textarea>

        </div>
        </div>

        <div className='comment_container'>

          {
             work?.comments.map(cmt=><CommentItem key={cmt._id} />)
          }

        </div>
    </WorkCommentsWrapper>
  )
}

export default WorkComments