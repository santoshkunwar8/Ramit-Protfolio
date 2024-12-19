import styled from "styled-components";

export const NavbarWrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;

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
    .nav_list {
      display: flex;
      align-items: center;
      gap: 2rem;
      a {
        text-decoration: none;
      }
      .active_nav {
        color: var(--main_color);
        position: relative;

        &::before {
          content: "";
          position: absolute;
          bottom: -7px;
          height: 4px;
          width: 80%;
          border-radius: 10px;
          background: var(--main_color);
          left: 0;
        }
      }

      li {
        cursor: pointer;
        list-style: none;
        // font-weight:bold;
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
      letter-spacing: 1px;
      border: none;
      text-transform: uppercase;
      outline: none;

      &:hover {
        background: var(--hover_main_color);
      }
    }

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

      .profileInfo {
        display: flex;
        flex-direction: column;
      }
      .profileName {
        letter-spacing: 1px;
        font-size: 15px;
        text-transform: capitalize;
        // color:var(--main_color);
      }
      .profileEmail {
        color: var(--gray);
        font-size: 12px;
        letter-spacing: 1px;
      }
    }
  }

  @media (max-width: 768px) {
    .nav_left {
      .logoBg {
        .logo_text {
          font-size: 1.5rem;
          margin-right: 8px;
        }
      }
    }

    .nav_right {
      gap: 1rem;

      .nav_list {
        gap: 1rem;

        li {
          font-size: 12px;
        }
      }

      .client_button {
        font-size: 10px;
        height: 30px;
        padding: 0 8px;
      }

      .profileBox {
        .profileImg {
          width: 35px;
          height: 35px;
        }

        .profileName {
          font-size: 13px;
        }

        .profileEmail {
          font-size: 10px;
        }
      }
    }
  }

  @media (max-width: 540px) {
    .nav_left {
      .logoBg {
        .logo_text {
          font-size: 1.1rem;
          margin-right: 8px;
        }
      }
    }

    .nav_right {
      gap: 0.5rem;

      .nav_list {
        gap: 0.5rem;
        li {
          font-size: 12px;
        }
      }

      .client_button {
        font-size: 10px;
        height: 25px;
        padding: 0 8px;
      }

      .profileBox {
        .profileImg {
          width: 30px;
          height: 30px;
        }

        .profileName {
          font-size: 12px;
        }

        .profileEmail {
          font-size: 9px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .nav_left {
      .logoBg {
        .logo_text {
          font-size: 13px;
          margin-right: 8px;
        }
      }
    }

    .nav_right {
      gap: 0.5rem;

      .nav_list {
        gap: 0.5rem;
        li {
          font-size: 10px;
        }
      }

      .client_button {
        font-size: 10px;
        height: 25px;
        padding: 0 6px;
      }

      .profileBox {
        .profileImg {
          width: 30px;
          height: 30px;
        }

        .profileName {
          font-size: 12px;
        }

        .profileEmail {
          font-size: 9px;
        }
      }
    }
  }
`;
