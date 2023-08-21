import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {ClientModalWrapper} from "./ClientModal.styles";
import { becomeClientApi } from '../../../utils/api';



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 750,
  width:"90%",
  bgcolor: '#151515',
  border: '2px solid #black',
  boxShadow: 24,
  p: 6,
};

type ClientModalPropsType={
    children: React.ReactNode
}
const  ClientModal:React.FC<ClientModalPropsType>=({children}) =>{

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [checked,setChecked] =React.useState<boolean>(false)
  const currentUser = "64e1ef62ba438974bf2cfc5c"

  const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    
     setChecked(e.currentTarget.checked)
   
  }

  const handleSubmit=async()=>{
    if(!checked)return;
    try {
      const {data,status} = await becomeClientApi(currentUser)
      if(status===200){
      alert("successfull")
      }
    } catch (error) {
      console.log(error)
    }
  } 

  return (
    <div>
      <Button onClick={handleOpen}>{children}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         
            <ClientModalWrapper>
              <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/guest-male--v3.png" alt="guest-male--v3"/>
              <h1>BECOME CLIENT</h1>
              <div className='confirmBox'>
                <input onChange={handleInputChange} type="checkbox" name="" id="" />
                <p className='confrimText'>Are you sure , you want to be  a client of a Codewithmama ?</p>
              </div>
              <button  disabled={!checked} onClick={handleSubmit} className='confirmButton' >CONFIRM</button>
            </ClientModalWrapper>
        </Box>
      </Modal>
    </div>
  );
}
export default ClientModal;
