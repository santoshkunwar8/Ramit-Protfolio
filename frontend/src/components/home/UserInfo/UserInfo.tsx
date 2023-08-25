import { UserInfoWrapper } from './UserInfo.styles';
import {TbBrandFiverr} from "react-icons/tb";;
import {VscGithub} from "react-icons/vsc";
import {FaTwitter, FaLinkedinIn} from "react-icons/fa";
const UserInfo = () => {
  return (
    <UserInfoWrapper>
        <div className="imageWrapper">
<img src={"https://res.cloudinary.com/onlinecoder/image/upload/v1692963682/jpyhxdc4esf8yjy7oejz.jpg"} alt=""  className='userImage'/>
        </div>
        <div className="otherInfo">
            <div className='name_box' >
                <p className='name_label'>Name</p>
                <p className='name_value'>Santosh kunwar</p>
            </div>
            <div className="user_map_box">

            </div>
            <div className="social_media_box">
              
                <a href='https://www.linkedin.com/in/santosh-kunwar-5573a2273/' target='_blank' className="media_box current_media" >

                <FaLinkedinIn/>
                </a>
                <a href='https://www.fiverr.com/santoshkunwa442' target='_blank' className="media_box">

                <TbBrandFiverr/>
                </a>
                <a  href='https://github.com/Santoshkunwar44' target='_blank' className="media_box">

                <VscGithub/>
                </a>
                <a href='https://twitter.com/santosh68789183' target='_blank' className='media_box'>

                <FaTwitter/>
                </a>

            </div>
        </div>

    </UserInfoWrapper>
  )
}

export default UserInfo