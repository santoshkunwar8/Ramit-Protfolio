
import { ConfirmationWrapper } from './Confirmation.styles'
import Navbar from '../../../Layouts/Navbar/Navbar'
import React, { RefObject, createRef } from 'react';

const Confirmation = () => {
    const otpInputs: RefObject<HTMLInputElement | null>[] = Array.from({ length: 6 }, () => createRef<HTMLInputElement>(null!));


  return (
    <ConfirmationWrapper>
        <Navbar/>
        <div className="confirmationContainer">

    <div className="confirmContent">
        <h1>confirm your email </h1>
        <p>Check your email we have send verification code </p>
        <div className="confirmButtonWrapper">
        { otpInputs.map((ref, index) => (

      ref ?  <input
          key={index}
          type="text"
          ref={ref} 
          // Add any other input attributes or props here
        />:""
      ))}
            
        </div>
        <button className='confirmButton'> Confirm</button>

    </div>

        </div>
    </ConfirmationWrapper>
  )
}

export default Confirmation