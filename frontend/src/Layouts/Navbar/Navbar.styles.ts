import { styled } from "styled-components";

export const NavbarWrapper = styled.div`

height:70px;
width:100%;
display:flex;
align-items:center;
justify-content:space-between;

.nav_left{

    .logoBg{

       
        
        .logo_text{
            background:linear-gradient(to right,#7d19ff,#7518ff ,#5200e5d1,#6114e99c,#521eb2a8,#4e279773);
            font-size:2rem;
            font-weight:900;
            letter-spacing:1px;
                font-family: 'Orbitron', sans-serif;

            cursor:pointer;
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;

        }
    }
}

.nav_right{
    display:flex;
    align-items:center;
    gap:2rem;
    .nav_list{
        display:flex;
        align-items:center;
        gap:2rem;
        a{
            text-decoration:none;
        }
        .active_nav{
            color:var(--main_color);
            position:relative;

            &::before{
                content:"";
                position:absolute;
                bottom:-7px;
                height:4px;
                width:80%;
                border-radius:10px;
                background:var(--main_color);
                left:0;
            }
        }


        li{
            cursor:pointer;
            list-style:none;
            // font-weight:bold;
            font-size:15px;
            letter-spacing:1px;
            color:var(--gray);
            transition:all .3s ease;
            &:hover{
                color:var(--main_color);
            }
        }
    
    }


    .client_button{
        background:var(--main_color);
        border-radius:7px;
        letter-spacing:1px;
        font-size:14px;
        padding:0 1rem;
        height:37px;
        cursor:pointer;
        letter-spacing:1px;
        border:none;
        text-transform:uppercase;
        outline:none;

        &:hover{
            background:var(--hover_main_color);
        }
        
    }


    
    .profileBox{
        display:flex;     
        gap:10px; 
        cursor:pointer;

        .profileImg{    
            border-radius:50%;
            object-fit:cover;
            width:45px;
                height:45px;
                border:3px solid var(--main_color);
                padding:2px;
            }

            .profileInfo{
                display:flex;
                flex-direction:column;
            }
        .profileName{
            letter-spacing:1px;
            font-size:15px;
            text-transform:capitalize;
            // color:var(--main_color);

        }
        .profileEmail{
            color:var(--gray);
            font-size:12px;
            letter-spacing:1px;
        }
    }
}




`


