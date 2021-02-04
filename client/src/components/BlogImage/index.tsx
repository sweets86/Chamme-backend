import React from "react";
import BlogImageStyled from "./BlogImageStyled";
import Img1 from "../../assets/Blog/beach.jpg";
import Img2 from "../../assets/Blog/tree.jpg";
import Img3 from "../../assets/Blog/sunrise.jpg";
import Img4 from "../../assets/Blog/waterfall.jpg";

export default function BlogImage() {
  return (
    <BlogImageStyled>
      <div className="contain grid">
        <div>
          <img src={Img1} alt="no pic" />
        </div>
        <div>
          <img src={Img2} alt="no pic" />
        </div>
        <div>
          <img src={Img3} alt="no pic" />
        </div>
        <div>
          <img src={Img4} alt="no pic" />
        </div>
      </div>
    </BlogImageStyled>
  );
}