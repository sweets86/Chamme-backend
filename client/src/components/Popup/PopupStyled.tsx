import styled from "styled-components";

const PopupStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);

  .pop-inner {
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    /* bottom: 25%; */
    margin: auto;
    background: black;
    color: white;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
  }

  .pop-btn {
    width: 5em;
    height: 2em;
    cursor: pointer;
    background-color: white;
    border-radius: 5px;
  }

  @media screen and (max-width: 840px) {
    .pop-inner {
      flex-wrap: wrap;
      font-size: smaller;
    }
  }
  @media screen and (max-width: 400px) {
    .pop-inner {
      flex-wrap: wrap;
      font-size: smaller;
    }
  }
`;
export default PopupStyled;
