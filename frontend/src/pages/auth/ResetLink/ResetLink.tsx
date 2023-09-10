import React, { useState } from "react"
import Navbar from "../../../Layouts/Navbar/Navbar"
import {  ResetLinkWrapper } from "./ResetLink.styles"
import { resetPasswordLinkApi, verifyResetCodeApi } from "../../../utils/api"
import { useNavigate } from "react-router-dom"
import useAlert from "../../../hooks/useAlert"

const ResetLink = () => {

    const [email,setEmail] =useState<string >("")
    const {notify}  = useAlert()


        

   
    const handleSentResetCode=async(e:React.SyntheticEvent)=>{
        e.preventDefault()
        try {
            
            if(email){
                
                
                const {status,data }= await resetPasswordLinkApi(email)
                if(status==200){
                   notify("Reset link sent successfully","success");
                }else{
                    throw data.message;
                }
            }
        } catch (error:any) {
            console.log(error)
            notify(error.response?.data?.message,"error")
        }

    }


  return (
    <ResetLinkWrapper >

           <Navbar/>
           <div className="resetLinkContainer">

            <form className="formContent" onSubmit={handleSentResetCode}>
            <h1>Reset password </h1>
               <RestLinkTab   setEmail={setEmail} /> 
                 </form>
           </div>
    </ResetLinkWrapper>
  )
}

export default ResetLink


type RestLinkTabProps={
    setEmail:React.Dispatch<React.SetStateAction<string>>,
    
    
}
const RestLinkTab:React.FC<RestLinkTabProps>=({setEmail   })=>{
    const handleEmailChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }
  
    return <>
     <p className="resetLinkDesc">Enter the email associated with your account and we will send an email with instructions to reset your password.  </p>
            <input type="email"  onChange={handleEmailChange}   placeholder="Enter your email " />
            <button className="sentCodeBtn" >Send reset link</button>
    
    </>
}
// type ConfirmPasswordTabProps={
//     email:string,
//     setUserCode:React.Dispatch<React.SetStateAction<number>>

// }

// const ConfirmPasswordTab:React.FC<ConfirmPasswordTabProps>=({email,setUserCode})=>{

    

//     return <>

//      <p className="resetLinkDesc"> We have sent a password reset link to your gmail   </p>
//         {/* <div className="codeInputWrapper">
//             <input type="text" name="" id="" />
//             <input type="text" name="" id="" />
//             <input type="text" name="" id="" />
//             <input type="text" name="" id="" />
//             <input type="text" name="" id="" />
//             <input type="text" name="" id="" />


//         </div> */}
//             <button className="sentCodeBtn">Confirm code</button>
    
//     </>
    
  
// }
