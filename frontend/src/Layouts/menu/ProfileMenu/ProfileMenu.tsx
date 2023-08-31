import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MdLogout } from 'react-icons/md';
import { logoutApi } from '../../../utils/api';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../redux';
import { useDispatch } from 'react-redux';
import {CgProfile} from "react-icons/cg"
import useAlert from '../../../hooks/useAlert';
import { ProfileMenuWrapper } from './ProfileMenu.styles';
type ProfileMenuProps={
    children:React.ReactNode,
}
const  ProfileMenu:React.FC<ProfileMenuProps>=({children})=> {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate =useNavigate();
  const dispatch = useDispatch()
  const {notify} =useAlert()
  const {RemoveUserAction} =bindActionCreators(actionCreators,dispatch )

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleLogout=async()=>{
    try {
       const {status} =  await logoutApi()
       if(status===200){    
        handleClose()
        notify("Logged out successfully ","success")
        RemoveUserAction()
        navigate("/")



       }
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <ProfileMenuWrapper>
      <span
      className='otherIcon'
      
        onClick={handleClick}
      >
       {children}
      </span>
      <Menu
      sx={{background:"transparent",padding:0}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
         
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      {/* <MenuItem  className='profileMenuItem'  sx={{background:"#151515",display:"flex",gap:"5px"}} onClick={()=>{navigate("/account/setup")}}>
            <CgProfile  className="icon"/>
            <p style={{color:"var(--gray)",fontSize:"14px",letterSpacing:"1px"}}>Update Profile</p>
        </MenuItem> */}
        <MenuItem  className='profileMenuItem'  sx={{background:"#151515",display:"flex",gap:"5px"}} onClick={handleLogout}>
            <MdLogout/>
            <p style={{color:"var(--gray)",fontSize:"14px",letterSpacing:"1px"}}>Logout</p>
        </MenuItem>
     
      </Menu>
    </ProfileMenuWrapper>
  );
}
export default ProfileMenu;