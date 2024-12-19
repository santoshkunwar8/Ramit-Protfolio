import styled from "styled-components";

interface ReviewsWrapperProps {
  isLoading: boolean;
}

export const ReviewsWrapper = styled.div<ReviewsWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  .reviews_container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .review_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      filter: ${(props) => (props.isLoading ? "blur(1px)" : "none")};

      .header_left {
        display: flex;
        align-items: center;
        gap: 1rem;

        h1 {
          font-weight: 600;
          letter-spacing: 1px;
          color: #fff;
        }
      }

      .header_right {
        display: flex;
        align-items: center;
        gap: 2rem;

        .reviewFilterItem {
          display: flex;
          flex-direction: column;

          label {
            font-size: 12px;
            letter-spacing: 1px;
            color: var(--gray);
          }

          select {
            height: 40px;
            border: 1px solid var(--border_color);
            border-radius: 4px;
            padding: 0 1rem;
            color: var(--gray);
            background: var(--light_black);
            outline: none;

            option {
              background: var(--dark_gray);
            }
          }
        }

        .reviewButton {
          height: 40px;
          background: var(--main_color);
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 0 1rem;
          cursor: pointer;
          transition: background 0.3s ease;

          &:hover {
            background: var(--hover_color);
          }
        }
      }
    }

    .review_wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 1rem;

      .review_card {
        flex: 1 1 calc(33.333% - 20px);
        min-width: 320px;
        background-color: #1e1e1e;
        color: #fff;
        border: 1px solid #333;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 1.5rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }
      }

      .userInfo {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;

        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
        }

        h3 {
          font-size: 1rem;
          font-weight: bold;
          margin: 0;
        }
      }

      .review_text {
        font-size: 0.9rem;
        line-height: 1.4;
        margin: 1rem 0 0.5rem 0;
      }
    }

    p {
      color: var(--gray);
      font-size: 1rem;
      text-align: center;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .reviews_container {
      .review_header {
        // flex-direction: column;
        align-items: flex-start;
        gap: 1rem;

        .header_right {
          // flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }
      }

      .review_wrapper {
        .review_card {
          flex: 1 1 calc(50% - 20px);
          min-width: 100%;
        }
      }
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem;

    .reviews_container {
      .review_header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;

        .header_right {
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
        }
      }

      .review_wrapper {
        .review_card {
          flex: 1 1 100%;
          min-width: 100%;
        }
      }
    }
  }
`;
