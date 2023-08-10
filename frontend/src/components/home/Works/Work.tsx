import { WorkItemWrapper } from './WorkItem.styles';
import {BsArrowUpRightSquare} from "react-icons/bs"

const WorkItem = ({work}) => {
  return (
    <WorkItemWrapper  >
{/* <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/link.png" alt="link"/> */}
<img className='workLogo' src={work.image} alt="" />
       <div>
         <p  className='workName'> {work.name} </p>
        <p className='createdTime'>Created At : {work.createdAt}</p>
         
        </div>
        <button className='visit'> visit</button>

    </WorkItemWrapper>

  )
}

export default WorkItem;