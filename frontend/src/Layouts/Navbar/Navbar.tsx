import {Link} from "react-router-dom";
import { NavbarWrapper } from './Navbar.styles'
import ClientModal from "../modal/ClientModal/ClientModal";
import { useSelector } from "react-redux";
import { State } from "../../redux/reducers";

const Navbar = () => {

  const {user} = useSelector((state:State)=>state.user)





  return (
    <NavbarWrapper>

        <div  className='nav_left'>
          <Link to={"/"} >

            <h1 className='logo_text'>Codewithmama</h1>
          </Link>
        </div>
        <div className='nav_right'>

        <ul className='nav_list'>
            <Link  to="/">
            <li className='active_nav'>Dashboard</li>
            
            </Link> 
            <Link to={"/reviews"}>
            <li>Reviews</li>
            </Link>
           <Link to={"/works"}>
            <li>Works</li>
           </Link>
        </ul>
           
           {
           !user?.isClient && user? <ClientModal>
             <button className='client_button'>Become Client</button>
            </ClientModal>:""
}
            {

            !user &&  <Link to={"/signup"}>
                 <button className='client_button'>Register</button>
               </Link>
              } 
               
        </div>


    </NavbarWrapper>
  )
}

export default Navbar