import styled from "styled-components";

const ProductCardStyled = styled.div`
  background-color: white;
  height: 17.6em;
  width: 17.6em;
  margin-right: 2em;
  margin-bottom: 2em;
  padding: 1em;
  box-shadow: 0 -1px 10px -1px black;

  .imgDiv {
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
  }

  img {
    object-fit: cover;
    height: 100%;
  }

  .contentDiv {
    height: auto;
    width: auto;
  }

  .price-and-btn-div {
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    margin: 0;
    font-size: large;
  }

  button {
    width: 7em;
    height: 2.5em;
    border-radius: 3px;
    margin-top: 10px;
    margin-right: 5px;
  }

  @media screen and (max-width: 400px) {
    height: 9.1em;
    width: 9.1em;
    padding: 0.5em;
    margin-right: 0.8em;
    margin-bottom: 0.8em;

    .imgDiv {
        height: 60%;
    }

    .contentDiv {
        height: auto;
    }

    .price-and-btn-div {
      height: 1.5em;
    }

    button {
        width: 3em;
        height: 1.5em;
        margin-right: 12px;
        margin-top: 0;
    }

    h3 {
      font-size: small;
    }
  }
`;
export default ProductCardStyled;
