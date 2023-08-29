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
    display:flex;
    gap:5px;

    img{
        width:45px;
        height:45px;
    }
}

.main_text{
    letter-spaccing:2px;
    color:var(--gray);
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