import { styled } from "styled-components"


export const UploadCVWrapper = styled.div`

display:flex;
flex-direction:column;
gap:2rem;
background:var(--light_black);
padding:2rem;
border-radius:10px;
max-width:600px;
width:95%;
align-items:center;

.cvHeader{
    justify-content:center;
    position:relative;
    display:flex;
    align-items:center;
    gap:5px;
    width:100%;
    .back{
        position:absolute;
        left:0;
        align-right:auto;
        align-self:flex-start;
        width:40px;
        height:40px;
        border-radius:5px;

        display:flex;
        align-items:center;
        justify-content:center;
        background:var(--main_color);
        svg{
            font-size:2rem !important;
            fill:white;
            cursor:pointer;
        }
    }

    .headerCenter{
        display:flex;
    }
    img{
        width:45px;
        height:45px;
    }
}

.main_text{
    letter-spaccing:3px;
    color:var(--main_color);
    font-weight:600;

}

.cvImage{
    width:300px;
}
.upload_header{
    display:flex;
    h1{
        letter-spacing:2px;
    }
    



}

.uploadCvButton{
    background:var(--main_color);
    border:none;
    outline:none;
    height:55px;
    padding:0 1rem;
    border-radius:5px;
    font-size:16px;

    letter-spacing:2px;
    cursor:pointer;
}

`