import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {ClientModalWrapper} from "./ClientModal.styles";



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 650,
  width:"90%",
  bgcolor: '#151515',
  border: '2px solid #black',
  boxShadow: 24,
  p: 4,
};

type ClientModalPropsType={
    children: React.ReactNode
}
const  ClientModal:React.FC<ClientModalPropsType>=({children}) =>{

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Typography id="modal-modal-title" variant="h6" component="h2">
          BECOME CLIENT
          </Typography>
          <ClientModalWrapper>

                <textarea placeholder='Add review...' className='reviewInput' name="" id=""></textarea>
                <button className='reviewButton'>Add</button>
          </ClientModalWrapper>
        </Box>
      </Modal>
    </div>
  );
}
export default ClientModal;
