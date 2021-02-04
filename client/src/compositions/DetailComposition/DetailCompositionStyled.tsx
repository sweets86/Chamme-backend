import styled from "styled-components";

const DetailCompositionStyled = styled.div`
  width: 85%;
  height: auto;
  margin-top: 10em;
  margin-bottom: 5em;
  background-color: white;

  .contain {
    display: flex;
    box-shadow: 0 8px 6px -6px black;
    min-height: 80%;
    padding: 3em;
  }

  .imgDiv {
    width: 50%;
    height: 50%;
    background-color: white;
    margin-right: 3em;
  }

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .contentDiv {
    width: 50%;
    height: auto;
    background-color: white;
    padding-left: 2em;
    margin-left: 3em;
    margin-bottom: 4em;
  }

  h4 {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 5px;
  }

  .buyBtn {
    width: 100%;
    height: 3em;
    border: none;
    border-radius: 3px;
    margin-bottom: 3em;
    background-color: #201e1e;
    color: white;
    cursor: pointer;
    transition: transform 250ms;
  }

  .buyBtn:hover {
    transform: translateY(-3px);
  }

  h5 {
    margin: 0;
    padding-top: 2px;
    padding-bottom: 2px;
  }

  .description {
    margin-top: 2.5em;
  }

  @media screen and (max-width: 400px) {
    .contain {
      flex-wrap: wrap;
    }

    .imgDiv {
      width: 100%;
      margin-right: 0;
    }

    .contentDiv {
      width: 100%;
      margin-left: 0;
      padding-left: 0.5em;
    }
  }
`;

export default DetailCompositionStyled;
