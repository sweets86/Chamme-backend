import styled from "styled-components";

const DetailStyled = styled.div`
  margin-top: 3em;

  h3 {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  .gridColor {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(1, 50px);
    grid-gap: 20px 20px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, 50px);
    grid-gap: 20px 20px;
  }

  .sizeRadio {
    width: auto;
    height: 3em;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    transition: transform 250ms;
  }

  .sizeRadio:hover {
    transform: translateY(-3px);
  }

  input[type="Radio"] {
    opacity: 0;
    width: 10em;
    height: 3em;
    position: absolute;
    cursor: pointer;
  }

  label {
    display: inline-block;
    background-color: white;
    color: black;
    padding: 2px 5px;
    font-size: 16px;
    border-radius: 3px;
    margin: 3px;
  }

  input[type="Radio"]:checked + label {
    background-color: grey;
  }

  @media screen and (max-width: 1200px) {
    margin-top: 0;

    input[type="Radio"] {
      width: 8em;
    }
  }
  @media screen and (max-width: 1100px) {
    input[type="Radio"] {
      width: 7em;
    }
  }
  @media screen and (max-width: 920px) {
    input[type="Radio"] {
      width: 5em;
    }
  }

  @media screen and (max-width: 840px) {
    margin-top: 0;

    input[type="Radio"] {
      width: 5em;
    }

    .sizeRadio {
      height: 2em;
    }
  }
  @media screen and (max-width: 400px) {
    margin-top: 0;

    input[type="Radio"] {
      width: 5em;
    }

    .sizeRadio {
      height: 2em;
    }
  }
`;
export default DetailStyled;
