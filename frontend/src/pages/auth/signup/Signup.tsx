import { AuthWrapper } from '../Signup.styles'
import Navbar from '../../../Layouts/Navbar/Navbar'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import {ImFlag} from "react-icons/im"
const Signup = () => {
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
        <input type="email" name="email" id="" placeholder='username' />

        </div>
        <div className="input_item">
          <MdEmail/>
        <input type="email" name="email" id="" placeholder='email address' />

        </div>
            <div className="input_item">
          <ImFlag/>
        <input type="email" name="email" id="" placeholder='country' />

        </div>
        <div className="input_item">
          <RiLockPasswordFill/>
        <input type="password" name="" id="" placeholder='app password'/>
        </div>
          <div className="input_item">
          <RiLockPasswordFill/>
        <input type="password" name="" id="" placeholder='confirm app password'/>
        </div>
      </form>
        <button type="submit">Login</button>
        <div className='login_bottom'>
        <p className='accountText'>dont have account ?</p>
        
      </div>
      </div>
    </div>
  </AuthWrapper>
  )
}

export default Signup