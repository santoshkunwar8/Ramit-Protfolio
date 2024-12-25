import styled from "styled-components";

export const NavbarWrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;

  .profilebox{
  width:20px;
  height:20px;
  }

  /* Desktop Styles */
  .nav_icon {
    display: none;
    font-size: 1.5rem;
  }
  .nav_text {
    font-size: 1rem;
    display: block;
  }

  .nav_left {
    .logoBg {
      .logo_text {
        background: linear-gradient(
          to right,
          #7d19ff,
          #7518ff,
          #5200e5d1,
          #6114e99c,
          #521eb2a8,
          #4e279773
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 2rem;
        font-weight: 900;
        letter-spacing: 1px;
        font-family: "Orbitron", sans-serif;
        cursor: pointer;
      }
    }
  }

  .nav_right {
    display: flex;
    align-items: center;
    gap: 2rem;

    .profileBox {
      display: flex;
      gap: 10px;
      cursor: pointer;

      .profileImg {
        border-radius: 50%;
        object-fit: cover;
        width: 45px;
        height: 45px;
        border: 3px solid var(--main_color);
        padding: 2px;
      }
}

    .nav_list {
      display: flex;
      align-items: center;
      gap: 2rem;

      a {
        text-decoration: none;
      }

      li {
        cursor: pointer;
        list-style: none;
        font-size: 15px;
        letter-spacing: 1px;
        color: var(--gray);
        transition: all 0.3s ease;

        &:hover {
          color: var(--main_color);
        }
      }
    }

    .client_button {
      background: var(--main_color);
      border-radius: 7px;
      letter-spacing: 1px;
      font-size: 14px;
      padding: 0 1rem;
      height: 37px;
      cursor: pointer;
      text-transform: uppercase;
      outline: none;

      &:hover {
        background: var(--hover_main_color);
      }
    }
  }

  /* Responsive Styles for Mobile */
  @media (max-width: 768px) {
    .nav_left {
      position: absolute;
      top: 10px;
      left: 50px;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .nav_right {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;
      background: #111; /* Adjust background color */
      display: flex;
      align-items: center;
      justify-content: space-around;
      z-index: 1000;
      box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);

      

      .nav_list {
        display: flex;
        width: 100%;
        justify-content: space-around;

        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: var(--gray);

          .nav_icon {
            display: block;
            font-size: 1.5rem;
          }

          .nav_text {
            display: none; /* Hide text for mobile */
          }

          &.active {
            color: var(--main_color);
          }
        }
      }

      .client_button {
        display: none; /* Hide login button in bottom navbar */
      }
    }
  }

  @media (max-width: 540px) {
    .nav_list {
      a {
        .nav_icon {
          font-size: 1.2rem; /* Smaller icons */
        }
      }
    }
      .nav_text {
          font-size: 0.7rem;

  }
`;
