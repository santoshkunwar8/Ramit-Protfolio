import { MdMoreVert, MdOutlineAddModerator } from 'react-icons/md'
import Navbar from '../../Layouts/Navbar/Navbar'
import { ProfileWrapper } from './Profile.styles'
import ProfileMenu from '../../Layouts/menu/ProfileMenu/ProfileMenu'
import { useSelector } from 'react-redux'
import { State } from '../../redux/reducers'
import SetupSkillItem from '../../components/profile/SetupSkillItem.tsx/SetupSkillItem'
import { Link, useNavigate } from 'react-router-dom'
import ClientModal from '../../Layouts/modal/ClientModal/ClientModal'
import { BiUserCheck } from 'react-icons/bi'

const Profile = () => {
  const {user} = useSelector((state:State)=>state.user)
  const navigate =useNavigate()

  
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
                            <p className='role'></p>
                        </div>
                        <div className='button_wrapper'>

                            {/* <button className="share_profile_button">
                                    Share profile
                            </button> */}
                            {
                              user?.isClient ?   <button className="become_client_button">
                                <BiUserCheck/>
                                <p>

                                 client
                                </p>
                            </button> :
                            <ClientModal>

                            <button className="become_client_button">
                              
                                Become client
                            </button>
                            </ClientModal>
                            }

                        </div>
                    </div>

            </div>
            <div className='skillsBox'>

            <div className='skillsHeader'>
              <div className="header_left">

          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/hard-working.png" alt="hard-working"/>
                <h3>Skills</h3>

              </div>
                {( user && user?.skills?.length === 0 )&&  <Link  to={"/account/setup?skills=true"} className='addSkills'>
                      Add Skills
                    </Link>}

            </div>
             {
              user && user.skills && user?.skills?.length > 0 ?
               <div className="skillsWrapper">
                {
                  user?.skills?.map(skl=><SetupSkillItem skill={skl} selectedSkill={[]} />)
                }
                   <div onClick={()=>navigate("/account/setup?skills=true")} className="addMoreSkill">
            <MdOutlineAddModerator/>
            <p>Add More</p>
        </div> 
                </div>
     
     : ""}

     </div>

                {/* <div className="cvBox">


                  <div className="cvHeader">
                    <div className="header_left">

                    <img width="68" height="68" src="https://img.icons8.com/external-flat-icons-vectorslab/68/external-Cv-social-media-flat-icons-vectorslab.png" alt="external-Cv-social-media-flat-icons-vectorslab"/>
                    <h3 className='cvText'>CV</h3>
                    </div>
                 {( user && !user.cv ) &&  <Link to={"/account/setup?cv=true"} className='addCV'>
                      Add CV
                    </Link>}
                    </div>
                    
                 {

                 user &&  user.cv ?  <div className="cvWrapper">
                   
                 <CvItem  cvUrl={user.cv}/>
                  
         
                    </div> :""
                    }



                </div> */}
    </ProfileWrapper>
  )
}

export default Profile