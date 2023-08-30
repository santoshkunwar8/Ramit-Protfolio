import { BiLeftArrowAlt } from 'react-icons/bi';
import { UploadCVWrapper } from './Upload.styles'
import {useState} from "react"


type  UploadCVType={
  handleBack:()=>void;
}
const UploadCV:React.FC<UploadCVType> = ({handleBack}) => {
  const [cvFiles,setCvFiles] =useState<FileList |null>()
  

  const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files){
      setCvFiles(e.target.files)
    }

  }




  return (
    <UploadCVWrapper>

        <div className='cvHeader'>
          <div className='back' onClick={handleBack}>
            <BiLeftArrowAlt/>
          </div>
          <div className='headerCenter'>

{/* <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/ok.png" alt="ok"/> */}
        <h1 className='main_text'>UPLOAD CV</h1>
          </div>
        </div>
        <input type="file"  multiple name="" id="" onChange={handleInputChange} style={{display:"none"}} />
        <img className='cvImage' src="/images/cv.png" alt="cvImage" />
     <button className='uploadCvButton'>UPLAOD </button>
     

    </UploadCVWrapper>
  )
}

export default UploadCV