import styled from "styled-components";

export const SmallSkillItemWrapper = styled.div`

   border:1px solid var(--border_color);   
   padding:10px;
   display:flex;
   flex-direction:column;
   align-items:center;
   border-radius:5px;
   cursor:pointer;
   gap:5px;
   min-width:40px;

   img{
    width:20px;
   }
        p{
            color:var(--gray);
            font-size:11px;
            letter-spacing:1px;
        }

`