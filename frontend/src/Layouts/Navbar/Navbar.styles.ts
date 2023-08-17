import { styled } from "styled-components";

export const NavbarWrapper = styled.div`

height:70px;
width:100%;
display:flex;
align-items:center;
justify-content:space-between;

.nav_left{

    .logo_text{
        font-size:1.4rem;
        font-weight:500;
        letter-spacing:1px;
        cursor:pointer;
    }
}

.nav_right{
    display:flex;
    align-items:center;
    gap:2rem;
    .nav_list{
        display:flex;
        align-items:center;
        gap:1rem;
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
            font-weight:bold;
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
        border-radius:40px;
        letter-spacing:1px;
        font-size:14px;
        padding:0 1rem;
        height:45px;
        letter-spacing:1px;
        text-transform:uppercase;
        font-weight:600;
    }
}
`