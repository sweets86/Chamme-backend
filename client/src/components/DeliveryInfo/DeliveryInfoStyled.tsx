import styled from "styled-components";

const DeliveryInfoStyled = styled.div`
  width: 100%;
  height: auto;
  padding: 0.5em;
  margin-top: 2em;
  padding-bottom: 1em;

  .container {
    width: 100%;
    height: 12em;
    margin-top: 10px;
  }

  .contactContainer {
    width: 100%;
    height: 8.5em;
    margin-top: 10px;
  }

  .names {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 2px;
  }

  .address {
    width: 100%;
    height: auto;
    padding-top: 2px;
  }

  .position {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
  }

  label {
    display: flex;
    flex-direction: column;
    box-shadow: 0 0px 15px -8px black;
  }

  .smallLabel {
    width: 50%;
  }

  input {
    height: 3em;
    margin-bottom: 5px;
    margin-top: 5px;
    border: none;
    padding-left: 5px;
  }

  .save-div {
    width: 100%;
    height: 5em;
    padding-top: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-save {
    width: 10em;
    height: 3em;
    background-color: white;
    border: none;
    box-shadow: 0 0px 15px -8px black;
    cursor: pointer;
    margin-top: 1em;
  }

  .deliverContainer {
    width: 100%;
    height: auto;
    margin-top: 10px;
  }

  .deliver-option {
    width: 100%;
    height: 5em;
    box-shadow: 0 -8px 6px -10px black;
    display: flex;
    justify-content: space-between;
    padding-top: 2px;
  }

  .largeLabel {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .textDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  input[type="radio"] {
    opacity: 0;
    width: 18%;
    height: 5em;
    position: absolute;
    cursor: pointer;
  }

  .largeLabel:active {
    box-shadow: 0 0px 10px -4px black;
    color: gray;
  }

  @media screen and (max-width: 1600px) {
    input[type="radio"] {
      width: 30%;
    }

    .largeLabel {
      padding: 2em;
    }
  }
  @media screen and (max-width: 1200px) {
    input[type="radio"] {
      width: 30%;
    }

    .largeLabel {
      padding: 0;
    }

    p {
      font-size: small;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`;
export default DeliveryInfoStyled;
