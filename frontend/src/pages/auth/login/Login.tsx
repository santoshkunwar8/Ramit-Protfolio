import React, { useState } from 'react'
import { AuthWrapper } from '../Signup.styles'
import {RiLockPasswordFill} from "react-icons/ri"
import {MdEmail} from "react-icons/md"
import Navbar from '../../../Layouts/Navbar/Navbar'
import { LoginWrapper } from './login.styles'
import { Link } from 'react-router-dom'

const Login = () => {
  const [loginData,setLoginData] = useState({
    email:"",
    password:""
    
  })
  return (
    <LoginWrapper>
      <Navbar/>
      <div className="authContainer">
        <form  action="" className='form_content'>

          <div className="formHeader">
      <img width="50" height="50" src="https://img.icons8.com/3d-fluency/94/unlock-2.png" alt="unlock-2"/>
          <h2 className='headerText'>GET LOGGED IN </h2>
          </div>
          {/* <input type="text" name="username" id="" placeholder='usernam' /> */}
          <div className="input_item">
            <MdEmail/>
          <input type="email" name="email" id="" placeholder='email address' />

          </div>
          <div className="input_item">
            <RiLockPasswordFill/>
          <input type="password" name="" id="" placeholder='app password'/>
          </div>
          <button type="submit">Login</button>
          <div className='login_bottom'>
            <Link  to={"/signup"}>
            <p className='accountText'>dont have account ?</p>
            </Link>

          </div>
        </form>
      </div>
    </LoginWrapper>
  )
}

export default Login