import React from 'react'
import { AuthWrapper } from '../Auth.styles'
import Navbar from '../../../Layouts/Navbar/Navbar'

const Login = () => {
  return (
    <AuthWrapper>
      <Navbar/>
      <div className="authContainer">
        <form action="" className='form_content'>
          {/* <input type="text" name="username" id="" placeholder='usernam' /> */}
          <input type="email" name="email" id="" placeholder='email' />
          <input type="password" name="" id="" />
        </form>
      </div>
    </AuthWrapper>
  )
}

export default Login