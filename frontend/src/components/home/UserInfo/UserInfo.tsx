import { UserInfoWrapper } from './UserInfo.styles';
import { FaLinkedinIn, FaFacebook, FaInstagram} from "react-icons/fa";
import {TfiGithub } from "react-icons/tfi";
import { UserType } from '../../../utils/Types';
type AdminInfoProps={
  adminData : UserType |null
}
const UserInfo:React.FC<AdminInfoProps> = ({}) => {

  return (
    <UserInfoWrapper>
        
    
            <div className='name_box' >
                <p className='name_label'></p>
                <p className="name_value">  Ramit Neupane (CEO & Founder - Cornor Tech) </p>

            </div>
            <div className="user_map_box">
          <img src='/images/user.png'/>
            </div>
            <div className="social_media_box">
              
                <a href='https://www.linkedin.com/in/ramitnpn/' target='_blank' className="media_box current_media" >

                <FaLinkedinIn/>
                </a>
                <a href='https://www.facebook.com/ramitnpn1' target='_blank' className="media_box">

                <FaFacebook/>
                </a>
                <a  href='https://github.com/RamitNpn' target='_blank' className="media_box">
    <TfiGithub/>
                </a>
                <a href='https://www.instagram.com/ramitnpn1/' target='_blank' className='media_box'>

                <FaInstagram/>
                </a>

            </div>

    </UserInfoWrapper>
  )
}

export default UserInfo