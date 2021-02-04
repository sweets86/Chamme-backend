import styled from "styled-components";

const PrivacyCompositionStyled = styled.div`
  width: 85%;
  height: 75%;
  margin-top: 5em;

  .contain {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #201e1e;
    box-shadow: 0 8px 6px -6px black;
    max-height: 87%;
    min-height: 80%;
    padding: 1em;
    margin-bottom: 3em;
  }

  .contentBox {
    width: 100%;
    height: auto;
    background-color: white;
    margin: 0.5em;
    padding: 0.5em;
  }

  h4 {
    display: inline-block;
    color: black;
    margin: 0;
    margin-right: 5em;
  }

  @media screen and (max-width: 400px) {

    .contain {
      flex-wrap: wrap;
    }

    .contentBox {
        height: auto;
    }
  }
`;

export default PrivacyCompositionStyled;
