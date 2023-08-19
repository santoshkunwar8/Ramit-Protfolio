import {Link} from "react-router-dom";
import { NavbarWrapper } from './Navbar.styles'

const Navbar = () => {
  return (
    <NavbarWrapper>

        <div  className='nav_left'>
            <h1 className='logo_text'>Codewithmama</h1>
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
            <button className='client_button'>Become Client</button>
                 <button className='client_button'>Register</button>
        </div>


    </NavbarWrapper>
  )
}

export default Navbar