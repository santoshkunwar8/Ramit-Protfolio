import { AuthWrapper } from '../Signup.styles'
import Navbar from '../../../Layouts/Navbar/Navbar'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import {ImFlag} from "react-icons/im"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { UserType } from '../../../utils/Types'
import  React from "react"




const Signup = () => {

  const [signupData,setsignupData] = useState<UserType>({
      username:"",
      email:"",
      password:"",
      profileImg:"",
      country:"",
  })


  const handleInputChange=( event :React.ChangeEvent <HTMLInputElement>)=>{


    const {value,name} = event.target; 


    setsignupData((prev)=>{
      return {...prev, [name]:value}
    })

  }

  return (
    <AuthWrapper>
    <Navbar/>
    <div className="authContainer">
      <div className="form_container">
        <div className="formHeader">
    <img width="50" height="50" src="https://img.icons8.com/3d-fluency/94/unlock-2.png" alt="unlock-2"/>
    <h2 className='headerText'>GET REGISTERED  </h2>
  </div>
      <form  action="" className='form_content'>
         <div className="input_item">
          <MdEmail/>
        <input type="email" name="email" id="" placeholder='username' onChange={handleInputChange} />

        </div>
        <div className="input_item">
          <MdEmail/>
        <input type="email" name="email" id="" placeholder='email address' onChange={handleInputChange} />

        </div>
            <div className="input_item">
          <ImFlag/>
        <input type="email" name="email" id="" placeholder='country' onChange={handleInputChange} />

        </div>
        <div className="input_item">
          <RiLockPasswordFill/>
        <input type="password" name="" id="" placeholder='app password' onChange={handleInputChange}/>
        </div>
          <div className="input_item">
          <RiLockPasswordFill/>
        <input type="password" name="" id="" placeholder='confirm app password' onChange={handleInputChange}/>
        </div>
      </form>
        <button type="submit">Login</button>
        <div className='login_bottom'>
       <Link to={"/login"}>
        <p className='accountText'>already have account  ?</p> 
       
       </Link>
      </div>
      </div>
    </div>
  </AuthWrapper>
  )
}

export default Signup