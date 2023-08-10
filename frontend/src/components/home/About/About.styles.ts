import { styled } from "styled-components";

export const AboutWrapper=styled.div`
padding:1rem;
display:flex;
flex-direction:column;
gap:1rem;
background:var(--light_black);
border-radius:8px;

h5{
    letter-spacing:1px;
    font-size:1rem;
}
.aboutText{
    color:var(--gray);
    font-size:14px;
}

`