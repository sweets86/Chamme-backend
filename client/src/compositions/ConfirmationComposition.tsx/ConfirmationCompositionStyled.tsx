import styled from "styled-components";

const ConfirmationCompositionStyled = styled.div`
  width: 85%;
  height: auto;
  margin-top: 10em;
  margin-bottom: 5em;

  h2 {
    margin: 0;
    margin-left: 15px;
    margin-bottom: 10px;
  }

  h3 {
    margin: 0;
    margin-bottom: 5px;
  }

  h4 {
    margin: 0;
    margin-bottom: 5px;
    margin-right: 7px;
  }

  .bottom-h2 {
    margin-left: 0;
    margin-bottom: 0.8em;
  }

  .price-h3 {
    padding-right: 1em;
  }

  .contain {
    box-shadow: 0 8px 6px -6px black;
    height: auto;
    padding: 1em;
    margin-bottom: 1em;
    flex-direction: column;
  }

  .top-container {
    width: 100%;
    height: auto;
  }

  .container {
    box-shadow: 0 8px 6px -12px black;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5em;
    padding-top: 0.5em;
  }

  .container-products {
    box-shadow: 0 8px 6px -12px black;
    width: 100%;
    height: auto;
    display: flex;
    padding-top: 10px;
  }

  .left-container {
    width: 50%;
    margin-right: 0.5em;
    display: flex;
  }

  .product {
    display: flex;
    flex-direction: column;
  }

  .extras {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 5em;
    margin-left: 5em;
  }

  .right-container {
    width: 50%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .pay-container {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }

  .contain-bottom {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 0.8em;
    margin-bottom: 3em;
    box-shadow: 0 8px 6px -6px black;
  }

  .information {
    margin-top: 5px;
    display: flex;
  }

  @media screen and (max-width: 840px) {
    .left-container {
      flex-wrap: wrap;
    }

    .extras {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 400px) {
    .left-container {
      flex-wrap: wrap;
    }

    .extras {
      margin-left: 0;
    }
  }
`;

export default ConfirmationCompositionStyled;
