import { styled } from "styled-components";

// styled
export const ClientItemWrapper=styled.div`

border:1px solid var(--border_color);
border-radius:7px;
width:140px;
height:160px;
backdrop-filter:blur(20px);
padding:10px;
display:flex;
flex-direction:column;
align-items:center;
gap:1rem;
cursor:pointer;
justify-content:center;
button{
    background:transparent;
    width:90%;
    border:1px solid var(--border_color);
    letter-spacing:1px;
    color:var(--gray);
    border-radius:4px;
    height:30px;
}

img{
    width:80px;
    height:80px;


    border-radius:50%;
    object-fit:cover;

}


`
