import {Link, useLocation} from "react-router-dom";
import { NavbarWrapper } from './Navbar.styles'
import ClientModal from "../modal/ClientModal/ClientModal";
import { useSelector } from "react-redux";
import { State } from "../../redux/reducers";

const Navbar = () => {

  const {user} = useSelector((state:State)=>state.user)
  const path = useLocation().pathname.split("/")[1]
  
  const isActive=(navName:string):string=>{

      if(navName===path){
        return "active_nav"
      }else{
        return "";
      }
  }



  return (
    <NavbarWrapper>

        <div  className='nav_left'>
          <Link to={"/"} >
        <div className="logoBg">
            <h1 className='logo_text'>CodeWithMama</h1>
        </div>
          </Link>
        </div>
        <div className='nav_right'>

        <ul className='nav_list'>
            <Link  to="/">
            <li className={`${isActive("")}`}>Dashboard</li>
            
            </Link> 
            <Link to={"/reviews"}>
            <li className={`${isActive("reviews")}`}>Reviews</li>
            </Link>
           <Link to={"/works"}>
            <li className={`${isActive("works")}`}> Works</li>
           </Link>
           <Link to={"/contact"}>
           <li className={`${isActive("contact")}`}>Contact</li>
           </Link>
        </ul>
           
           {
           !user?.isClient && user? <ClientModal>
             <button className='client_button'>Become Client</button>
            </ClientModal>:""
}
            {

            !user ? <Link to={"/login"}>
                 <button className='client_button'>Login</button>
               </Link> : <Link  className="profileBox" to={`/account/profile/${user._id}`}>

                <img className="profileImg" src={user.profileImg} alt="userProfile" />
                <div className="profileInfo">
                  <h4  className="profileName">{user.username}</h4>
                  <span className="profileEmail">{user.email}</span>
                  </div>

                </Link>
              } 
               
        </div>


    </NavbarWrapper>
  )
}

export default Navbar