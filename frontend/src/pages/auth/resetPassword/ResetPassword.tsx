
import { ResetPasswordWrapper } from './ResetPassword.styles'
import Navbar from '../../../Layouts/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import useAlert from '../../../hooks/useAlert'
import { ChangeEvent, useEffect, useState } from 'react'
import { checkIfTokenIsValidApi, resetPasswordApi } from '../../../utils/api'
import InvalidLink from '../InvalidLink/InvalidLink'

const ResetPassword = () => {

  const searchParams = new URLSearchParams(window.location.search);
  const resettoken = searchParams.get('resetToken');
  const {notify} = useAlert()

  const [resetData,setResetData] = useState({
    email:"",
    newPassword:"",
    confirmPassword:"",
  })
  const navigate  =  useNavigate();
  const [invalidToken,setInvalidToken]= useState<boolean | null>(null)
  const [ isExpired,setIsExpired] =useState<boolean| null>(null);
  const [userEmail,setUserEmail] = useState(null)
  useEffect(()=>{
    if(!resettoken){
      setInvalidToken(true)
      return 
    }
    handleCheckIfTokenIsValid(resettoken)
  },[resettoken])
  

  useEffect(()=>{
    if(invalidToken){
      notify("reset link is invalid","error")
    }else if(isExpired){
      notify("reset link is expired","error")
    }
  },[invalidToken,isExpired])


  const handleCheckIfTokenIsValid=async(token:string)=>{
    try {
        const {data} =await checkIfTokenIsValidApi(token);
        console.log(data)
        const {message:{exp,invalidLink,email}} = data;
        if(email){

          setUserEmail(email)
          setInvalidToken(false);
          setIsExpired(false)
        }else{
          setInvalidToken(invalidLink);
          setIsExpired(exp)
        }
    } catch (error) {
      console.log(error)
    }
  }



  const handleResetPassword=async()=>{

    if(resetData.confirmPassword !== resetData.newPassword){
      notify("password is not same.","error")
      return 
    }

    if(!userEmail || !resettoken )return;
    try {
        const {status,data} = await resetPasswordApi({
          newPassword:resetData.newPassword,
          email:userEmail,
          token:resettoken
        })
        if(status===200){
          notify("password reset successfully ","success")
          navigate("/login",{
            state:{
              from:"reset_password",
              email:userEmail ?? "",
            }
          });
        }else{

          const {expired,invalidLink} = data.message;
          if(expired){
            throw "Link is expired !! "
          }else if(invalidLink){
            throw "Invalid link !!"
          }else{
            throw "something went wrong"
          }

        }
    } catch (error:any) {
        
       notify(error.message,"error")
    }

  }

  

const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>setResetData(prev=>({...prev,[e.target.name]:e.target.value}))

 
  
  return (
    <ResetPasswordWrapper>
        <Navbar/>
        <div className="resetPasswordContainer">

     {

           ( invalidToken !==null && isExpired !== null) && (  invalidToken || isExpired ) ? <InvalidLink invalidToken={invalidToken} isExpired={isExpired}/> :



        <div className="resetContent">
            <h1>Set new password </h1>
            <p className='resetDesc'>Keep your credentials safe with yourself and dont expose it .</p>
            <input type="password"  onChange={handleInputChange} name="newPassword" id="" placeholder='new password' />
            <input type="password" onChange={handleInputChange}  name="confirmPassword" id="" placeholder='confirm password' />
            <button className='resetButton' onClick={handleResetPassword}>Reset password</button>
        </div>
        } 

        </div>
    </ResetPasswordWrapper>
  )
}

export default ResetPassword

