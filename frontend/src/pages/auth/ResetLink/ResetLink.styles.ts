import styled from "styled-components"


export const ResetLinkWrapper= styled.div`

width:100%;
min-height:100vh;
padding:2rem;

.resetLinkContainer{

    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    height:60vh;


    .formContent{
        display:flex;
        width:60%;
        flex-direction:column;
        gap:1rem;   
        max-width:600px;
        
        .sentCodeBtn{
            height:60px;
            background:var(--main_color);
            border:none;
            font-size:18px;
            letter-spacing:1px;
            border-radius:5px;
            text-transform:uppercase;
            cursor:pointer;

        }
        .resetLinkDesc{
            color:var(--gray);
            letter-spacing:1px;
            font-size:18px;
            line-height:35px;
        }

        h1{
            font-size:3rem;
        }

        input{
            height:70px;
            background:var(--light_black);
            padding:1rem;
            border:none;
            outline:none;
            font-size:17px;
            letter-spacing:2px;
            margin-top:1rem;
            color:#615757;
            border-radius:5px;
            &::placeholder{
                letter-spacing:1px;
                color:#615757;

            }
        }
        .codeInputWrapper{
            width:600px;
            display:flex;
            gap:5px;
            input{
                text-align:center;;
                width:70px;
                height:60px;
                flex:1;
            }
        }
    }

}

`


export const ConfirmPasswordTabWrapper = styled.div`


`