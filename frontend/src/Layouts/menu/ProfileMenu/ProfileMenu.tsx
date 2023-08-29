import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MdLogout } from 'react-icons/md';
import { logoutApi } from '../../../utils/api';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../redux';
import { useDispatch } from 'react-redux';
import useAlert from '../../../hooks/useAlert';
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
    <div>
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
        <MenuItem    sx={{background:"#151515",display:"flex",gap:"5px"}} onClick={handleLogout}>
            <MdLogout/>
            <p>Logout</p>
        </MenuItem>
     
      </Menu>
    </div>
  );
}
export default ProfileMenu;