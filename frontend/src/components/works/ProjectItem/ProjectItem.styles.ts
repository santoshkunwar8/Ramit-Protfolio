import { styled } from "styled-components"

export const ProjectItemWrapper = styled.div`

width:480px;
background:var(--light_black);
padding:1rem;
display:flex;
flex-direction:column;
border-radius:18px;
gap:10px;
.mainText{
    font-weight:600;
    font-size:1.6rem;
    letter-spacing:1px;
}
// .seconda
.secondary_text span{
    color:var(--gray);
    letter-spacing:1px;
}
.project_desc{
    color:var(--gray);
    font-size:14px;
    letter-spacing:1px;
}
.progressBtn{
    padding:0 1rem;
    width:fit-content;
    border-radius:20px;
    height:30px;
    letter-spacing:1px;
    border:none;
    outline:none;
    background:var(--main_color);

}
.project_bottom{
    display:flex;
    align-items:center;
    height:80px;
    justify-content:space-between;
    border-top:1px solid var(--border_color);

    .editedTime{
        font-size:12px;
        color:var(--gray);
    }
}
`