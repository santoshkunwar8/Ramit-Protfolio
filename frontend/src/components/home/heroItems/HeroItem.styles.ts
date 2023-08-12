import { styled } from "styled-components";

export const HeroItemsWrapper = styled.div`

display:flex;
align-items:center;
gap:1rem;

.current_item{
    border:3px solid var(--main_color);
    opacity:1 !important;
}
.itemBox{
    border:1px solid var(--border_color);
    opacity:0.6;
    height:150px;
    width:150px;
    background:var(--light_black);
    border-radius:7px;
    cursor:pointer;
    display:flex;
    flex-direction:column;
    gap:10px;
    align-items:center;
    justify-content:center;


    p{
        // color:var(--gray);
        font-size:15px;
        font-weight:500;
        letter-spacing:0.8px;
        .item_count{
            // color:var(--main_color)
        }
    }

    img{
        width:80px;
        height:80px;


    }
   
}

`