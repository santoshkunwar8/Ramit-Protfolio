import styled from "styled-components"
export const UploadWrapper = styled.div`


display:flex;
width:100%;
padding:1rem;
justify-content:center;
gap:1rem;
flex-direction:column;


.buttonBox{
    display:flex;
    justify-content:center;
    gap:1rem;
    .uplaodItem{
        height:100px;
        width:120px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        border-radius:8px;
        padding:0 1rem;
        border:1px solid var(--main_color);
        color:black;
        font-size:15px;
        border:none;
        outline:none;
        letter-spacing:1px;
        text-transform:capitalize;  
        img{
            width:50px;
            height:50px;
        }
        p{
            color:white
        }
    }
}


`