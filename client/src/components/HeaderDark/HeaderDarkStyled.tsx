import styled from "styled-components";

const HeaderDarkStyled = styled.div`
  height: 5em;
  width: 100%;
  position: fixed;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .titleLink {
    display: inline-block;
    margin: 8px;
    color: white;
    margin-left: 2.1em;
  }

  a {
      text-decoration: none;
  }

  .counter {
    margin: 0;
    margin-right: 5em;
    display: inline-block;
    color: black;
    background-color: white;
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
  }
`;

export default HeaderDarkStyled;
