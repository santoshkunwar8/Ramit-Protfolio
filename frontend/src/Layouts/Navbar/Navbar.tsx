
import { NavbarWrapper } from './Navbar.styles'

const Navbar = () => {
  return (
    <NavbarWrapper>

        <div  className='nav_left'>
            <h1 className='logo_text'>Codewithmama</h1>
        </div>
        <div className='nav_right'>

        <ul className='nav_list'>
            <li className='active_nav'>Dashboard</li>
            <li>Reviews</li>
            <li>Works</li>

            
        </ul>
            <button className='client_button'>Become Client</button>
        </div>


    </NavbarWrapper>
  )
}

export default Navbar