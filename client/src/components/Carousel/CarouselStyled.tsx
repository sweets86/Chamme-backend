import styled from "styled-components";

const CarouselStyled = styled.div`
  width: 50%;
  height: 22em;
  margin-top: 3em;
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  .sliderDiv {
    display: flex;
    height: 75%;
    width: 100%;
  }

  .sliderDiv input {
    display: none;
  }

  .slider {
    width: 100%;
    display: flex;
    justify-content: center;
    transition-duration: 1s ease;
    opacity: 0;
  }

  .slider.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }

  img {
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .navigation-manual {
    padding-top: 20px;
    display: flex;
    justify-content: center;
  }

  .manual-btn {
    border: 2px solid #7a7979;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
    background-color: #cec9d6
  }

  .manual-btn:not(:last-child) {
    margin-right: 15px;
  }

  .manual-btn:hover {
    background: black;
  }

  @media screen and (max-width: 400px) {
    width: 75%;
    height: 15em;
    padding: 0.5em;
    background-color: white;
    border-radius: 10px;
  }
`;
export default CarouselStyled;
