
import { WorkWrapper } from './Works.styles'
import Navbar from '../../Layouts/Navbar/Navbar'
import ProjectItem from '../../components/works/ProjectItem/ProjectItem'

const Works = () => {
  return (
    <WorkWrapper>
        <Navbar/>
        <div className="work_container">
          <div className="work_header">
            <div className='filter_item'>
             <label htmlFor="platform">Platform</label>
            <select name="" id="">
              <option value="platform">All</option>
              <option value="Web application">Web application</option>
              <option value="Web application">Mobile application</option>


            </select>
            </div>
                <div className='filter_item'>
             <label htmlFor="platform">Progress</label>
            <select name="" id="">
              <option value="platform">All</option>
              <option value="Web application">Completed</option>
              <option value="Web application">Progress</option>


            </select>
            </div>
                   <div className='filter_item'>
             <label htmlFor="platform">Ratings</label>
            <select name="" id="">
              <option value="platform">All</option>
              <option value="Web application">5</option>
              <option value="Web application">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>


            </select>
            </div>
          </div>
        <div className='workWrapper'>

          <ProjectItem/>


          <ProjectItem/>

          <ProjectItem/>

          <ProjectItem/>

          <ProjectItem/>

        </div>
        </div>
    </WorkWrapper>
  )
}

export default Works