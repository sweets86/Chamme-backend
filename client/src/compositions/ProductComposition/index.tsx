import React from "react";
import ProductCard from "../../components/ProductCard";
import ProductCompositionStyled from "./ProductCompositionStyled";
import { Products } from "./../../data/products";

interface Props {
  category: string;
}

export default function ProductComposition(props: Props) {
  return (
    <ProductCompositionStyled>
      <h1>{props.category}</h1>
      <div className="contain">
        {Products.filter((product) => product.title === props.category).map(
          (product, index) => {
            return <ProductCard product={product} key={index} index={index}  category={props.category}/>;
          }
        )}
      </div>
      <div id="fragrances"></div>
    </ProductCompositionStyled>
  );
}
