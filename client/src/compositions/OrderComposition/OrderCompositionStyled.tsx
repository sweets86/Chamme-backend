import styled from "styled-components";

const OrderCompositionStyled = styled.div`
  width: 85%;
  height: auto;
  margin-top: 10em;
  background-color: white;
  margin-bottom: 5em;

  h1 {
    padding-left: 0.7em;
  }

  .contain {
    display: flex;
    justify-content: space-between;
    min-height: 80%;
    padding: 1em;
    padding-bottom: 0;
  }

  .orderInfoDiv {
    margin-left: 5em;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 840px) {
    .contain {
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 400px) {
    margin-top: 7em;

    .contain {
      flex-wrap: wrap;
    }
  }
  
`;

export default OrderCompositionStyled;
