import { styled } from 'styled-components'


export const MainWorkDetailsWrapper = styled.div`

display:flex;
gap:1rem;
// height:40px;

.imageBox{
    border:1px solid var(--border_color);
    background:var(--light_black);
    padding:1rem;
    border-radius:10px;
    flex:4;
    display:flex;
    flex-direction:column;
    gap:10px;

    .mainImgWrapper{
        width:100%;
        height:100%;

        img{
            width:100%;
            height:100%;
            object-fit:cover;
            border-radius:8px;
        }
    }
    .otherImages{
        display:flex;
        gap:8px;
        img{
            width:100px;
            height:100px;
            border-radius:4px;
        }
    }
}
.otherInfo{
    background:var(--light_black);
    border-radius:10px;
    border:1px solid var(--border_color);
    flex:8;
    padding: 1rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between;


    .infoTop{
        display:flex;
        flex-direction:column;

        .primaryInfo{
            display:flex;
           justify-content:space-between;
        }
    

        .workName{
            letter-spacing:1px;
            // text-transform:uppercase;
        }
        .workType{
            letter-spacing:1px;
                  color:var(--gray);
        }
        .workLink{
            margin-top:1rem;
            display:block;
            font-size:13px;
            letter-spacing:1px;
            color:var(--main_color);
        }
        .workDesc{
            margin-top:1rem;
            font-size:14px;
            color:var(--gray);
            letter-spacing:0.9px;
        }
        .ratingBox{
            height:fit-content;
            display:flex;
            align-items:center;
            gap:10px;

            p{
                color:var(--gray);
            }
        }
    }
    .actionBox{

        display:flex;
        width:100%;
        justify-content:space-between;
        
        .techUsed{
            display:flex;
      
            gap:5px;
        }
        .shareBox{
           
         
            justify-self:flex-end;
            border-radius:6px;
            display:flex;
            gap:10px;
            align-items:center;
            margin-top:auto;
            display:inline-flex;
            padding:0 0.4rem;

            
        }
    }
}
`