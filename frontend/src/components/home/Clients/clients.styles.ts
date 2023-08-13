import { styled } from "styled-components";

export const ClientsWrapper = styled.div`
display:flex;
flex-direction:column;
gap:2rem;

.client_content{
    display:flex;
    gap:2rem;
}
.vertical_line{
    background-image:linear-gradient(#d0b6f3f5, #8325FD, #8325FD, #0d1117);
    height:350px;
    width:6px;
    border-radius:10px;
}
.client_top{
    display:flex;
    align-items:center;
    gap:8px;
    margin-bottom:3rem;
    position:relative;
    .bg_color{
    
        width:60px;
        position:absolute;
        height:60px;
        border-radius:50%;
        // background:#8325FD;
        // backdrop-filter:blur(11px);
        display:grid;
        place-items:center;
        top:5px;
        filter:blur(10px);
        border:10px solid #8325FD;

    }
    img{
        // position:absolute;
        z-index:2px;
        width:40px;
        height:40px;
    }
    .client_text{
            font-weight:500;
        font-size:1.4rem; 
        letter-spacing:1.1px;
    }
}
.client_header_text h1{
         font-weight:500;
        font-size:2rem; 
        letter-spacing:1.1px;
}
.client_data_box{
    display:flex;
    gap:10px;
    flex-wrap:wrap;
    .client_data{
        border:1px solid var(--border_color);
border-radius:7px;
width:140px;
height:160px;
backdrop-filter:blur(20px);
padding:10px;
display:flex;
flex-direction:column;
align-items:center;
gap:0.4rem;
cursor:pointer;
justify-content:center;
p{
    color:var(--gray);

}
    }
}

`
