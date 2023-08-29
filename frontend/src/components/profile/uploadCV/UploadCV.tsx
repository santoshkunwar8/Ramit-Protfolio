
import { UploadCVWrapper } from './Upload.styles'

const UploadCV = () => {
  return (
    <UploadCVWrapper>
        <div className='cvHeader'>
<img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/ok.png" alt="ok"/>
        <h1 className='main_text'>ALMOST COMPLETED</h1>
        </div>
        <img className='cvImage' src="/images/cv.png" alt="cvImage" />
     <button className='uploadCvButton'>UPLAOD CV</button>

    </UploadCVWrapper>
  )
}

export default UploadCV