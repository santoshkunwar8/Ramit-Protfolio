import styled from "styled-components";

export const ReviewItemWrapper = styled.div`
max-width:500px;
padding:15px;
border:1px solid var(--border_color);
background:var(--light_black);
border-radius:6px;
// display:flex;
.review_top{
    gap:1rem;
    display:flex;

    .review_item_right{
        flex:1;
    }
    .user_image_wrapper{
        min-width:40px;
        width:40px;
        height:40px;

    }
}
.reviewImg{
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:50%;
}


.userInfo {
    gap:10px;
    display:flex;
    margin-bottom:1rem;
    justify-content:space-between;
    .userName{
        font-size:1rem;
        font-weight:500;
    }
    .userEmail{
        color:gray;
        font-size:13px;
    }
}
.review_text{
    // color:gray;
    letter-spacing:1px;
    font-size:14px;
    line-height:25px;
}
.userInfo img{


}
`