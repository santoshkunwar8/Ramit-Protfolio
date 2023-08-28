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
            gap:10px;
            .username{
                color:var(--main_color);
                letter-spacing:1px;
            }
            .location{

                letter-spacing:1px;
                color:var(--gray);

            }
            .role{
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
        gap:5px;
        img{
            width:30px;
            height:30px;
        }
        h3{
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


`


