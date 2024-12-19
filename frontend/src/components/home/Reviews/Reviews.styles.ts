import styled from "styled-components";

export const ReviewsWrapper = styled.div`
  .reviewTopContent {
    display: flex;
    gap: 1rem;
    padding: .padding_right {
      padding-top: 2rem;
    }
    .heading_text {
      font-weight: 400 !important;
      font-size: 20px !important;
      margin-bottom: 2rem;
    }
    .content_right h1 {
      font-weight: 500;
      font-size: 2rem;
      letter-spacing: 1.1px;
    }
  }

  .vertical_line {
    background-image: linear-gradient(#f499b8, #e91e63, #e91e63, #0d1117);
    height: 350px;
    width: 6px;
    border-radius: 10px;
  }
  .review_wrapper {
    padding: 2rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    overflow: hidden;

    .additionalItem {
      display: flex;
      width: 170px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 15px;
      border: 1px solid var(--border_color);
      background: var(--light_black);
      border-radius: 6px;
      gap: 8px;
      cursor: pointer;
      text-align: center; /* Center align text */
      box-sizing: border-box; /* Include padding in width */
      word-wrap: break-word; /* Break long words if necessary */
      overflow: hidden; /* Clip overflowing content */
      svg {
        font-size: 2rem;
        fill: var(--main_color);
      }
      p {
        color: var(--main_color);
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 13px;
      }
    }
  }
`;
