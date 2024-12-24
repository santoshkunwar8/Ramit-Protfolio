import React, { SyntheticEvent, useEffect, useRef, useState } from 'react'
import { BiSolidCloudUpload } from 'react-icons/bi'
import { UploadWorkWrapper } from '../Work/Work.styles'
import { ToolsStateType } from '../../../../utils/Types'
import useUploadImage from '../../../../hooks/UploadImage'
import { createToolApi } from '../../../../utils/api'

const Tools = () => {
  const [toolsData,setToolsData] = useState<ToolsStateType>({
    image:"",
    name:""
  })
  const {upload} =useUploadImage()
  const [file,setFile] =useState<File|null>(null)
  const fileRef =useRef<HTMLInputElement|null>(null)

 
  const handleChange =(event:React.ChangeEvent<HTMLInputElement>)=>{



      const {name,value,files} = event.target;


      if(name==="image"){
        if(files){
          setFile(files[0]);
        }
        return;
      }

      setToolsData((prev)=>{
        return {...prev,[name]:value}
      })
  }


  useEffect(()=>{

  })

  const handleAddToolsToDB=async(e:SyntheticEvent)=>{


    e.preventDefault();


    if(!file)return;

    try {

     const {url,status:uploadStatus} = await upload(file);
      if(uploadStatus===200){
        const payloadData = {
          image:url , 
          name:toolsData.name
        }


       const {status,data} =  await createToolApi(payloadData)
       if(status==200){
        alert("successfull");
       }else{
        throw data.message ;

       }
      }
    } catch (error) {
        console.log(error)
    }

  }


  return (
    <UploadWorkWrapper onSubmit={handleAddToolsToDB} style={{paddingTop:'2rem'}}>
        <input type="text" name="name" id="" placeholder='Tool Name'   onChange={handleChange}/>
        <input type="file" name="image" id="" style={{display:"none"}} ref={fileRef} onChange={handleChange} />
        <div className='toolUpload' onClick={()=>fileRef.current?.click()}>
            <BiSolidCloudUpload/>
            <p>Upload Image </p>
        </div>
        <button   className='uploadButton' type='submit'>
        UPLOAD TOOL 
    </button>
    </UploadWorkWrapper>
  )
}

export default Tools