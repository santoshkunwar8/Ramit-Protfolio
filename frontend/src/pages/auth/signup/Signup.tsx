import { AuthWrapper } from '../Signup.styles'
import Navbar from '../../../Layouts/Navbar/Navbar'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import {ImFlag} from "react-icons/im"
import { Link, useNavigate } from 'react-router-dom'
import { useState , useRef } from 'react'
import { UserType } from '../../../utils/Types'
import  React from "react"
import useUploadImage from '../../../hooks/UploadImage'
import { BiSolidUser } from 'react-icons/bi'
import { createUserApi } from '../../../utils/api'




const Signup = () => {

  const [signupData,setsignupData] = useState<UserType>({
      username:"",
      email:"",
      password:"",
      profileImg:"",
      country:"",
  })
  const [profileFile,setProfileFile] =useState<null | File>(null)
  const {upload} =  useUploadImage();
  const navigate =useNavigate()
  const fileRef = useRef<HTMLInputElement|null>(null);





  const handleInputChange=( event :React.ChangeEvent <HTMLInputElement>)=>{

   
    let  {value,name,files} = event.target; 

  if(name==="image"){

      setProfileFile(files[0]);
      
      return; 
    }


    setsignupData((prev)=>{
      return {...prev, [name]:value}
    })

  }


  const handleSubmit =(e:React.SyntheticEvent)=>{


    e.preventDefault();

    if(!profileFile){
      alert("image should be provided ")
    }else{

      upload(profileFile,async (progress,url)=>{


        try {
          
          
          if(url){
            const {data,status} = await     createUserApi({
              ...signupData,
              profileImg:url 
            })
            
            if(status==200){
              navigate("/")
            }else{
              throw data.message;
            }
          }
        } catch (error) {
            // alert(error)
            console.log(error)
        }

      })


    }

    
  }

  console.log(signupData)

  return (
    <AuthWrapper>
    <Navbar/>
    <div className="authContainer">
      <form onSubmit={handleSubmit} className="form_container">


        <div className="formHeader">
    <img width="50" height="50" src="https://img.icons8.com/3d-fluency/94/unlock-2.png" alt="unlock-2"/>
    <h2 className='headerText'>GET REGISTERED  </h2>
  </div>

      <div   className='form_content'>
         <div className="input_item">
          <BiSolidUser/>
        <input type="text" name="username" id="" placeholder='username' onChange={handleInputChange} required />

        </div>
        <div className="input_item">
          <MdEmail/>
        <input type="email" name="email" id="" placeholder='email address' onChange={handleInputChange} required />

        </div>
            <div className="input_item">
          <ImFlag/>
        <input type="text" name="country" id="" placeholder='country' onChange={handleInputChange} required />

        </div>
        <div className="input_item">
          <RiLockPasswordFill/>
        <input type="password" name="password" id="" placeholder='app password' onChange={handleInputChange} required/>
        </div>
          <div className="input_item">
          <RiLockPasswordFill/>
        <input type="password" name="confirmPassword" id="" placeholder='confirm app password' onChange={handleInputChange} required/>

        </div>
      </div>
      <input required  type="file" name="image" id="" style={{display:"none"}}  ref={fileRef} onChange={handleInputChange}/>
        <div className='uploadImageButton' onClick={()=>fileRef.current.click()}>Upload Profile Image</div>
        <button type="submit">Register</button>

        <div className='login_bottom'>
       <Link to={"/login"}>
        <p className='accountText'>already have account  ?</p> 
       
       </Link>
      </div>
      </form>
    </div>
  </AuthWrapper>
  )
}

export default Signup