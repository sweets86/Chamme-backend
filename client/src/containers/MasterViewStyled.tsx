import styled from "styled-components";
import Background from "../assets/background.jpg";

const MasterViewStyled = styled.div`
  background-image: url(${Background});
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  .cardContainer {
    display: flex;
    justify-content: space-around;
    width: 100%;
    position: absolute;
    bottom: 6em;
  }

  .card {
    width: 10em;
    height: 7em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gainsboro;
  }

  h3 {
    margin: 0;
    display: inline-block;
    color: black;
  }

  @media screen and (max-width: 400px) {
      .carousel {
        width: 75%;
        height: 10em;
      }

      .cardContainer {
          flex-wrap: wrap;
          bottom: 3em;
      }

      .card {
          margin-top: 1em;
      }
  }
`;
export default MasterViewStyled;
