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

    @media (max-width: 480px) {
      width: 60px;
      padding: 6px;
    }

    p {
      // color:var(--gray);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-weight: 500;
      letter-spacing: 0.8px;
      .item_count {
        // color:var(--main_color)

        @media (max-width: 768px) {
          font-size: 14px;
        }

        @media (max-width: 480px) {
          font-size: 13px;
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

      @media (max-width: 480px) {
        width: 60px;
        height: 60px;
      }
    }
  }
`;
