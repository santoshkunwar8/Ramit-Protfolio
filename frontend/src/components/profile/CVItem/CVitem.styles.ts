import { styled } from "styled-components"

export const CVItemWrapper = styled.div`

flex:1;
height:250px;
position:relative;
.cvBg{
position:absolute;
width:100%;
height:100%;
background:rgba(0,0,0,0.4);
display:grid;
place-items:center;
cursor:pointer;


svg{
    font-size:4rem;
    fill:var(--gray);
}
}
img{
    height:100%;
    border-radius:4px;
    width:100%;
    object-fit:cover;

}

`