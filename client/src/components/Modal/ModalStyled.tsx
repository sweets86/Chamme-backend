import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);

  .modal-inner {
    position: absolute;
    left: 40%;
    right: 40%;
    top: 25%;
    bottom: 20%;
    margin: auto;
    background-color: black;
    color: white;
    padding: 20px;
    border-radius: 5px;
  }

  span {
    display: flex;
    justify-content: space-between;
  }

  .exitBtnContainer {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .extBtnDiv {
    height: 25px;
    width: 2px;
    margin-left: 12px;
    background-color: white;
    transform: rotate(45deg);
    z-index: 1;
  }

  .exitBtn {
    height: 25px;
    width: 2px;
    background-color: white;
    transform: rotate(90deg);
    z-index: 2;
  }

  .done-button {
    margin-top: 0.5em;
    background-color: white;
    border-radius: 5px;
  }

  @media screen and (max-width: 1100px) {
    .modal-inner {
      width: fit-content;
    }

    span {
      display: flex;
      align-items: center;
      margin-bottom: 1.5em;
    }
  }

  @media screen and (max-width: 840px) {
    .modal-inner {
      width: fit-content;
    }

    span {
      display: flex;
      align-items: center;
      margin-bottom: 0.5em;
    }
  }

  @media screen and (max-width: 400px) {
    .modal-inner {
      width: fit-content;
      bottom: 35%;
      right: 25%;
      left: 25%;
    }

    span {
      display: flex;
      align-items: center;
      margin-bottom: 0.5em;
    }

    .done-button {
      width: 5em;
      height: 2em;
    }
  }
`;
export default ModalStyled;
