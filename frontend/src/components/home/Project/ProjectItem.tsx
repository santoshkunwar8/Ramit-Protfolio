
import { ProjectItemWrapper } from "./ProjectItem.styles"
import { WorkType } from "../../../utils/Types"
type ProjectItemPropsType={
  work:WorkType, 
}
const ProjectItem:React.FC<ProjectItemPropsType> = ({work}) => {
  return (
    <ProjectItemWrapper>

    <div className="image_wrapper">

        <img src="https://images.pexels.com/photos/3584974/pexels-photo-3584974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        


    </div>
    <div className="project_info">
      <div>
        
        <h3 className="project_name">{work.name}</h3>
        <p className="project_desc">{work.type}</p>
      </div>


    <div className="projectAction">
        <p className="ratint_text">Rating {work.rating}/5</p>
        <div className="ratingBar">
            <div className="ratingProgress">

            </div>
        </div>
{/*         
        <div className="like_box">
            
                <p>33</p>
             <AiOutlineLike/>
            </div> */}

    </div>

    </div>

    </ProjectItemWrapper>
  )
}

export default ProjectItem