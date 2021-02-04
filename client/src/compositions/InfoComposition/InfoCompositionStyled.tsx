import styled from "styled-components";

const InfoCompositionStyled = styled.div`
  width: 85%;
  height: auto;
  top: 17%;
  background-color: white;
  margin-bottom: 5em;
  box-shadow: 0 8px 6px -6px black;

  .contain {
    display: flex;
    box-shadow: 0 -8px 6px -6px black;
    min-height: 80%;
    padding: 1em;
    margin-bottom: 5em;
    justify-content: space-around;
  }

  @media screen and (max-width: 400px) {
    .contain {
      flex-wrap: wrap;
    }
  }
`;

export default InfoCompositionStyled;
