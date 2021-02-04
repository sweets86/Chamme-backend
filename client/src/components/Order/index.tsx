import React from "react";
import OrderCard from "../OrderCard";
import OrderStyled from "./OrderStyled";
import { CartConsumer, ContextState } from "../../contexts/cartContext";
import PrivacyPolicyCheckbox from "../../components/PrivacyPolicyCheckbox";

export default function Order() {
  const handlePrivacy = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    if (checked === true) {
      console.log(checked);
    }
  };

  return (
    <CartConsumer>
      {(contextData: ContextState) => {
        return (
          <OrderStyled>
            <div className="orderNav">
              <h2>Dina Varor</h2>
            </div>
            {contextData.cartItems.map((cartItem, index) => {
              let product = cartItem.product;
              let quantity = cartItem.quantity;
              let key = cartItem.product.id;
              let category = cartItem.product.title;

              return (
                <OrderCard
                  product={product}
                  key={key}
                  index={index}
                  quantity={quantity}
                  category={category}
                />
              );
            })}
            {contextData.cartItems.length ? (
              <div className="orderTot">
                <div className="totalt">
                  <h2>Summa</h2>
                  <h2>{contextData.totalPrice()} kr</h2>
                </div>
                <div className="tax">
                  <h3>varav moms 25%</h3>
                  <h3>{contextData.getVAT()} kr</h3>
                </div>
                <div className="frakt">
                  <h3>Frakt</h3>
                  <h3>{contextData.getDeliveryOption()} kr</h3>
                </div>
                <div className="totalt">
                  <h2>Totalt</h2>
                  <h2>
                    {contextData.totalPrice() + contextData.getDeliveryOption()}{" "}
                    kr
                  </h2>
                </div>
                <PrivacyPolicyCheckbox
                  handlePrivacy={(e) => handlePrivacy(e)}
                />
              </div>
            ) : null}
          </OrderStyled>
        );
      }}
    </CartConsumer>
  );
}
