import React, { useContext, useEffect, useState } from "react";
import OrderCardStyled from "./OrderCardStyled";
import { CartContext } from "../../contexts/cartContext";

interface Props {
  product: any;
  category: any;
  index: number;
  quantity: number;
}

export default function OrderCard(props: Props) {
  const context = useContext(CartContext);

  const [listEveryProductId, setListEveryProductId] = useState(false);
  const [quantityHandler, setQuantityHandler] = useState(props.quantity);
  const [extrasColor, setExtrasColor] = useState("");
  const [extrasSize, setExtrasSize] = useState("");
  const [extraIndex, setExtraIndex] = useState(0);

  useEffect(() => {
    let findExtrasIndex: number = context.cartItems.findIndex((foundExtra) => {
      return props.product.id === foundExtra.product.id;
    });

    context.extras
      .filter((extra) => extra.productId === props.product.id)
      .map((extra: any, index: number) => {
        let color = extra.extrasColor;
        let size = extra.extrasSize;
        let extraIndex = findExtrasIndex;

        setExtrasColor(color);
        setExtrasSize(size);
        setExtraIndex(extraIndex);
        return extraIndex;
      });

    if (props.category !== "T-shirts") {
      setListEveryProductId(true);
    }
  }, [context.extras, context.cartItems, props.category, props.product.id]);

  function increaseCountHandler(product: any, index: number) {
    console.log(index);
    setQuantityHandler(function (quantity) {
      return quantity + 1;
    });
    return context.addProductToCart(
      product,
      extrasColor,
      extrasSize,
      product.id
    );
  }

  function decreaseCountHandler(product: any, index: number) {
    setQuantityHandler((quantity) => {
      if (quantity > 0) {
        return quantity - 1;
      }
      return 0;
    });
    context.deleteFromCart(product, index);
  }

  const deleteProduct = (product: any, index: number) => {
    decreaseCountHandler(product, index);
    console.log(context.cartItems);
  };

  const deleteTshirtProducts = (product: any, index: number) => {
    context.deleteExtrasFromExtras(
      extraIndex,
      extrasColor,
      extrasSize,
      product.id,
      product
    );

    context.extras.length
      ? context.deleteFromCart(product, extraIndex)
      : console.log(context.extras.length);
  };

  return (
    <>
      {listEveryProductId ? (
        <OrderCardStyled>
          <div className="imgDiv">
            {
              <img
                src={
                  require("../../assets/Products/" + props.product.img).default
                }
                alt="product img"
              />
            }
          </div>
          <div className="contentDiv">
            <div className="topDiv">
              {<h4>{props.product.brand}</h4>}
              <div className="deleteDiv">
                <div className="deleteBtnDiv">
                  <div
                    className="deleteBtn"
                    onClick={() => deleteProduct(props.product, props.index)}
                  ></div>
                </div>
              </div>
            </div>
            <div className="titleDiv">{<h3>{props.product.name}</h3>}</div>
            <div className="bottomDiv">
              <div className="quantityDiv">
                <span
                  className="minus"
                  onClick={() =>
                    decreaseCountHandler(props.product, props.index)
                  }
                >
                  -
                </span>
                <span className="quantity">{quantityHandler}</span>
                <span
                  className="plus"
                  onClick={() =>
                    increaseCountHandler(props.product, props.index)
                  }
                >
                  +
                </span>
              </div>
              <div className="price-div"><h4>{props.product.price},00 kr</h4></div>
            </div>
          </div>
        </OrderCardStyled>
      ) : (
        context.extras
          .filter((extra) => extra.productId === props.product.id)
          .map((extra, index) => {
            return (
              <OrderCardStyled key={index}>
                <div className="imgDiv">
                  {
                    <img
                      src={
                        require("../../assets/Products/" + props.product.img)
                          .default
                      }
                      alt="product img"
                    />
                  }
                </div>
                <div className="contentDiv">
                  <div className="topDiv">
                    {<h4>{props.product.brand}</h4>}
                    <div
                      className="deleteDiv"
                      onClick={() => deleteTshirtProducts(props.product, index)}
                    >
                      <div className="deleteBtnDiv">
                        <div className="deleteBtn"></div>
                      </div>
                    </div>
                  </div>
                  <div className="titleDiv">
                    {<h3>{props.product.name}</h3>}
                  </div>
                  <div className="bottomDiv">
                    <div className="if-t-shirts">
                      <h4>{extra.extrasColor}</h4>
                      <h4>{extra.extrasSize}</h4>
                    </div>
                    <div className="price-div"><h4>{props.product.price},00 kr</h4></div>
                  </div>
                </div>
              </OrderCardStyled>
            );
          })
      )}
    </>
  );
}
