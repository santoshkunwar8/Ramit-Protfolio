import styled from "styled-components";

export const ResetPasswordWrapper = styled.div`
  padding: 2rem;
  .resetPasswordContainer {
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .resetContent {
      h1 {
        letter-spacing: 1px;
        font-weight: 600;
      }
      .resetDesc {
        color: var(--gray);
        letter-spacing: 1px;
        font-size: 18px;
        line-height: 35px;
      }
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      input {
        height: 70px;
        background: var(--light_black);
        padding: 1rem;
        border: none;
        outline: none;
        font-size: 17px;
        letter-spacing: 2px;
        margin-top: 1rem;
        color: #615757;
        border-radius: 5px;
        &::placeholder {
          letter-spacing: 1px;
          color: #615757;
        }
      }
      .resetButton {
        height: 60px;
        background: var(--main_color);
        border: none;
        font-size: 18px;
        letter-spacing: 1px;
        border-radius: 5px;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) {
    .resetPasswordContainer {
      // padding-top: 100px;
      .resetContent {
        width: 80%;
        input {
          height: 60px;
          font-size: 15px;
        }
        .resetButton {
          height: 50px;
          font-size: 16px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .resetPasswordContainer {
      .resetContent {
        width: 100%;
        input {
          height: 50px;
          font-size: 14px;
        }
        .resetButton {
          height: 45px;
          font-size: 14px;
        }
      }
    }
  }
`;
