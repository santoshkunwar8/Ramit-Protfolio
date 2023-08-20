import { styled } from "styled-components"

export const AuthWrapper = styled.div`

padding:2rem;
display:flex;
flex-direction:column;

.authContainer{
    display:flex;
    padding:2rem 0 ;
    justify-content:center;
    align-items:center;
    min-height:60vh;
    
    .form_container{
        display:flex;
        flex-direction:column;
        gap:1rem;
        width:95%;
        max-width:560px;
    
        .formHeader{
            display:flex;
            align-items:center;
            gap:10px;
            .headerText{
                font-weight:600;
                letter-spacing:1px;
                color:var(--gray);
                font-size:1.5rem;
            
            }
        }
        .form_content{
            display:flex;
            // flex-direction:column;
            flex-wrap:wrap;
            gap:1rem;        
            .input_item{
                // width:100%
                flex:1;
                border-radius:7px;
                padding:0 1rem;
            background:var(--light_black);
            display:flex;
            gap:10px;
            align-items:center;
            height:70px;
            border:1px solid var(--border_color);
            border-radius:6px;
            
            input{
                height:70px; 
                flex:1;
                outline:none;
                letter-spacing:1px;
                background:transparent;
                border:none;
                
            }
            svg{
                fill:var(--gray);
                font-size:1.4rem;
            }
        }
    }
    button , .uploadImageButton{
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        background:var(--main_color);
        font-size:18px;
        letter-spacing:1px;
        border:none;
        border-radius:5px;
        width:100%;
        height:70px;
        
    }
    .uploadImageButton{
        background:var(--light_black);
        font-size:15px;
        color:var(--gray);
        border:1px solid var(--border_color);
    }
    .login_bottom{
        display:flex;
        justify-content:center;
        width:100%;
        
        .accountText{
            letter-spacing:1px;
            color:#7000ff;
            cursor:pointer;
            font-size:14px;
            text-decoration:underline;
        }
    }
    }
}

`