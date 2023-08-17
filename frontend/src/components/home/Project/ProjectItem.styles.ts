import { styled } from "styled-components";

export const ProjectItemWrapper = styled.div`

width:220px;
min-width:220px;
// height:400px;
// padding:3px;
display:flex;
flex-direction:column;
gap:10px;
border:1px solid var(--border_color);
border-radius:8px;
border-bottom-left-radius:5px !important;
border-bottom-right-radius:5px !important;
overflow:hidden;
background:var(--light_black);
cursor:pointer;
padding-bottom:10px;



.image_wrapper{
    width:100%;
    height:120px;
    opacity:0.7;

    img{
        border-radius:3px;
        width:100%;
        height:100%;
        object-fit:cover;
    }
}
.project_info{
    display:flex;
    padding:10px; 
    flex-direction:column;
    gap:5px;
    .project_name{
        font-weight:600;
        letter-spacing:1px;

    }

    .project_desc{
        color:var(--gray);
        font-size:11px;
        letter-spacing:1px;
    }
    .projectAction{
        margin-top:10px;
        .ratint_text{
            color:var(--gray);
            font-size:12px;
            letter-spacing:1px;
            margin-bottom:5px;
        }
        .ratingBar{
            height:5px;
            background:gray;
            width:90%;
            border-radius:8px;
            overflow:hidden;    
            .ratingProgress{
                width:60%;
                background:var(--main_color);
                height:100%;
                   border-radius:8px;

            }
        }
        .like_box{
            margin-left:auto;
            width:fit-content;
            display:flex;
            align-items:center;
            gap:4px;

            p{
                letter-spacing:1px;
                font-size:13px;
                color:var(--gray);
            }
            svg{
                fill:var(--gray);
                font-size:18px;
            }


        }
    }
    
}




`