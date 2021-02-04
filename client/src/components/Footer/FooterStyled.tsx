import styled from "styled-components";

const FooterStyled = styled.div`
  height: 6em;
  width: 100%;
  position: absolute;
  background-color: black;
  top: 100%;
  display: flex;
  justify-content: space-between;

  .pageLinks {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 5em;
  }

  .iconLinks {
    display: flex;
    margin-right: 5em;
    width: 15em;
    align-items: center;
    justify-content: space-between;
  }

  a.iconLinks {
      margin-right: 1em;
      transition: transform 250ms;
      display: inline-block;
  }

  a.iconLinks:hover {
      transform: translateY(-2px);
  }

  .facebook {
      color: #4968ad;
  }

  .youtube {
      color: #eb3223;
  }

  .instagram {
      color: white;
  }

  h4 {
    display: inline-block;
    color: white;
    margin: 0;
  }

  @media screen and (max-width: 400px) {
    .pageLinks {
      margin-left: 2em; 
    }

    .iconLinks {
        margin-right: 0;
        width: 10em;
    }

    .fa-2x {
        font-size: 1.5em;
    }

    .a {
        margin: 0;
    }
  }
`;

export default FooterStyled;
