import React, { useContext, useEffect, useState } from "react";
import DetailCompositionStyled from "./DetailCompositionStyled";
import { RouteComponentProps, useLocation, withRouter } from "react-router-dom";
import { Product, Products } from "../../data/products";
import { CartContext } from "../../contexts/cartContext";
import Detail from "../../components/Detail";
import Popup from "../../components/Popup";

interface Params {
  id: string;
}

interface Props extends RouteComponentProps<Params> {}

const products: Product[] = Products;

function DetailComposition(props: Props) {
  const id = props.match.params.id;
  const numberId = parseFloat(id);
  const location = useLocation();
  const state = location.state as string;
  const context = useContext(CartContext);

  const [detailComponent, setDetailComponent] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [extrasColor, setExtrasColor] = useState("");
  const [extrasSize, setExtrasSize] = useState("");

  useEffect(() => {
    if (state === "T-shirts") {
      setDetailComponent(true);
    } else setDetailComponent(false);
    return;
  }, [state]);

  const passingValues = (color: string, size: string) => {
    console.log(color, size);
    setExtrasColor(color);
    setExtrasSize(size);
  };

  const checkExtras = (product: any, index: number) => {
    if (state === "T-shirts" && extrasColor === "" && extrasSize === "") {
      setOpenPopup(true);
    } else {
      console.log(extrasColor, extrasSize);
      context.addProductToCart(product, extrasColor, extrasSize, numberId);
      setExtrasColor("");
      setExtrasSize("");
    }
  };

  const closePopup = () => {
    setOpenPopup(false);
  };

  return (
    <DetailCompositionStyled>
      {products
        .filter((product) => product.id === numberId)
        .map((product, index) => {
          return (
            <div className="contain" key={product.id}>
              <div className="imgDiv">
                <img
                  src={require("../../assets/Products/" + product.img).default}
                  alt="no avaible"
                />
              </div>
              <div className="contentDiv">
                <h4>{product.brand}</h4>
                <h2>{product.name}</h2>
                <h2>{product.price} kr</h2>
                <button className="buyBtn" onClick={() => checkExtras(product, index)}>
                  Köp
                </button>
                <h5>{product.status}</h5>
                <h5>Leveransstatus {product.deliver}</h5>
                <p className="description">{product.description}</p>
                <p>{product.content}</p>
                <p>{product.extra}</p>
                {detailComponent ? (
                  <Detail
                    size={product.size}
                    color={product.color}
                    passingValues={(color, size) => passingValues(color, size)}
                  />
                ) : null}
              </div>
            </div>
          );
        })}
      {openPopup ? <Popup closePopup={closePopup} /> : null}
    </DetailCompositionStyled>
  );
}

export default withRouter(DetailComposition);
