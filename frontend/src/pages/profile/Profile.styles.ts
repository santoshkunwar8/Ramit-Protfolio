import { styled } from "styled-components"



export const ProfileWrapper = styled.div`

padding:2rem;
width:100%;
display:flex;
flex-direction:column;
gap:2rem;



.profielTop{
    width:100%;
    background:var(--light_black);
    border-radius:15px;
    overflow:hidden;
    
    .profileBg{
        height:200px;
        background-image: linear-gradient(45deg, var(--main_color),#3f51b5c4 ,#3f51b58a);
        width:100%;
    }
    
    .profileInfo{
        position:relative;
        padding: 0 2rem;
        padding-bottom:2rem;
        display:flex;
        flex-direction:column;
        gap:1rem;

        .button_wrapper{
            display:flex;
            gap:1rem;

            

            button{
                border:none;
                font-size:14px;
                cursor:pointer;
                height:45px;
                background:transparent;
                border-radius:5px;
                padding:0 1rem;
                letter-spacing:1px;
            }
            .become_client_button{
                border:2px solid var(--border_color);
            }
            .share_profile_button{
                background:var(--main_color);
            }

        }

        .profileImg{
            margin-top:-75px;
            width:150px;
            height:150px;
            border:6px solid var(--border_color);
            border-radius:50%;
            object-fit:cover;
        }
        .otherIcon{
            position:absolute;
            right:1rem;
            top:1rem;
            font-size:1.5rem;
            fill:var(--gray);
            cursor:pointer;
        }
        .userInfo{
            display:flex;
            flex-direction:column;
            gap:3px;
            .username{
                color:var(--main_color);
                text-transform:uppercase;

                letter-spacing:1px;
            }
            .location{
                text-transform:capitalize;
                letter-spacing:1px;
                color:var(--gray);

            }
            .role{
                text-transform:capitalize;
                color:var(--gray);
                letter-spacing:1px;
                font-size:15px;
       
            }
        }

    }
 
    

}
.skillsBox{
    padding:2rem;
    background:var(--light_black);
    border-radius:15px;
    display:flex;
    flex-direction:column;
    gap:1rem;

    .skillsHeader{
        display:flex;
        align-items:center;
        gap:5px;
        img{
            width:36px;
            height:36px;
            opacity:0.8;
        }
        h3{
            background:linear-gradient(to right,#7d19ff,#7518ff ,#6114e99c,#521eb2a8,#4e279773);
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
            font-size:1.8rem;
            letter-spacing:2px;
        }
    }
    .skillsWrapper{
        display:flex;
        gap:10px;
        flex-wrap:wrap;
        
        .skillItem{
            border:1px solid var(--border_color);
            font-size:12px;
            letter-spacing:1px;
            padding: 8px;
            color:var(--gray);
            border-radius:3px;
        }

    }
}



.cvBox{
    background:var(--light_black);
  
    border-radius:15px;
    padding:2rem;
    display:flex;
    flex-direction:column;
    gap:1rem;
    .cvHeader{
        display:flex;
        align-items:center;
        
        justify-content:space-between;
        .header_left{
            align-items:center;
            display:flex;
            img{
                width:35px;
                height:35px;
                opacity:0.8;
            }
            .cvText{
                background:linear-gradient(to right,#7d19ff,#7518ff ,#6114e99c,#521eb2a8,#4e279773);
                -webkit-background-clip:text;
                -webkit-text-fill-color:transparent;
                font-size:1.8rem;
                letter-spacing:2px;
            }
        }
        .addCV{
            background:var(--main_color);
            height:40px;
            padding:0 1rem;
            border:none;
            outline:none;
            letter-spacing:1px;
            border-radius:3px;
            font-size:14px;
            text-transform:uppercase;

        }
    }
    .cvWrapper{
        display:flex;
        flex-wrap:wrap;
    }
}


`


