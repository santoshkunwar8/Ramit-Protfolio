
import { Rating } from '@mui/material'
import { MainWorkDetailsWrapper } from './MainWorkDetails.styles'
import SkillItem from '../../home/SkillsItem/SkillItem'
import SmallSkillItem from '../../home/SkillsItem/SmallSkillItem'

const MainWorkDetails = () => {
  return (
    <MainWorkDetailsWrapper>

    <div className='imageBox'>
        <div className='mainImgWrapper'>

        <img src="https://images.pexels.com/photos/289927/pexels-photo-289927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

        </div>
        <div className='otherImages'>
            <img src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <img src="https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            </div>

    </div>
    <div className='otherInfo'>
        <div className='infoTop'>

        <div className='primaryInfo'>
            <div>

            <h1 className='workName'>Vrumies</h1>
            <p className='workType'>Online thrift marketplace</p>
            <a className='workLink' href="">https://vrumies.org</a>
            </div>
    <div className='ratingBox'>

        <Rating name="read-only" size='large' value={4} readOnly />
        <p>(2)</p>
    </div>
            </div>
            <p className='workDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime reprehenderit et facere iusto in, explicabo, ducimus ea quaerat, tempora dolorum aliquid. Laudantium. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia maiores accusantium similique!</p>
        </div>

    <div className='actionBox'>
        <div className='techUsed'>
                {
                    skillArr.map(skill=><SmallSkillItem key={skill.name} skill={skill}/>)
                }
        </div>
        <div className='shareBox'>

            <img width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/twitter-circled--v1.png" alt="twitter-circled--v1"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
            
        </div>

    </div>
    </div>



    </MainWorkDetailsWrapper>
  )
}

export default MainWorkDetails


const skillArr=[
  {
    name:"Javascript",
    image:"/images/js.png"
  },
  {
    name:"Java",
    image:"/images/java.png"
  },
  {
   name:"Php",
   image:"/images/php.png"
 },
  {
    name:'React Js',
    image:"/images/react.png"
  },
  {
    name:"Node Js",
    image:"/images/node.png"
  },
   

]