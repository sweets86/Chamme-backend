import styled from "styled-components";

const PaymentStyled = styled.div`
  width: 100%;
  height: auto;
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 1em;
  box-shadow: 0 0px 15px -8px black;

  .double {
    display: flex;
    flex-direction: row;
  }

  p {
    margin: 0;
    margin-right: 10px;
  }

  .delivery-span {
    display: flex;
  }

  .delivery-text {
    font-weight: bold;
    margin-right: 10px;
  }

  .total-text {
    font-weight: bold;
    margin-right: 8px;
  }

  .payment-options-container {
    width: 100%;
    height: auto;
    margin-top: 5px;
  }

  .payment-option {
    width: 100%;
    height: 3em;
    background-color: white;
    box-shadow: 0 -8px 6px -10px black;
    display: flex;
    justify-content: space-between;
    padding-top: 2px;
    margin-top: 10px;
  }

  label {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    box-shadow: 0 0px 15px -8px black;
  }

  input[type="radio"] {
    opacity: 0;
    width: 18%;
    height: 3em;
    position: absolute;
    cursor: pointer;
  }

  label:active {
    box-shadow: 0 0px 10px -4px black;
    color: gray;
  }

  .finish-btn-div {
    width: 100%;
    height: 5em;
    padding-top: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .finish-btn {
    width: 10em;
    height: 3em;
    background-color: white;
    border: none;
    box-shadow: 0 0px 15px -8px black;
    cursor: pointer;
    margin-top: 1em;
  }
`;

export default PaymentStyled;
