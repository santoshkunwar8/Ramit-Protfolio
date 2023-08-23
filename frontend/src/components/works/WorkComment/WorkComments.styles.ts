import { styled } from "styled-components"

export const WorkCommentsWrapper = styled.div`

display:flex;
flex-direction:column;
gap:2rem;
width:100%;

.commentHeader{
    display:flex;
    gap:2rem;
    .vertical_line{
    background-image:linear-gradient(#d0b6f3f5, #8325FD, #8325FD, #0d1117);
    height:300px;
    width:6px;
    border-radius:10px;
    }
    h1{
        font-weight:600;
        letter-spacing:1px;
        font-size:1.5rem;
    }

    .topic_box{
        display:flex;
        align-items:center;
        gap:10px;
        margin-bottom:2rem;

        img{
            width:40px;
            height:40px;
        }
        .topic_text{
            font-size:1.4rem;
            font-weight:500;
           
        }
    }
    .main_text{
        font-size:2rem !important;
    }
}
.add_commentBox{
    width:100%;
    display:flex;
    flex-direction:column;
    gap:1rem;
    .hiddenComment{
        display:flex;
        border-radius:7px;
        height:${props => props.hidden ? "0px" : "100px"};
        overflow:hidden;
        gap:1rem;
        align-items:flex-end;
        transition:all 0.3s ease;
        svg{
            font-size:2rem !important;
            fill:var(--main_color);
            cursor:pointer;
            transition:all .3s ease;
            &:hover{
                    fill:var(--hover_main_color);
            }
        }
        textarea{
            outline:none;
            color:var(--gray);
            padding:1rem;
            width:100%;
           
            
            border:${props => props.hidden ? "none" : "1px solid var(--border_color)"};
            background:var(--light_black);
            font-size:15px;
            height:100%;
            letter-spacing:1px;

            &::placeholder{
                color:var(--gray);
            }
        }
    }   
.commentButton{
    width:fit-content;

    margin-left:auto;
    height:40px;
    background:var(--main_color);
    border:none;
    outline:none;
    padding:0 1rem;
    border-radius:5px;
    font-size:15px;
    color:white;
    cursor:pointer;

    &:hover{
        background:var(--hover_main_color);
    }
}

}
.comment_container{

    display:flex;
    flex-direction:column;
    gap:1rem;


}


`