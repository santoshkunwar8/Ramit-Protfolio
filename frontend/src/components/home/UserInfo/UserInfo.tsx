import { UserInfoWrapper } from './UserInfo.styles';
import {TbBrandFiverr} from "react-icons/tb";;
import {VscGithub} from "react-icons/vsc";
import {FaTwitter, FaLinkedinIn} from "react-icons/fa";
const UserInfo = () => {
  return (
    <UserInfoWrapper>
        <div className="imageWrapper">
<img src="/images/user.png" alt=""  className='userImage'/>
        </div>
        <div className="otherInfo">
            <div className='name_box' >
                <p className='name_label'>Name</p>
                <p className='name_value'>Santosh kunwar</p>
            </div>
            <div className="user_map_box">

            </div>
            <div className="social_media_box">
                <div className="media_box current_media" >

                <FaLinkedinIn/>
                </div>
                <div className="media_box">

                <TbBrandFiverr/>
                </div>
                <div className="media_box">

                <VscGithub/>
                </div>
                <div className='media_box'>

                <FaTwitter/>
                </div>

            </div>
        </div>

    </UserInfoWrapper>
  )
}

export default UserInfo