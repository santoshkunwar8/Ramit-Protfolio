import { styled } from "styled-components"


export const ReviewModalWrapper = styled.div`


display:flex;
flex-direction:column;
gap:1rem;
margin:2rem 0;
.reviewInput{
            background:var(--light_black);
            width:100%;
            border-radius:9px;
            border:1px solid var(--border_color);
            height:100px;
            font-size:17px;
            padding:1rem;
            letter-spacing:1px;
}
.reviewButton{
        background:var(--main_color);
        height:45px;
        width:150px;
        border:none;
        outline:none;

        font-size:15px;
        border-radius:5px;

        letter-spacing:1px;
}



`