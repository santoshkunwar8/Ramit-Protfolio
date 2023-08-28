import { styled } from "styled-components"

export const ContactWrapper = styled.div`


width:100%;
padding:2rem;
display:flex;
flex-direction:column;
align-items:center;
gap:3rem;

.intro_box{
    display:flex;
    flex-direction:column;
    gap:1rem;
    align-items:center;
    
    .intro_text{
        max-width:660px;
        text-align:center;
        font-weight:600;
        letter-spacing:1px;
    }
    .secondary_text{
        color:var(--gray);

        font-size:13px;
        letter-spacing:1px;
    }
    .CvButton{
        height:45px;
        background:var(--main_color);
        border:none;
        padding:0 1rem;
        font-size:15px;
        letter-spacing:1px;
        border-radius:4px;
    }

    img{
        width:90px;
        height:90px;
        object-fit:cover;
        border-radius:50%;
        border:4px solid var(--main_color);
        padding:6px;
    }
}
.form_container{
    display:flex;
    flex-direction:column;
    gap:2rem;
    width:40%;
    align-items:center;
    .header_text{
        font-size:1.5rem;
        letter-spacing:1px;
        font-weight:600;
    }
    .form_box{
    
        display:flex;
        flex-direction:column;
        gap:1rem;
        width:100%;
        textarea{
            height:70px !important;
            padding:1rem !important; 
        }
        input,textarea{
            width:100%;
            border:none;    
            background:transparent;
            background:var(--light_black);
            outline:none;
            border-radius:4px;
            padding:0 1rem;
            letter-spacing:2px;
            font-size:12px;
            height:50px;
            &::placeholder{
                letter-spacing:1px;
            }
        }
        .sendButton{
            height:50px;
            width:50%;
            margin:auto;
            border:none;
            border-radius:5px;
            background-image:linear-gradient(70deg, #432478 , #5f34aa ,var(--main_color));
            letter-spacing:1px;
            font-size:16px;
        }
    }
}


`