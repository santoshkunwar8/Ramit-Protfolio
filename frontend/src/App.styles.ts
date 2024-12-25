// :root{
//   --black_color:#0F0F0F;
//   --light_black:#1E1B1E;
//   --gray:#9E9D9E;
//   --white:#E7E7E7;
//   --main_color:#8325FD;
// }
import styled from "styled-components";
export const AppWrapper=styled.div`

background:var(--black_color);
// height:100vh;
max-width:1200px;
width:95%;
margin:0 auto;

witdh:100%

`

export const LoadingScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;

  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #ddd;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .message {
    margin-top: 20px;
    font-size: 1.2rem;
    color: #555;
  }
`;

// #root {
//   max-width: 1280px;
//   margin: 0 auto;
//   padding: 2rem;
//   text-align: center;
// }

// .logo {
//   height: 6em;
//   padding: 1.5em;
//   will-change: filter;
//   transition: filter 300ms;
// }
// .logo:hover {
//   filter: drop-shadow(0 0 2em #646cffaa);
// }
// .logo.react:hover {
//   filter: drop-shadow(0 0 2em #61dafbaa);
// }

// @keyframes logo-spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }

// @media (prefers-reduced-motion: no-preference) {
//   a:nth-of-type(2) .logo {
//     animation: logo-spin infinite 20s linear;
//   }
// }

// .card {
//   padding: 2em;
// }

// .read-the-docs {
//   color: #888;
// }
