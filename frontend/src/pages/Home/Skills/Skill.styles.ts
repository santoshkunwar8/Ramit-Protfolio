import styled from "styled-components";

export const SkillWrapper = styled.div`
  display: flex;
  gap: 2rem;
  height: 700px;
  @media (max-width: 780px) {
    flex-direction: column;
  }

  .tech_box,
  .skill_box {
    padding: 2rem;
    background: var(--light_black);
    border-radius: 5px;
    border: 1px solid var(--border_color);
    flex: 1;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .toolsContainer {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      flex-grow: 1;
      min-height: 100px;
    }

    .mySkillsContainer {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .skillItem {
        display: flex;
        flex-direction: column;
        gap: 5px;
        .skillInfo {
          display: flex;
          align-items: center;
          gap: 5px;
          img {
            width: 30px;
            height: 30px;
            @media (max-width: 806px) {
              width: 20px;
              height: 20px;
            }

            @media (max-width: 480px) {
              width: 20px;
              height: 20px;
            }
          }
        }
        .skillName {
          font-size: 15px;
          letter-spacing: 0.8px;
          color: var(--gray);
          font-weight: 600;
          word-wrap: break-word;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .progress_box {
          display: flex;
          align-items: center;
          gap: 10px;

          .progress_count {
            font-size: 13px;
            color: var(--gray);
          }
          .progress_full {
            width: 75%;
            height: 6px;
            border-radius: 10px;
            background: #2f353c;
            overflow: hidden;
            .green {
              background: #37e710 !important;
              width: 65% !important;
            }
            .blue {
              width: 80% !important;
              background: #7060ff !important;
            }
            .red {
              background: #ed5748 !important;
              width: 70% !important;
            }
            .progress {
              width: 80%;
              background: #7536b5;
              height: 100%;
            }
          }
        }
      }
    }

    .viewMoreButton {
      background: var(--light_black);
      color: white;
      height: 50px;

      font-size: 17px;
      font-weight: 600;
      font-size: 1.3rem;
      letter-spacing: 1.1px;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
    }
    .text_box {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .main_text {
        font-weight: 600;
        font-size: 2rem;
        letter-spacing: 1.1px;
      }
      .desc_text {
        // display:flex;
        // flex-wrap:wrap;
        .big_text {
          letter-spacing: 1px;
          font-size: 19px;
          font-weight: 700;
        }

        color: var(--gray);
        letter-spacing: 1px;
      }
    }
  }
`;
