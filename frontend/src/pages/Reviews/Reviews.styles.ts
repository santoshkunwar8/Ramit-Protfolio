import { styled } from 'styled-components'

export const ReviewsWrapper = styled.div`

display:flex;
flex-direction:column;
gap:2rem;
.reviews_container{
    padding:1rem;
    display:flex;
    gap:1rem;
    flex-wrap:wrap;
    justify-content:center;
    flex-direction:column;
    .review_header{
        height:100px;
        display:flex;
        justify-content:space-between;
        align-items:center;

        .header_left{
            display:flex;
            align-items:center;
            gap:1rem;
            h1{
                font-weight:600;
                letter-spacing:1px;
            }

        }
        .header_right{
            .reviewButton{
                height:40px;
                background:var(--main_color);
                border:none;
                outline:none;
                border-radius:4px;
                padding:0 10px;
                letter-spacing:1px;
                cursor:pointer;
            }
        }
    }
    .review_wrapper{
        
        display:flex;
        flex-wrap:wrap;
        gap:1rem;
        
        
    }

}

`