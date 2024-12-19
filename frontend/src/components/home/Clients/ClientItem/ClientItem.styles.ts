import styled from "styled-components";

// styled
export const ClientItemWrapper = styled.div`
  border: 1px solid var(--border_color);
  border-radius: 7px;
  width: 140px;
  height: 160px;
  backdrop-filter: blur(20px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  justify-content: center;
  box-sizing: border-box;
  button {
    background: transparent;
    width: 90%;
    border: 1px solid var(--border_color);
    letter-spacing: 1px;
    color: var(--gray);
    border-radius: 4px;
    height: 30px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  img {
    width: 80px;
    height: 80px;

    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 140px;

    img {
      width: 70px;
      height: 70px;
    }

    button {
      height: 25px;
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 120px;

    img {
      width: 60px;
      height: 60px;
    }

    button {
      height: 20px;
      font-size: 10px;
    }
  }
`;
