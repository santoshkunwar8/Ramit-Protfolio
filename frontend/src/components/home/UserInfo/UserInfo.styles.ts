import { styled } from "styled-components";

// styled
export const UserInfoWrapper=styled.div`

display:flex;
height:70%;
gap:1rem;
.imageWrapper{
  
    flex:1;
    background:var(--main_color);
    height:88%;
    border-radius:10px;
    position:relative;
    overflow:hidden;
    .userImage{
      // overflow:hid
      position:absolute;
      bottom:0;
      width:100%;
      object-fit:cover;
      height:100%;
      margin:auto;
    }

}
.otherInfo{
    flex:1;
    display:flex;
    flex-direction:column;
    gap:1rem;
    .name_box{
        display:flex;
        height:50px;
        border-radius:5px;
        align-items:center;
        background:var(--light_black);
        padding:0 10px;
        // justify-content:space-between;
        gap:10px;
        letter-spacing:1px;
        .name_label{
            font-size:13px;
            // color:red;
        }
        .name_value{
            font-size:13px;
            font-weight:600;
        }
    }
    .user_map_box{
        border-radius:10px;
        width:100%;
        background-color:var(--light_black);
        height:50% !important;
    }
    .social_media_box{
        height:70px;
        border-radius:8px;
        width:100%;
        background:var(--light_black);
        display:flex;
        align-items:center;
        padding:0 1rem;
            // gap: 1rem;
            justify-content:space-between;
        .media_box{
            width:50px;
            height:50px;
            border-radius:50%;
            display:grid;
            place-items:center;
            cursor:pointer;
            // background:var(--)
        }
          .current_media{
            background:var(--main_color);
          }
        svg{
            font-size:1.4rem;
        }

    }
}

`