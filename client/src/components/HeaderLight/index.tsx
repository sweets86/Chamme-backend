import React from "react";
import { Link } from "react-router-dom";
import HeaderLightStyled from "./HeaderLightStyled";
import { CartConsumer, ContextState } from "../../contexts/cartContext";

export default function HeaderLight() {
  return (
    <CartConsumer>
      {(contextData: ContextState) => {
        return (
          <HeaderLightStyled>
            <div className="navigation">
              <Link to={"/"}>
                <h1 className="titleLink">Chameleone</h1>
              </Link>
              <Link to="/products">
                <h4>{"<<"} Products</h4>
              </Link>
            </div>
            <Link to={"/order"}>
              {contextData.cartItems.length ? (
                <h3 className="counter">{contextData.countCart()}</h3>
              ) : null}
            </Link>
          </HeaderLightStyled>
        );
      }}
    </CartConsumer>
  );
}
