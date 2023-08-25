import { styled } from "styled-components";

export const HomeWrapper = styled.div`


height:100%;
width:100%;
padding:2rem;
padding-bottom:0;
display:flex;
flex-direction:column;
gap:5rem;

.hero_section{
    display:flex;
    gap:1rem;
    height:70vh;
    
}
.hero_item_wrapper{
    display:flex;
    flex-direction:column;
    gap:0.5rem;
}
.hero_section_left{
    display:flex;
    flex-direction:column;
    gap:1rem;
    flex:1;
}
.hero_section_right{
    flex:1;
    display:flex;
    flex-direction:column;
    gap:2rem;
    height:100%;
}
.main_info_box{
    padding: 1rem;   
    width:100%;
    // min-height:250px;
    border-radius:10px;
    background:var(--light_black);
    display:flex;
    border:1px solid #2f2f2f;
    flex-direction:column;
    gap:1rem;


    .cv_button{
        border-radius:30px;
        border:none;
        outline:none;
        background:var(--main_color);
        height:45px;
        width:120px;
        letter-spacing:1px;
        // font-weight:bold;
        display:flex;
        align-items:center;
        gap:5px;
        justify-content:center;
        font-size:14px;
        margin-left:auto;
        cursor:pointer;
    }

    h1{
        // color:red;
        font-size:2.3rem;
        font-weight:600;
        letter-spacing:3px;
        // text-align:justify;
    }
}

`