import React from "react";
import GalleryCompositionStyled from "./GalleryCompositionStyled";
import Img1 from '../../assets/Gallery/Lalala.png'
import Img2 from '../../assets/Gallery/Christmas.png'
import Img3 from '../../assets/Gallery/Summer.png'
import Img4 from '../../assets/Gallery/harley quinn.png'
import Img5 from '../../assets/Gallery/Lucky.png'
import Img6 from '../../assets/Gallery/Glamour.png'

export default function GalleryComposition() {
  return (
    <GalleryCompositionStyled>
      <h1>Gallery</h1>
      <div className="contain grid">
        <div className="gridDiv"><img src={Img1} alt="no pic"/></div>
        <div className="gridDiv"><img src={Img2} alt="no pic"/></div>
        <div className="gridDiv"><img src={Img3} alt="no pic"/></div>
        <div className="gridDiv"><img src={Img4} alt="no pic"/></div>
        <div className="gridDiv"><img src={Img5} alt="no pic"/></div>
        <div className="gridDiv"><img src={Img6} alt="no pic"/></div>
      </div>
    </GalleryCompositionStyled>
  );
}
