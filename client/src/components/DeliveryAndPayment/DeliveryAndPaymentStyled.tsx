import styled from "styled-components";

const DeliveryAndPaymentStyled = styled.div`
  width: 50%;
  padding: 0.5em;
  box-shadow: 0 8px 6px -6px black;
  margin-left: 1em;

  .title {
    width: 100%;
    height: 3em;
    padding: 0.5em;
    color: white;
    background-color: #201e1e;
    box-shadow: 0 8px 6px -6px black;
    display: flex;
    align-items: center;
  }

  h2 {
    margin: 0;
  }

  @media screen and (max-width: 840px) {
    width: 100%;
    margin-bottom: 2em;
    margin-right: 0;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    margin-bottom: 2em;
    margin-left: 0;
  }
`;

export default DeliveryAndPaymentStyled;
