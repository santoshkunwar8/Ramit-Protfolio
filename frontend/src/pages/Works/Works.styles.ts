import { styled } from "styled-components"

interface WorkWrapperProps {
    isLoading: boolean;
    // other props...
}
export const WorkWrapper = styled.div<WorkWrapperProps>`

padding:2rem;
display:flex;
flex-direction:column;
gap:3rem;
.work_container{
    display:flex;
    flex-direction:column;
    gap:5rem;

    .work_header{
        filter:${props => props.isLoading ? "blur(1px)" : "blur(0px)"};
        display:flex;
        align-items:center;
        height:60px;
        gap:3rem;

        .filter_item{
            display:flex;
            flex-direction:column;
            gap:5px;

            label{

                font-size:12px;
                letter-spacing:1px;
                color:var(--gray);
            }
         
        }
    }
}
.workWrapper{

    justify-content:center;
    display:flex;
    gap:1rem;
    flex-wrap:wrap;
}

`

type WorkFilterSelectWrapperProps = {
    isSelected: boolean
}

export const WorkFilterSelectWrapper = styled.select<WorkFilterSelectWrapperProps>`


                outline:none;
                height:55px;
                padding:0 1rem;
                background:var(--light_black);
                border-radius:5px;
                letter-spacing:1px;
                font-size:14px;
                border:1px solid ${props => props.isSelected ? "var(--main_color)" : "var(--border_color)"};
                

                option{
                    letter-spacing:1px;
                }




`