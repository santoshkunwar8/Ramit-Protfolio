import  React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { InvalidLInkWrapper } from "./InvalidLink.styles";

type InvalidLinkProps={
    invalidToken:boolean,
    isExpired:boolean
}
const InvalidLink:React.FC<InvalidLinkProps> = ({invalidToken,isExpired}) => {

    const [text,setText] =useState("");
    const [heading,setHeading] = useState("");
    const navigate = useNavigate()


    useEffect(()=>{
        if(isExpired){
            setHeading("Link Expired !")
            setText("The reset link is invalid . Resend the password reset link and  try again .");
        }else{
            setHeading("Invalid Link")
            setText("Theh reset link is invalid . Resend the password reset link and  try again .")
        }
    },[isExpired,invalidToken])




  return (
    <InvalidLInkWrapper>
        <img src="/images/invalidiM.png" alt="invalid image" />
        <h1>{heading}</h1>
        <p>{text}</p>
         
        <button onClick={()=>navigate("/")}>HOME PAGE</button>
    </InvalidLInkWrapper>
  )
}

export default InvalidLink;