import  styled from "styled-components"

export const InvalidLInkWrapper=styled.div`
display:flex;
flex-direction:column;
gap:10px;
align-items:center;
img{
    width:250px;

}
button{
    height:50px;
    border:none;
    outline:none;
    width:100%;
    background:var(--main_color);
    margin-top:1.5rem;
    font-size:17px;
    letter-spacing:1px;
    border-radius:4px;
}
h1{
    letter-spacing:1px;
    font-weight:600;
}
p{
    color:var(--gray);
    letter-spacing:1px;
}

`
