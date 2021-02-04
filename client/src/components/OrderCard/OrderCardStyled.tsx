import styled from "styled-components";

const OrderCardStyled = styled.div`
  width: 100%;
  height: auto;
  padding: 1em;
  box-shadow: 0 8px 6px -6px black;
  display: flex;
  margin-top: 1em;

  .imgDiv {
    width: 25%;
    height: auto;
    margin-right: 0.5em;
    display: flex;
    justify-content: center;
  }

  img {
    object-fit: cover;
    width: 100%;
  }

  .contentDiv {
    width: 75%;
    padding-top: 0.5em;
  }

  .topDiv {
    display: flex;
    justify-content: space-between;
  }

  .deleteDiv {
    width: 25px;
    height: 20px;
    cursor: pointer;
  }

  .deleteBtnDiv {
    height: 20px;
    width: 2px;
    margin-left: 12px;
    background-color: black;
    transform: rotate(45deg);
    z-index: 1;
  }

  .deleteBtn {
    height: 20px;
    width: 2px;
    background-color: black;
    transform: rotate(90deg);
    z-index: 2;
  }

  .bottomDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
  }

  .if-t-shirts {
    width: 5em;
    display: flex;
    justify-content: space-between;
  }

  .price-div {
    width: 5em;
    display: flex;
    justify-content: space-around;
  }

  .quantityDiv {
    display: flex;
    justify-content: space-between;
    width: 3em;
    font-weight: bold;
  }

  .minus {
    font-family: cursive;
    margin-top: 2px;
    cursor: pointer;
  }

  .plus {
    font-family: cursive;
    font-size: large;
    cursor: pointer;
  }

  .quantity {
    margin-top: 5px;
  }

  @media screen and (max-width: 840px) {
    padding: 0;

    .imgDiv {
      width: 45%;
    }

    .contentDiv {
      width: 50%;
    }

    .if-t-shirts {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 400px) {
    padding: 0;

    .imgDiv {
      width: 45%;
      margin-top: 1em;
      margin-bottom: 1em;
    }

    .contentDiv {
      width: 50%;
      margin-top: 1em;
      margin-bottom: 1em;
    }

    .if-t-shirts {
      display: flex;
      flex-direction: column;
    }
  }
`;
export default OrderCardStyled;
