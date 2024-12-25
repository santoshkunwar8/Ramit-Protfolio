import styled from "styled-components";

export const HeroItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;


  .current_item {
    border: 3px solid var(--main_color);
    opacity: 1 !important;
  }
  .itemBox {
    border: 1px solid var(--border_color);
    opacity: 0.6;
    height: 150px;
    flex: 1;
    width: 80px;
    background: var(--light_black);
    border-radius: 7px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: 70px;
      padding: 8px;
    }

    @media (max-width: 680px) {
      width: 50px;
      height: 120px;
      padding: 5px;

      p {
        font-size: 12px;

        .item_count {
          font-size: 11px;
        }
      }

      img {
        width: 50px;
        height: 50px;
      }
    }

    @media (max-width: 480px) {
      width: 40px;
      height: 100px;
      padding: 4px;
      gap: 10px;

      p {
        font-size: 12px !important;
        font-weight:300;
        // color:green;

        .item_count {
          font-size: 10px;
        }
      }

      img {
        width: 40px;
        height: 40px;
      }
    }
      @media (max-width: 450px) {
      width: 40px;
      height: 100px;
      padding: 4px;
      gap: 10px;

      p {
        font-size: 9px !important;
        font-weight:300;
        // color:green;

        .item_count {
          font-size: 10px;
        }
      }

      img {
        width: 40px;
        height: 40px;
      }
    }
      

    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.8px;

      .item_count {
        @media (max-width: 768px) {
          font-size: 13px;
        }

        @media (max-width: 680px) {
          font-size: 10px;
        }

        @media (max-width: 480px) {
          font-size: 8px;
        }
      }
    }

    img {
      width: 80px;
      height: 80px;

      @media (max-width: 768px) {
        width: 70px;
        height: 70px;
      }

      @media (max-width: 680px) {
        width: 50px;
        height: 50px;
      }

      @media (max-width: 480px) {
        width: 30px;
        height: 30px;
      }
    }

    @media (max-width: 480px) {
      gap:0.2rem;
      // background:green;
}
  }
`;
