import styled from "styled-components";

const HeroWrapper = styled.div`
  height: 80vh;
  .cv_button {
    padding: 0 1rem;
  }

  .hero_section {
    display: flex;
    flex-direction: row;
  }

  .hero_section_left {
    flex: 7;
  }
  .hero_section_right {
    flex: 5;
    gap: 1rem !important;
  }
  @media (max-width: 680px) {
    .hero_section {
      flex-direction: column;
    }
  }
`;

export default HeroWrapper;
