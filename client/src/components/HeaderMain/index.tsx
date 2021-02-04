import React from "react";
import { Link } from "react-router-dom";
import HeaderMainStyled from "./HeaderMainStyled";
import Burger from "./../Burger";

export default function HeaderMain() {
  return (
    <HeaderMainStyled>
      <Link to={"/"}>
        <h1 className="titleLink">Chameleone</h1>
      </Link>
      <Burger open />
    </HeaderMainStyled>
  );
}
