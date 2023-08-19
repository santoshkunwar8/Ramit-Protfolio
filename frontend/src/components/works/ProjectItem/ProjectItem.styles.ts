import { styled } from "styled-components"

export const ProjectItemWrapper = styled.div`


min-width:480px;
flex:1;

background:var(--light_black);
padding:2rem;
display:flex;
flex-direction:column;
border-radius:18px;
gap:10px;
.mainText{
    font-weight:600;
    font-size:1.6rem;
    letter-spacing:1px;
}

.secondary_text span{

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
    margin:10px 0;

}
.project_bottom{
    display:flex;
    align-items:center;
    padding-top:1rem;
    justify-content:space-between;
    border-top:1px solid var(--border_color);

    .project_other_info{
        display:flex;
        flex-direction:column;
        gap:5px;
    
        b{
            font-weight:500;
            color:var(--main_color);
            letter-spacing:1px;
            cursor:pointer;
        }
        
        .editedTime{
            font-size:12px;
            letter-spacing:1px;
            color:var(--gray);
        }
    }
    .project_action{
        svg{
            font-size:1.5rem;
            cursor:pointer;
        }
    }
}
`