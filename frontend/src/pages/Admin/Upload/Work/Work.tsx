import React, { useEffect, useState ,useRef, SyntheticEvent} from 'react'
import { UploadWorkWrapper } from './Work.styles'
import {BiSolidCloudUpload} from "react-icons/bi"
import { FilesType, ToolType, WorkState } from '../../../../utils/Types'
import { AxiosInstance } from '../../../../utils/axios'
import { createProjectApi, getToolsApi } from '../../../../utils/api'
import useUploadImage from '../../../../hooks/UploadImage'
const Work = () => {
    const [workData,setWorkData]= useState<WorkState>({
        name:"",
        link:"",
        desc:"",
        photos:[],
        mainImg:"",
        user:"64dace25af403e0cf8dafe0e",
        tools:[],
    })
    const [toolsArr,setToolsArr] = useState<ToolType[]>([]);
    const mainImgRef   = useRef<HTMLInputElement|null>(null);
    const otherImgREf1 = useRef<HTMLInputElement|null>(null)
    const otherImgREf2 = useRef<HTMLInputElement|null>(null);
    const [uploadedCount,setUploadedCount] =useState<number>(0)
    const [files,setFiles] = useState <FilesType[]>([])
    const {upload} = useUploadImage()


    useEffect(()=>{

        
        if(uploadedCount === files.length && files.length > 0 ){

                addWorkToDB()
        }
    },[uploadedCount,files])
    
    
    
    const addWorkToDB=async()=>{
        
        try {
            const {status,data} = await createProjectApi(workData);
            if(status===200){
                setWorkData({
                    name:"",
                    link:"",
                    desc:"",
                    photos:[],
                    mainImg:"",
                user:"64dace25af403e0cf8dafe0e",
                tools:[],
            })
            setFiles([]);
            setUploadedCount(0);
            alert("successfull")
            }else{  
                throw data.message
            }


        } catch (error) {
            console.log(error)

        }

    }





    useEffect(()=>{
        fetchAllTools()
    },[])


    const fetchAllTools=async()=>{
        try {
                const {data,status} = await getToolsApi();
            console.log(data,status);
                if(status !== 200)return;
                setToolsArr(data.message)

        } catch (error) {
            console.log(error)
        }
    }

    const handleChange =(event:React.ChangeEvent<HTMLInputElement>)=>{

        const {name,files:filesArr,value} = event?.target;
        if(name && filesArr){


           const fileType= name.split(" ")[1];
            
           console.log(fileType)

          const filteredFiles = files.filter(fil=>fil.name !==fileType);






                setFiles([...filteredFiles,{file:filesArr[0],name:fileType }])
            

                return;
        }


        setWorkData(prev=>{
            return {...prev,[name]:value}
        })

    



    }


    console.log(files)

    const handleSelectChange=(event:React.ChangeEvent<HTMLSelectElement>)=>{

        const {name,value}= event.target;
    
        setWorkData((prev)=>{
            return {...prev, [name]:value}
        })
        


    }
        const handleTextareaChange=(event:React.ChangeEvent<HTMLTextAreaElement>)=>{


        const {name,value}= event.target;
    
        setWorkData((prev)=>{
            return {...prev, [name]:value}
        })
        


    
    }

    const uploadImage=async(e:SyntheticEvent)=>{
        e.preventDefault()

        files.forEach(file=>{
                    upload(file.file,(progress,url)=>{

                        console.log(progress,url);

                        if(progress !== 100 || !url)return;
                        setUploadedCount((prev=>prev+1));
                            if(file.name==="main"){ 
                                setWorkData(prev=>{
                                    return {...prev,mainImg:url}
                                })
                            }else{
                            setWorkData(prev=>{
                                    return {...prev,photos:[...prev.photos,url]}
                                })
                            }
                    })
        })
    }



  return (
    <UploadWorkWrapper  onSubmit={uploadImage}>

    <input value={workData.name} type="text" name="name" id=""  placeholder='Project name' onChange={handleChange}/>
    <input value={workData.link} type="text" name="link" id="" placeholder='project links' onChange={handleChange}/>
    <select   name="" id="" onChange={handleSelectChange}>
        {
            toolsArr.map((tool:ToolType)=>(
                <option key={tool._id} value={tool?.name}>{tool.name}</option>

            ))
        }
    </select>
    <textarea value={workData.desc} name="desc" id="" placeholder='Describe your project...' onChange={handleTextareaChange}></textarea>
    <div className='imageBox'>

        <div className='imageItem' onClick={()=>mainImgRef.current?.click()}>
            <input ref={mainImgRef} type="file" name="file main" id=""  style={{display:"none"}} onChange={handleChange}/>
            <BiSolidCloudUpload/>
            <p>Main Image</p>
        </div>
    
            <div className='imageItem' onClick={()=>otherImgREf1.current?.click()}>
                <input ref={otherImgREf1} type="file" name="file other1" id="" style={{display:"none"}} onChange={handleChange}  />
                <BiSolidCloudUpload/>
                <p>Additional Image (optional)</p>
                </div>
                <div className='imageItem' onClick={()=>otherImgREf2.current?.click()}>
                    <input ref={otherImgREf2}  type="file" name="file other2" id=""  style={{display:"none"}} onChange={handleChange}/>
                    <BiSolidCloudUpload/>
                    <p>Additional Image (optional)</p>
               
        </div>
    </div>
    <button className='uploadButton' type='submit'>
        UPLOAD PROJECT 

    </button>
    
    </UploadWorkWrapper>
  )
}

export default Work;


// the service to others is the rent  you pay for the room you have here on the earth