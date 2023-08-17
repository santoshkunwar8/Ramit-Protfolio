import  {styled} from "styled-components"

export const UploadWorkWrapper = styled.form`



display:flex;
flex-direction:column;;
gap:1rem;
max-width:700px;
width:95%;
margin:auto;

.uploadButton{
    background:var(--light_black);
    color:var(--gray);
    border:1px solid var(--border_color);
    height:45px;
}
    
input , select, textarea{
    border:1px solid var(--border_color);
    height:50px;
    background:var(--light_black);
    padding:0 1rem;
    border-radius:4px;
    outline:none;
    font-size:11px;
    letter-spacing:1px;
    color:var(--gray);   
        &::placeholder{
            color:var(--gray);
            letter-spacing:1px;
            font-size:11px;
            
        }
        }

    textarea{
        padding:1rem;
}
    
.toolUpload{

    display:flex;
    align-items:center;
    background:var(--light_black);
    height:50px;
    border-radius:5px;
border:1px solid var(--border_color);
padding:  0 1rem;
gap:0.5rem;

    svg{
        font-size:1.82rem;
        fill:var(--gray);
    }
    p{
        font-size:11px;
        color:var(--gray);
        letter-spacing:1px;
    }
}
    .imageBox{
        display:flex;
        gap:1rem;
        .imageItem{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            height:140px;
            width:150px;;
            border-radius:7px;
            background:var(--light_black);
            border:1px solid var(--border_color);
            cursor:pointer;
            svg{
                font-size:3rem;
                
                fill:var(--gray);
            }
            p{
                font-size:9px;
                text-align:center;
                letter-spacing:1px;
                color:var(--gray);
            }
        }

    }

`