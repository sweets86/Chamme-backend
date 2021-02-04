import React, { useEffect, useState } from "react";
import CarouselStyled from "./CarouselStyled";
import { SliderData } from "./../../data/sliderImages";

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  /* const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }; */

  useEffect(() => {
    const interval = setInterval(function () {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, length]);

  return (
    <CarouselStyled>
      <div className="sliderDiv">
        <input type="radio" name="radio-btn" id="radio1" onClick={nextSlide} />
        <input type="radio" name="radio-btn" id="radio2" onClick={nextSlide} />
        <input type="radio" name="radio-btn" id="radio3" onClick={nextSlide} />
        <input type="radio" name="radio-btn" id="radio4" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slider active" : "slider"}
              key={index}
            >
              {index === current && (
                <img
                  src={require("./../../assets/Slider/" + slide.image).default}
                  alt="slide img"
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
        <label htmlFor="radio4" className="manual-btn"></label>
      </div>
    </CarouselStyled>
  );
}
