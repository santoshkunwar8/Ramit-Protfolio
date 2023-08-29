import { MdMoreVert } from 'react-icons/md'
import Navbar from '../../Layouts/Navbar/Navbar'
import { ProfileWrapper } from './Profile.styles'
import ProfileMenu from '../../Layouts/menu/ProfileMenu/ProfileMenu'
import { useSelector } from 'react-redux'
import { State } from '../../redux/reducers'

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
                 <img width="34" height="34" src="https://img.icons8.com/3d-fluency/94/maintenance.png" alt="maintenance"/>
                <h3>Skills</h3>


            </div>
                <div className="skillsWrapper">
                    <div className="skillItem">
                            Product Design 
                    </div>
                      <div className="skillItem">
                            Product Design 
                    </div>
                      <div className="skillItem">
                            Product Design 
                    </div>
                      <div className="skillItem">
                            Product Design 
                    </div>
                      <div className="skillItem">
                            Product Design 
                    </div>
                </div>
     
            </div>



    </ProfileWrapper>
  )
}

export default Profile