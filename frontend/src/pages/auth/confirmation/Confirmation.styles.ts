import {styled} from  "styled-components"

export const ConfirmationWrapper = styled.div`

padding:2rem;


h1{
    font-weight:600;
    letter-spacing:1px;
}
p{
    color:var(--gray);
    letter-spacing:1px;
}
.confirmationContainer{
    height:70vh;
    display:flex;
    align-items:center;
    justify-content:center;
    .confirmContent{
        width:70%;
        align-items:center;
        display:flex;
        flex-direction:column;
        gap:10px;
        .confirmButtonWrapper{
            display:flex;
            gap:5px;
            input{
                width:70px;
                flex:1;
                height:50px;
                background:var(--light_black);
                border-radius:4px;
                border:none;
                outline:none;
            }
        }
        .confirmButton{
            height:60px;
            background:var(--main_color);
            font-size:17px;
            border:none;
            outline:none;
            width:60%;
            border-radius:5px;
            letter-spacing:1px;
            margin-top:1rem;
            
        }
    }
}
`