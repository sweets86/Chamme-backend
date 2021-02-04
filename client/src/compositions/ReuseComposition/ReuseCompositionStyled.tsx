import styled from "styled-components";

const ReuseCompositionStyled = styled.div`
  width: 85%;
  height: auto;
  margin-top: 5em;

  .contain {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #201e1e;
    box-shadow: 0 8px 6px -6px black;
    min-height: 80%;
    padding: 1em;
    margin-bottom: 3em;
  }
`;

export default ReuseCompositionStyled;
