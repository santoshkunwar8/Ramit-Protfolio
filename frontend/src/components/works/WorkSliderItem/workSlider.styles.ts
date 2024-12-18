import styled from "styled-components";

export const WorkSliderItemWrapper = styled.div`
padding:2rem;
display:flex;
flex-direction:column;
gap:1rem;
.work_header{
    display:flex;
    align-items:center;
    justify-content:space-between;
    
    
    .header_left{
        gap:8px;
        display:flex;
    }
    .explore_button{
        background:var(--main_color);
        height:40px;
        border-radius:5px;
        width:120px;
        cursor:pointer;
        font-size:15px;
        letter-spacing:1px;
        border:none;
        outline:none;
    }
    img{
        width:44px;

        height:44px;
        }
        .header_text{
                font-weight: 600;
            font-size: 1.7rem;
            letter-spacing: 1.1px;
        }
}
.work_item_wrapper{
    display:flex;
    gap:1rem;
    max-width:100%;
    overflow-x:scroll;
    padding:1rem 0rem;
}

`