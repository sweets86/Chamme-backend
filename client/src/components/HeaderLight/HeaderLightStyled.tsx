import styled from "styled-components";

const HeaderLightStyled = styled.div`
  height: 5em;
  width: 100%;
  position: fixed;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 6px -6px black;

  .titleLink {
    display: inline-block;
    margin: 8px;
    color: black;
    margin-left: 2.1em;
  }

  .navigation {
    display: flex;
  }

  h4 {
    padding-left: 10px;
    display: inline-block;
    color: black;
  }

  .counter {
    margin: 0;
    margin-right: 5em;
    display: inline-block;
    color: white;
    background-color: black;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 400px) {
    .titleLink {
      margin-left: 0.9em;
    }

    .counter {
      margin-right: 2em;
    }

    .navigation {
      flex-direction: column;
    }

    h4 {
      margin: 0;
      margin-left: 1em;
    }
  }
`;
export default HeaderLightStyled;
