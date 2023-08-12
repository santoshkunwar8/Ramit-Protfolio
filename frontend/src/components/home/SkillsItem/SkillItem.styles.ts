import { styled } from "styled-components";

export const SkillItemWrapper=styled.div`
   border:1px solid var(--border_color);   
   padding:10px;
   display:flex;
   flex-direction:column;
   align-items:center;
   border-radius:5px;
   cursor:pointer;
   gap:5px;
   min-width:60px;
   img{
    width:40px;
   }
        p{
            color:var(--gray);
            font-size:12px;
            letter-spacing:1px;
        }

`