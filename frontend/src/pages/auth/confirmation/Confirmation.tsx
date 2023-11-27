
import { ConfirmationWrapper } from './Confirmation.styles'
import Navbar from '../../../Layouts/Navbar/Navbar'
import  { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { confirmCodeApi } from '../../../utils/api';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../redux';
import { useDispatch } from 'react-redux';
import useAlert from '../../../hooks/useAlert';


const Confirmation = () => {
  const inputRefs = Array.from({ length: 6 }, () => useRef<HTMLInputElement>(null));
  const [email,setEmail] =useState("")
  const EmailState = useLocation().state;
  const navigate =useNavigate()
  const [code,setCode] = useState<string>("");
  const [ hash,setHash] =useState("")
  const dispatch = useDispatch()
  const {AddUserAction} = bindActionCreators(actionCreators,dispatch )
  const {notify} = useAlert()
  const handleKeyUp = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && index > 0 && e.currentTarget.value === '') {
      inputRefs[index - 1]?.current?.focus();
    } else if (index < inputRefs.length - 1 && e.currentTarget.value.length === 1) {
      inputRefs[index + 1]?.current?.focus();
    }
  };

  const handleInputChange = (_: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
  //  console.log(value)
   if(value){
     setCode(prev=>prev +value);
   }else{
    setCode(prev=>prev.slice(0,-1));
   }
    if (value.length > 1) {
      // Ensure only one character is allowed in each input field
      e.currentTarget.value = value.charAt(0);
    }else{
      // setCode(prev=>{
      //   return prev.slice(0,-1);
      // })
    }
  };

  useEffect(()=>{
    const {email:newEmail,code:codeHash} = EmailState
    if(newEmail){
      setEmail(newEmail)
      setHash(codeHash)
    }else{
      navigate("/signup")
    }
  },[EmailState])
  console.log(EmailState)

 
 const handleConfirm=async()=>{
  if(code.length !==6 )return;

  try {
   const {status,data } =  await confirmCodeApi({code,hash});
   if(status===200){
    AddUserAction(data.message)
    navigate("/")
   }else{
    throw data.message
   }
  } catch (error:any) {
  
      notify(error?.response?.data?.message,"error")
  }
 }
    

  return (
    <ConfirmationWrapper>
        <Navbar/>
        <div className="confirmationContainer">

    <div className="confirmContent">
      <img src="/images/confirm.png" alt="" />
        <h1>confirm your email </h1>
        <p>We've sent you an email at {email}</p>
        <p>Please follow the instructions in the email</p>
        <div className="confirmButtonWrapper">
        {inputRefs.map((inputRef, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          ref={inputRef}
          onKeyUp={(e) => handleKeyUp(index, e)}
          onChange={(e) => handleInputChange(index, e)}
        />
      ))}
            
        </div>
        <button onClick={handleConfirm} className={`confirmButton ${code.length ===6 ? "isVerified":""}`}> Confirm</button>

    </div>

        </div>
    </ConfirmationWrapper>
  )
}

export default Confirmation