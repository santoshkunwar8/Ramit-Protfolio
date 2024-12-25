import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  .footerTop {
    display: flex;
    gap: 3rem;
    padding: 2rem 0;
    .leftFooter {
      flex: 4;

      .logo_text {
        font-weight: 600;
        margin-bottom: 10px;
        font-size: 1.5rem;
        letter-spacing: 1px;
      }

      .left_footer_desc {
        font-size: 16px;
        color: var(--gray);
      }

      
     .contactButton {
  display: flex;
  align-items: center;
  justify-content: center; /* Centers text and icon */
  padding: 10px 20px; /* Adjusted padding for better size */
  gap: 8px;
  margin-top: 2rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  background: linear-gradient(
    to right,
    rgb(0, 255, 0),
         rgb(0, 204, 0),
         rgb(0, 153, 0), 
         rgb(0, 102, 0), 
         rgb(0, 51, 0)
  );
  color: white;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  width: fit-content; /* Matches width to content */
  transition: all 0.3s ease;
}

.contactButton:hover {
  filter: brightness(1.1);
}

.contactButtonText {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}

.icon {
  font-size: 20px;
  font-weight: bold;
}


        .exploreButton {
      display: inline-block;
      margin-top: 1rem;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: 600;
      color: white;
      background: linear-gradient(
        to right,
        #7d19ff,
        #7518ff,
        #5200e5d1,
        #6114e99c,
        #521eb2a8,
        #4e279773
      );
      border: none;
      border-radius: 5px;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
    }
  }
    }
    .rightFooter {
      flex: 8;
      display: flex;
      gap: 2rem;
      ul {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.71rem;
      }
      ul li {
        letter-spacing: 1px;
        list-style: none;
        color: var(--gray);
        font-size: 14px;
      }
    }
  }
   .line{
   border-color:var(--light_black);
   }
  .footerBottom {
   width:100%;
    height: 80px;
    background: var(--light_black);
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    align-items: center;
    border-radius: 40px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      margin-bottom:70px;
    }
      
    .bottom_footer_left {
      li {
        font-size: 12px;
      }
    }
    ul {
      display: flex;
      align-items: center;
      gap: 1rem;

      li {
        list-style: none;
        color: var(--gray);
        // font-size:13px;
        letter-spacing: 1px;
        cursor: pointer;
        svg {
          fill: var(--gray);
          color: var(--gray);
        }
      }
    }
  }

  @media (max-width: 768px) {
   margin-bottom:90px;
    .footerTop {
      flex-direction: column;
      align-items: center;
      text-align: center;

      .leftFooter {
        .logo_text {
          font-size: 1.2rem;
          font-size: 1.5rem;
          color: var(--main_color); 
          margin-bottom: 0.5rem;
        }

        .left_footer_desc {
          font-size: 18px;
          color: var(--gray);
          margin-bottom: 1rem;
          line-height: 1.5; 
        }
        }

        .exploreButton {
          font-size: 13px;
          display:flex;
          align-items:center;
          justify-content:center;
          width: 100%;
          margin-top: 1rem;
           color: white; 
          border: none; 
          border-radius: 5px; 
          text-align: center; 
          text-decoration: none; 
          padding: 10px 20px;
          font-size: 16px;
          font-weight: 600;
        }
        .contactButton {
          display:flex;
          align-items:center;
          justify-content:center;
          width: 100%;
          margin-top: 1rem;
           color: white; 
          border: none; 
          border-radius: 5px; 
          text-align: center; 
          text-decoration: none; 
          padding: 10px 20px;
          

         .contactButtonText {
          font-weight: 600;
          font-size:48px ;
          letter-spacing: 1px;
        }
  
          background: linear-gradient(
            to right,
            #00ff00,
            #00cc00,
            #009900,
            #006600,
            #003300
          ); 
}
        

        }
      }

      .rightFooter {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;

        ul {
          align-items: center;
        }
      }
    }

    .footerBottom {
      flex-direction: column;
      background: var(--black_color);
      height: auto;
      padding: 2rem 0;
       margin: 0;
      //  background:black;
        border-radius: 40px;

      .bottom_footer_left {
        margin-bottom: 1rem;
      }

      ul {
        justify-content: center;
      }
    }
  }

  @media (max-width: 480px) {
    .footerTop {
    flex-direction:column;
      gap: 1rem;
      padding: 1rem 0;

      .leftFooter {
        .logo_text {
          font-size: 1rem;
        }

        .left_footer_desc {
          font-size: 10px;
        }

        .contactButton {
          font-size: 11px;

          .contactButtonText {
          font-weight: 600;
          font-size:14px ;
          letter-spacing: 1px;
        }
        }
      }

      .rightFooter {
         display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;

        ul li {
          font-size: 12px;
        }
      }
    }

    .line{
   border-color:var(--light_black);
   }

    .footerBottom {
      width: 100%;
      padding: 1rem 0rem;
      margin:0;

      ul {
        justify-content: center;
        width: 100%;
      }

      ul li {
        font-size: 10px;

        .cornorTM{
        font-size:12px;
        }
      }
    }
  }
`;
