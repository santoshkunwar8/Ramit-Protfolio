import React, { ChangeEvent, useState } from 'react'
import CommentItem from './CommentItem/CommentItem'
import { WorkCommentsWrapper } from './WorkComments.styles'
import { WorkType } from '../../../utils/Types'
import { InfoWrapper } from '../../../Layouts/Info/Info.styles'
import Info from '../../../Layouts/Info/Info'
import { commentOnProjectApi } from '../../../utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../../redux/reducers'
import { IoSend} from 'react-icons/io5'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../redux'
type workCommentPropsType={
    work:WorkType|null
}
const WorkComments:React.FC<workCommentPropsType> = ({work}) => {

    const [hidden,setHidden] =useState(true)
    const [commentText,setCommentText] =useState<string>("");
    const {user} = useSelector((state:State)=>state.user)
    const dispatch  =useDispatch()
    const {refreshAction} = bindActionCreators(actionCreators,dispatch)


    const handleCommentInputChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        setCommentText(e.target.value);
    }


    const  handleSubmit=async()=>{
  
        if(!work?._id || !user?._id|| !commentText)return;
                const commentPaylaod = {
            text:commentText,
            work:work?._id,
            user:user?._id,
        }
       

            try {
               const {status}=  await commentOnProjectApi(commentPaylaod); 
               if(status===200){
                refreshAction();
                setHidden(true);
                setCommentText("")
               }
            } catch (error) {
                console.log(error)
            }
        
    }


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
            
        <button className='commentButton' onClick={()=>setHidden(!hidden)}>{hidden ?"Add Comment":"Close"} </button>
        <div className='hiddenComment'>
            <textarea onChange={handleCommentInputChange} value={commentText} name="" id=""  placeholder='Add your comment...'></textarea>
            <IoSend onClick={handleSubmit}/>
        </div>
        </div>

        <div className='comment_container'>

          {
          work  ? work?.comments.length > 0 ?  work?.comments.map(cmt=><CommentItem key={cmt._id} comment={cmt} /> ):<Info/>:""
          }

        </div>
    </WorkCommentsWrapper>
  )
}

export default WorkComments