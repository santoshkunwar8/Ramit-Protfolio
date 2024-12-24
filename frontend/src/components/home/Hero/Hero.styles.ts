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

  .about_section {
    display: none;
  }
  .about_section_large {
    display:none;
     margin-top: -250px;
      justify-content: center;
      align-items: center;
      // background:red;
  }
     @media (max-width: 1800px) {
    .about_section {
      display: none;
    }

    .about_section_large {
      display: block;
      // margin-right: 200px;
      margin-top: -250px;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 1600px) {
    .about_section {
      display: none;
    }

    .about_section_large {
      display: block;
      // margin-right: 200px;
      margin-top: -140px;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 1500px) {
    .about_section {
      display: none;
    }

    .about_section_large {
      display: block;
      // margin-right: 200px;
      margin-top:-120px;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 1200px) {
    .about_section {
      display: none;
    }

    .about_section_large {
      display: block;
      // margin-right: 200px;
      margin-top: -80px;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 1023px) {
    .about_section {
      display: block;
    }

    .about_section_large {
      display: none;
      //  margin-top: 40px;
      //  margin-bottom: 800px;
    }
  }

  @media (max-width: 680px) {
    .hero_section {
      flex-direction: column;
    }
    .about_section {
      display: block;
    }

    .about_section_large {
      display: none;
    }
  }
`;

export default HeroWrapper;
