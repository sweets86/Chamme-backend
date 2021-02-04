import React from "react";
import NewsCompositionStyled from "./NewsCompositionStyled";
import Video from "../../assets/Video/Pexels.mp4";
import ReactPlayer from "react-player";

export default function ReuseComposition() {
  const getCurrentDate = () => {
    let space = " ";
    let separator = "-";
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${
      date < 10 ? `0${date}` : `${date}${space}`
    }${space}${separator}${space}${
      month < 10 ? `0${month}` : `${month}${space}`
    }${separator}${space}${year}`;
  };

  return (
    <NewsCompositionStyled>
      <h1>News</h1>
      <h3>{getCurrentDate()}</h3>
      <div className="contain">
        <div className="videoDiv">
          <ReactPlayer url={Video} width="100%" height="100%" controls={true} />
        </div>
        <div className="description">
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </NewsCompositionStyled>
  );
}
