import { Link, useLocation } from "react-router-dom";
import { NavbarWrapper } from "./Navbar.styles";
import { useSelector } from "react-redux";
import { State } from "../../redux/reducers";
import {
  FaHome,
  FaStar,
  FaBriefcase,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  const { user } = useSelector((state: State) => state.user);
  const path = useLocation().pathname.split("/")[1];

  const isActive = (navName: string): string => {
    if (navName === path) {
      return "active_nav";
    } else {
      return "";
    }
  };

  return (
    <NavbarWrapper>
      <div className="nav_left">
        <Link to={"/"}>
          <div className="logoBg">
            <h1 className="logo_text">Ramit Neupane</h1>
          </div>
        </Link>
      </div>
      <div className="nav_right">
        <ul className="nav_list">
          <Link to="/">
            <li className={`${isActive("")}`}>
              <span className="nav_icon">
                <FaHome />
              </span>
              <span className="nav_text">Dashboard</span>
            </li>
          </Link>
          <Link to={"/reviews"}>
            <li className={`${isActive("reviews")}`}>
              <span className="nav_icon">
                <FaStar />
              </span>
              <span className="nav_text">Reviews</span>
            </li>
          </Link>
          <Link to={"/works"}>
            <li className={`${isActive("works")}`}>
              <span className="nav_icon">
                <FaBriefcase />
              </span>
              <span className="nav_text">Works</span>
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className={`${isActive("contact")}`}>
              <span className="nav_icon">
                <FaEnvelope />
              </span>
              <span className="nav_text">Contact</span>
            </li>
          </Link>
        </ul>

        {!user ? (
          <Link to={"/login"}>
            <button className="client_button">
              <FaUser className="login_icon" />
              <span>Login</span>
            </button>
          </Link>
        ) : (
          <Link className="profileBox" to={`/account/profile/${user._id}`}>
            <img
              className="profileImg"
              src={user.profileImg}
              alt="userProfile"
            />
            <div className="profileInfo">
              {/* <h4 className="profileName">{user.username}</h4> */}
              {/* <span className="profileEmail">{user.email}</span> */}
            </div>
          </Link>
        )}
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
