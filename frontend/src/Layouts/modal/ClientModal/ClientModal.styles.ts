import { styled } from "styled-components"


export const ClientModalWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:10px;

.confirmBox{
    display:flex;
    align-items:center;
    gap:20px;
    justify-content:center;
    input[type="checkbox"]{
        width:25px;
        height:25px;
        background:red;
        
    }

    .confrimText{
        letter-spacing:0.9px;
        color:var(--gray);
        // text-align:center;
    }
}
.confirmButton{
    height:40px;
    background:var(--main_color);
    border-radius:4px;
    font-size:14px;
    color:white;
    padding:  0 15px ;
    border:none;
    letter-spacing:2px;
    margin-top:2rem;
    cursor:pointer;
}
`

