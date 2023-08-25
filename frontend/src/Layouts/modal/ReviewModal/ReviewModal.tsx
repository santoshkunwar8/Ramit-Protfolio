import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ReviewModalWrapper } from './ReviewModal.styles';
import { Rating } from '@mui/material';
import { ReviewStateType } from '../../../utils/Types';
import { createReviewsApi } from '../../../utils/api';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../redux';

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
  const dispatch  =useDispatch()

  const  {refreshAction} = bindActionCreators(actionCreators,dispatch)
  const [reviewsData,setReviewsData] = React.useState<ReviewStateType>({
    rating:0,
    text:"",
    user:"64dace25af403e0cf8dafe0e"
  })

  const handleSubmit=async()=>{

    try {
        const { status} = await createReviewsApi(reviewsData)
        if(status===200){
          // alert("successfull")
          setReviewsData((prev)=>({
            ...prev,text:"",rating:0,
          }))
          refreshAction();
          handleClose()
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ADD REVIEW
          </Typography>
          <ReviewModalWrapper>
                <Rating
                 size='large' max={5} value={reviewsData.rating}
                 onChange={(event, newValue) => {
                 if(newValue)
                setReviewsData(prev=>({...prev, rating:newValue}));
        }}
                  />
                <textarea placeholder='Add review...' className='reviewInput' name="text" value={reviewsData.text} onChange={e=>setReviewsData(prev=>({...prev,text:e.target.value}))} id=""></textarea>
                <button  onClick={handleSubmit} className='reviewButton'>Add</button>
          </ReviewModalWrapper>
        </Box>
      </Modal>
    </div>
  );
}
export default ReviewModal;