import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ReviewModalWrapper } from './ReviewModal.styles';

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

type ReviewModalPropsType={
    children: React.ReactNode
}
const  ReviewModal:React.FC<ReviewModalPropsType>=({children}) =>{

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
            ADD REVIEW
          </Typography>
          <ReviewModalWrapper>

                <textarea placeholder='Add review...' className='reviewInput' name="" id=""></textarea>
                <button className='reviewButton'>Add</button>
          </ReviewModalWrapper>
        </Box>
      </Modal>
    </div>
  );
}
export default ReviewModal;