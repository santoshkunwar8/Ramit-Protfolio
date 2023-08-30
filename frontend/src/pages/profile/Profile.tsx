import { MdMoreVert } from 'react-icons/md'
import Navbar from '../../Layouts/Navbar/Navbar'
import { ProfileWrapper } from './Profile.styles'
import ProfileMenu from '../../Layouts/menu/ProfileMenu/ProfileMenu'
import { useSelector } from 'react-redux'
import { State } from '../../redux/reducers'
import SetupSkillItem from '../../components/profile/SetupSkillItem.tsx/SetupSkillItem'
import CvItem from '../../components/profile/CVItem/CvItem'

const Profile = () => {
  const {user} = useSelector((state:State)=>state.user)

  return (
    <ProfileWrapper >
                <Navbar/>
            <div className="profielTop">

                    <div className="profileBg">

                    </div>
                    <div className="profileInfo">
                      <ProfileMenu>

                        <MdMoreVert className="otherIcon"/>
                      </ProfileMenu>
                        <img className='profileImg' src={user?.profileImg} alt="userProfileImg" />
                        <div className='userInfo'>

                            <h3 className='username'>{user?.username}</h3>
                            <p className='location'>{user?.country}</p>
                            <p className='role'>Project Lead at Leapfrog</p>
                        </div>
                        <div className='button_wrapper'>

                            <button className="share_profile_button">
                                    Share profile
                            </button>
                            <button className="become_client_button">
                                Become client
                            </button>

                        </div>
                    </div>

            </div>
            <div className='skillsBox'>

            <div className='skillsHeader'>
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/hard-working.png" alt="hard-working"/>
                <h3>Skills</h3>


            </div>
                <div className="skillsWrapper">
                {
                  user?.skills.map(skl=><SetupSkillItem skill={skl} selectedSkill={[]} />)
                } 
                </div>
     
            </div>


                <div className="cvBox">


                  <div className="cvHeader">
                    <div className="header_left">

                    <img width="68" height="68" src="https://img.icons8.com/external-flat-icons-vectorslab/68/external-Cv-social-media-flat-icons-vectorslab.png" alt="external-Cv-social-media-flat-icons-vectorslab"/>
                    <h3 className='cvText'>CV</h3>
                    </div>
                    <button className='addCV'>
                      Add CV
                    </button>
                    </div>
                    
                 {

                 user &&  user.cv.length>0 ?  <div className="cvWrapper">
                      {
                  user?.cv.map(c=><CvItem key={c} cvUrl={c}/>) 
                      }
         
                    </div> :""
                    }



                </div>
    </ProfileWrapper>
  )
}

export default Profile