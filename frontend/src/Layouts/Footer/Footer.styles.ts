import {styled} from "styled-components"

export const FooterWrapper = styled.div`

width:100%;
margin-top:2rem;
.footerTop{
    display:flex;
    gap:3rem;
    padding:2rem 0 ;
    .leftFooter{
        flex:4;


        .logo_text{
            font-weight:600;
            margin-bottom:10px;
            font-size:1.5rem;
            letter-spacing:1px;
            
        }

        .left_footer_desc{
            font-size:14px;
            color:var(--gray);
        }
       
        .contactButton{
            display:flex;
            align-items:center;
            gap:4px;
            margin-top:2rem;
            cursor:pointer;
            
            font-size:15px;
            .contactButtonText{
                font-weight:400 ;
                font-size:14px;
                letter-spacing:1px;
            }
        }
    }
    .rightFooter{
        flex:8;
        display:flex;
        gap:2rem;
        ul{
            flex:1;
            display:flex;
            flex-direction:column;
            gap:0.71rem;
        }
        ul li{
            letter-spacing:1px;
            list-style:none;
            color:var(--gray);
            font-size:14px;
        }
    }
}
.footerBottom{
    height:60px;
    background:var(--light_black);
    display:flex;
    justify-content:space-between;
    padding:0 2rem;
    align-items:center;
    .bottom_footer_left{
        li{
            font-size:12px;
        }
    }
    ul{
        display:flex;
        align-items:center;
        gap:1rem;

        li{
            list-style:none;
            color:var(--gray);
            // font-size:13px;
            letter-spacing:1px;
            cursor:pointer;
            svg{
                fill:var(--gray);
                color:var(--gray);
            }
        }

    }
}

`