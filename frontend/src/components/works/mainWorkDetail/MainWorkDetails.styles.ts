import { styled } from 'styled-components'

interface MainWorkDetailsWrapperProps {
    status: string
}
export const MainWorkDetailsWrapper = styled.div<MainWorkDetailsWrapperProps>`

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
        height:300px;

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
            object-fit:cover;
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

        .statusButton{
            margin:1rem 0;

            background:${props => props.status === "progress" ? "#e91e63" : "var(--main_color)"};
            width:fit-content;
            border:none;
            height:40px;
            border-radius:20px;
            padding:0 1.5rem;
            font-size:16px;
            letter-spacing:1px;
        }

        .primaryInfo{
            display:flex;
           justify-content:space-between;
           .main_info{
            display:flex;
            flex-direction:column;
            gap:5px;
           }
        }
    

        .workName{
            letter-spacing:1px;
            font-size:1.4rem;
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
        align-items:center;
        
        .techUsed{
            display:flex;
      
            gap:5px;
        }
        .shareBox{
            display:flex;
            gap:8px;
            // place-items:center;
            align-items:start;
            border-radius:4px;
            cursor:pointer;
           
         svg{
            font-size:2rem;
            fill:var(--main_color);
         }
         

            
        }
    }
}
`