import styled from "styled-components";

const GalleryCompositionStyled = styled.div`
  width: 85%;
  height: auto;
  margin-top: 10em;
  margin-bottom: 5em;
  background-color: white;

  h1 {
    margin-left: 0.9em;
    margin-bottom: 0;
  }

  .contain {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 8px 6px -6px black;
    min-height: 80%;
    padding: 2em;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 3rem;
  }

  .gridDiv {
    background-color: white;
    width: 100%;
    height: 22em;
    margin-right: 2em;
    margin-bottom: 2em;
    padding: 1em;
    box-shadow: 0 -1px 10px -1px black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    object-fit: contain;
    width: 12em;
  }

  @media screen and (max-width: 400px) {
    .grid {
      grid-gap: 1rem;
    }

    .contain {
      padding: 0;
      background-color: #f0eded;
    }
  }
`;

export default GalleryCompositionStyled;
