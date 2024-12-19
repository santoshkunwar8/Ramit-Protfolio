import styled from "styled-components";

export const ClientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .client_content {
    display: flex;
    gap: 2rem;
  }
  .vertical_line {
    background-image: linear-gradient(#d0b6f3f5, #8325fd, #8325fd, #0d1117);
    height: 350px;
    width: 6px;
    border-radius: 10px;
    flex-shrink: 0;
  }
  .client_top {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 3rem;
    position: relative;
    .bg_color {
      width: 60px;
      position: absolute;
      height: 60px;
      border-radius: 50%;
      // background:#8325FD;
      // backdrop-filter:blur(11px);
      display: grid;
      place-items: center;
      top: 5px;
      filter: blur(10px);
      border: 10px solid #8325fd;
    }
    img {
      // position:absolute;
      z-index: 2px;
      width: 40px;
      height: 40px;
    }
    .client_text {
      font-weight: 500;
      font-size: 1.4rem;
      letter-spacing: 1.1px;
    }
  }
  .client_header_text h1 {
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: 1.1px;
  }
  .client_data_box {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    .client_data {
      border: 1px solid var(--border_color);
      border-radius: 7px;
      width: 170px;
      height: 170px;
      backdrop-filter: blur(20px);
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.4rem;
      cursor: pointer;
      justify-content: center;
      p {
        color: var(--gray);
      }
    }
  }

  @media (max-width: 768px) {
    .client_content {
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: 25rem;
    }

    .vertical_line {
      height: 200px;
      width: 4px;
    }

    .client_top {
      gap: 5px;
      margin-bottom: 2rem;

      img {
        width: 30px;
        height: 30px;
      }

      .client_text {
        font-size: 1.2rem;
      }
    }

    .client_header_text h1 {
      font-size: 1.5rem;
    }

    .client_data_box {
      gap: 20px;

      .client_data {
        width: 140px;
        height: 140px;
        color: green;
      }
    }
  }
  @media (max-width: 650px) {
    .client_content {
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: 34rem;
    }

    .vertical_line {
      height: 200px;
      width: 5px;
    }
  }

  @media (max-width: 512px) {
    .client_content {
      align-items: flex-start;
      margin-top: 36rem;
    }
  }

  @media (max-width: 480px) {
    .client_content {
      // gap: 1rem;
      margin-top: 43rem;
    }

    .vertical_line {
      height: 150px;
      width: 3px;
    }

    .client_top {
      gap: 3px;
      margin-bottom: 1rem;

      img {
        width: 25px;
        height: 25px;
      }

      .client_text {
        font-size: 1rem;
      }
    }

    .client_header_text h1 {
      font-size: 1.2rem;
    }

    .client_data_box {
      gap: 10px;

      .client_data {
        width: 120px;
        height: 120px;
      }
    }
  }
    @media (max-width: 428px) {
    .client_content {
      margin-top: 46rem;
    }
       @media (max-width: 410px) {
    .client_content {
      margin-top: 50rem;
    }
`;
