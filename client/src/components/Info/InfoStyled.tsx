import styled from "styled-components";

const InfoStyled = styled.div`
  margin-right: 1em;
  padding: 0.5em;
  display: flex;

  h2 {
    padding-left: 1.9em;
  }

  li {
    list-style-type: none;
    margin-left: 0.4em;
    padding-top: 0.2em;
    margin-bottom: 3px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    display: flex;
    margin-right: 0;
    padding: 0;

    h2 {
      padding-left: 0;
    }

    ul {
      padding-left: 0;
    }

    li {
      margin: 0;
      margin-right: 0.5em;
      margin-bottom: 0.5em;
    }
  }
`;
export default InfoStyled;
