import { styled } from 'styled-components'

export const CommentItemWrapper = styled.div`

display:flex;
flex-direction:column;
gap:1rem;
background:var(--light_black);
padding:1rem;
border-radius:4px;
border:1px solid var(--border_color);
cursor:pointer;

.comment_header{
    display:flex;
    justify-content:space-between;

    .userProfileInfo{
        display:flex;
        gap:1rem;

        h3{
            font-weight:600;

        }
        .userEmail{
            font-size:12px;
            color:var(--gray);
            letter-spacing:1px;

        }
        img{
            width:50px;
            height:50px;
            border-radius:5px;
            object-fit:cover;
        }
    }
    .createdTime{
        font-size:12px;
        color:var(--gray);
    }
    }

    .comment_text{
        color:var(--gray);
        font-size:14px;
        letter-spacing:1px;
    }

`