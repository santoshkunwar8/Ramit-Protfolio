import { styled } from "styled-components"







export const ProfileSetupWrapper = styled.div`

padding:2rem;

.setupGround{
    height:80vh;
    display:flex;
    justify-content:center;
    align-items:center;
}

`


export const SkillSetupWraper = styled.div`

display:flex;
flex-direction:column;
gap:2rem;
background:var(--light_black);
padding:2rem;
border-radius:10px;
max-width:600px;
.skillHeader{
    display:flex;
    align-items:center;
    // gap:10px;
    justify-content:space-between;
    h1{
        font-weight:600;
        letter-spacing:1px;
        font-size:1.6rem;
    }
}

.infoTxt{
    color:var(--gray);
    font-size:13px;
    letter-spacing:1.4px; 
}
.skillWrapper{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    

    .skillBox{
        
        padding:10px;
        border-radius:8px;
        border:1px solid var(--border_color);
        cursor:pointer;
        p{
            color:var(--gray);
            letter-spacing:1px;
            font-size:13px;
            
        }
    }
    .selected{
        background:var(--main_color);
        p{

            color:white !important;
        }
    }
    
}
.nextButton{
    border-radius:5px;
    width:fit-content;
    padding:0 1rem;
    height:40px;
    border:none;
    background:var(--main_color);
    letter-spacing:2px;
    font-size:15px;
    margin-left:auto;
    cursor:pointer; 
    outline:none;
}

`