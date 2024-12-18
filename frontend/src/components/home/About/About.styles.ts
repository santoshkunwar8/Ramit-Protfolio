import styled from "styled-components";

export const AboutWrapper = styled.div`
padding:1rem;
display:flex;
flex-direction:column;
gap:1rem;
background:var(--light_black);
border-radius:8px;
border:1px solid var(--border_color);

h5{
    letter-spacing:1px;
    font-size:1.3rem;
}
.aboutText{
    letter-spacing:1px;
    line-height:25px;
    color:var(--gray);
    font-size:14px;
}

`