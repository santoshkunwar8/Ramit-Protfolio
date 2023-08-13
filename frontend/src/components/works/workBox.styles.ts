import {styled} from "styled-components"
export const WorkBoxWrapper=styled.div`

width:100%;
height:400px;
border-radius:8px;
background-color:var(--light_black);
display:flex;
overflow:hidden;
border:1px solid var(--border_color);
position:relative;
backdrop-filter:blur(40px);
.circle_bg{
    left:-50px;
    bottom:0;
    z-index:-1;
    opacity:0.5;

    position:absolute;
    width:150px;
    height:150px;
border:30px solid #8325FD;
    filter:blur(10px);
    border-radius:50%;  
}
.text_content{
    flex:6;
    padding:2rem;
    height:100%;
    display:flex;
    flex-direction:column;
    // background:red;
    h1{
        font-weight:600;
        font-size:2rem; 
        letter-spacing:1.1px;

    }
    .explore_button{
        background:transparent;
        display:flex;
        margin-top:auto;
        border:none;
        align-items:center;
        gap:10px;
        font-weight:600;
        font-size:1.32rem;
        letter-spacing:1px;
        width:fit-content;
        outline:none;
        cursor:pointer;
    }
}
.work_image{
    flex:6;
    img{
        margin-top:-8rem;
        width:150%;
        
    }
}

`