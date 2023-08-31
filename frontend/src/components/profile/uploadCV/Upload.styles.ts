import { styled } from "styled-components"


export const UploadCVWrapper = styled.div`

display:flex;
flex-direction:column;
gap:1.5rem;
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
    height:45px;
    padding:0 1rem;
    border-radius:5px;
    font-size:16px;

    letter-spacing:2px;
    cursor:pointer;
}
.imageWrappers{
    width:80%;
    display:flex;
    height:120px;
    gap:2rem;
    .CvImgItem{
        // background:#151515;
        height:100%;
        border:1px solid var(--main_color);
        cursor:pointer;
        border-radius:10px;
        flex:1;
        display:flex;
        align-items:center;
        justify-content:center;
        svg{
            font-size:2rem;
            fill:var(--main_color);
        }
    }
}
.buttonWrapper{
    gap:4px;
    display:flex;
    flex-direction:column;
    align-items:center;

    p{
        font-size:13px;
        letter-spacing:1px;
        color:var(--gray);

    }
}

`