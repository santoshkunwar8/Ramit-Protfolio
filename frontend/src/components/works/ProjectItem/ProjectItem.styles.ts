import styled from "styled-components";
interface ProjectItemWrapperProps {
  big: boolean;
  progress: boolean;
}
export const ProjectItemWrapper = styled.div<ProjectItemWrapperProps>`
  min-width: 480px;
  flex: 1;
  cursor: pointer;
  background: var(--light_black);
  padding: ${(props) => (props.big ? "2rem" : "1.5rem")};
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  gap: 10px;
  transition: all 0.3s ease;
  &:hover {
    scale: 1.02;
    background: #151515;
  }

  .project_image {
    width: 100%;
    height: ${(props) => (props.big ? "200px" : "150px")};
    object-fit: cover;
    border-radius: 10px;
  }
  .midBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .ratingBox {
      display: flex;
      gap: 3px;
      align-items: center;
      p {
        font-size: 12px;
        color: var(--gray);
      }
    }
  }
  .mainText {
    font-weight: 600;
    font-size: ${(props) => (props.big ? "1.6rem" : "1.2rem")};
    letter-spacing: 1px;
  }
  .secondary_text span {
    font-size: ${(props) => (props.big ? "14px" : "12px")};
    letter-spacing: 1px;
  }
  .project_desc {
    color: var(--gray);
    font-size: ${(props) => (props.big ? "14px" : "12px")};
    letter-spacing: 1px;
  }
  .progressBtn {
    padding: 0 1rem;
    width: fit-content;
    border-radius: 20px;
    height: 30px;
    letter-spacing: 1px;
    border: none;
    outline: none;
    background: ${(props) =>
      props.progress ? "#e91e63" : "var(--main_color)"};

    margin: 10px 0;
  }
  .project_bottom {
    display: flex;
    align-items: center;
    padding-top: 1rem;
    justify-content: space-between;
    border-top: 1px solid var(--border_color);

    .project_other_info {
      display: flex;
      flex-direction: column;
      gap: ${(props) => (props.big ? "5px" : "2px")};

      b {
        font-weight: 500;
        color: var(--main_color);
        letter-spacing: 1px;

        cursor: pointer;
        font-size: ${(props) => (props.big ? "13px" : "12px")};
      }

      .editedTime {
        font-size: ${(props) => (props.big ? "12px" : "10px")};
        letter-spacing: 1px;
        color: var(--gray);
      }
    }
    .project_action {
      display: flex;
      gap: 5px;
      svg {
        font-size: 1.5rem;
        cursor: pointer;
        fill: var(--main_color) !important;
      }
    }
  }

  @media (max-width: 768px) {
    min-width: 100%;
    padding: ${(props) => (props.big ? "1.5rem" : "1rem")};

    .mainText {
      font-size: ${(props) => (props.big ? "1.4rem" : "1rem")};
    }

    .secondary_text span {
      font-size: ${(props) => (props.big ? "12px" : "10px")};
    }

    .project_desc {
      font-size: ${(props) => (props.big ? "12px" : "10px")};
    }

    .progressBtn {
      height: 25px;
      font-size: 12px;
    }

    .project_other_info {
      gap: ${(props) => (props.big ? "4px" : "2px")};

      b {
        font-size: ${(props) => (props.big ? "12px" : "10px")};
      }

      .editedTime {
        font-size: ${(props) => (props.big ? "10px" : "8px")};
      }
    }

    .project_action {
      svg {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 480px) {
    min-width: 100%;
    padding: ${(props) => (props.big ? "1rem" : "0.5rem")};

    .mainText {
      font-size: ${(props) => (props.big ? "1.2rem" : "0.8rem")};
    }

    .secondary_text span {
      font-size: ${(props) => (props.big ? "10px" : "8px")};
    }

    .project_desc {
      font-size: ${(props) => (props.big ? "10px" : "8px")};
    }

    .progressBtn {
      height: 20px;
      font-size: 10px;
    }

    .project_other_info {
      gap: ${(props) => (props.big ? "3px" : "1px")};

      b {
        font-size: ${(props) => (props.big ? "10px" : "8px")};
      }

      .editedTime {
        font-size: ${(props) => (props.big ? "8px" : "6px")};
      }
    }

    .project_action {
      svg {
        font-size: 1rem;
      }
    }
  }
`;
