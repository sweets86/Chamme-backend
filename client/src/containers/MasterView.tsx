import React from "react";
import MasterViewStyled from "./MasterViewStyled";
import Footer from "../components/Footer/index";
import { Link } from "react-router-dom";
import Carousel from "./../components/Carousel";

export default function MasterView() {
  return (
    <MasterViewStyled>
      <Carousel />
      <div className="cardContainer">
        <div className="card">
          <Link to={"/gallery"}>
            <h3>Gallery</h3>
          </Link>
        </div>
        <div className="card">
          <Link to={"/news"}>
            <h3>News</h3>
          </Link>
        </div>
        <div className="card">
          <Link to={"/blog"}>
            <h3>Blog</h3>
          </Link>
        </div>
      </div>
      <Footer />
    </MasterViewStyled>
  );
}
