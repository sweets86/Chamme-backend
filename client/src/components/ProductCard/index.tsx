import React, { useState, useContext } from "react";
import ProductCardStyled from "./ProductCardStyled";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import Modal from "../Modal";

interface Props {
  product: any;
  category: string;
  index: number;
}

function ProductCard(props: Props) {
  const category = props.category;
  const context = useContext(CartContext);

  const [openModal, setOpenModal] = useState(false);
  const [extrasColor, setExtrasColor] = useState("");
  const [extrasSize, setExtrasSize] = useState("");

  const checkExtras = (product: string, index: number) => {
    if (product === "T-shirts") {
      setOpenModal(true);
    } else {
      setOpenModal(false);
      context.addProductToCart(props.product, extrasColor, extrasSize, props.product.id);
    }
  };

  const closeModal = (extrasColor: string, extrasSize: string, index: number) => {
    if (extrasColor === "" || extrasSize === "") {
      alert("Välj både en färg och en storlek, tack.");
    } else {
      console.log(extrasColor, extrasSize);
      setOpenModal(false);
      setExtrasColor(extrasColor)
      setExtrasSize(extrasSize)
      context.addProductToCart(props.product, extrasColor, extrasSize, props.product.id);
    }
  };

  const exitModal = () => {
    setOpenModal(false);
  };

  return (
    <ProductCardStyled>
      <Link
        to={{
          pathname: "/product/" + props.product.id,
          state: category,
        }}
      >
        <div className="imgDiv">
          <img
            src={
              require("./../../assets/Products/" + props.product.img).default
            }
            alt="product img"
          />
        </div>
      </Link>
      <div className="contentDiv">
        <h3>{props.product.name}</h3>
        <div className="price-and-btn-div">
          <h3>{props.product.price},00 kr</h3>
          <button onClick={() => checkExtras(props.product.title, props.index)}>Köp</button>
        </div>
      </div>
      {openModal ? (
        <Modal
          closeModal={(extrasColor, extrasSize) =>
            closeModal(extrasColor, extrasSize, props.index)
          }
          exitModal={exitModal}
          color={props.product.color}
          size={props.product.size}
        />
      ) : null}
    </ProductCardStyled>
  );
}

export default ProductCard;
