import styled from "styled-components";

const NewsCompositionStyled = styled.div`
  width: 85%;
  height: auto;
  margin-top: 10em;
  margin-bottom: 5em;
  background-color: white;

  h1 {
    margin-left: 1em;
  }

  h3 {
    margin-left: 1.8em;
  }

  .contain {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 8px 6px -6px black;
    min-height: 80%;
    padding: 2em;
  }

  .videoDiv {
    margin-bottom: 1em;
  }

  .description {
    padding: 0.5em;
    background-color: white;
    box-shadow: 0 8px 6px -6px white;
  }
`;

export default NewsCompositionStyled;
