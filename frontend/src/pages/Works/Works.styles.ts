import { styled } from "styled-components"

export const WorkWrapper = styled.div`

.work_container{
    display:flex;
    flex-direction:column;
    gap:2rem;
    padding:1rem;

    .work_header{
        display:flex;
        align-items:center;
        height:60px;
        gap:1rem;

        .filter_item{
            display:flex;
            flex-direction:column;
            gap:5px;

            label{

                font-size:12px;
                letter-spacing:1px;
            }
            select{
                outline:outline;
                height:45px;
                padding:0 1rem;
                border:1px solid var(--border_color);
                background:var(--light_black);
                border-radius:8px;
                letter-spacing:1px;
                font-size:14px;

                option{
                    letter-spacing:1px;
                }
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
