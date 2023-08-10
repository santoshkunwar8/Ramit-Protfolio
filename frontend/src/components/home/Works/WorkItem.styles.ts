import { styled } from "styled-components";

// styled
export const WorkItemWrapper = styled.div`
display:flex;
gap:1rem;
align-items:center;
background:var(--light_black);
height:60px;
padding:0 10px;

border-radius:10px;
// opacity:0.8;



.workName{
    // color:var(--main_color);
}
.workLogo{
    width:40px;
    border-radius:50%;
    height:40px;
    object-fit:cover;


    // height:25px;

}
.createdTime{
    font-size:12px;
    color:var(--gray)
}

.visit {
        border:none;
 background:var(--main_color);
    margin-left:auto;
    height:60%;
    font-size:15px;
    letter-spacing:1px;
    border-radius:5px;
    width:70px;

    

}
`