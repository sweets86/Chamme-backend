import { createContext } from "react";
import { ProviderState } from "../providers/cartProvider";
import { Product } from "./../data/products";

export interface ContextState extends ProviderState {
  addProductToCart: (
    product: Product,
    extrasColor: string,
    extrasSize: string,
    productId: number
  ) => void;
  countCart: () => number;
  deleteFromCart: (product: Product, index: number) => void;
  deleteExtrasFromExtras: (
    extraIndex: number,
    extrasColor: string,
    extrasSize: string,
    productId: number,
    product: Product
  ) => void;
  totalPrice: () => number;
  getVAT: () => number;
  deliveryOption: (value: string) => void;
  getDeliveryOption: () => number;
  handleOrderInformation: (order: []) => void;
}

export const CartContext = createContext<ContextState>({
  cartItems: [],
  extras: [],
  option: [],
  orderInfo: [],
  addProductToCart: (product: Product) => {
    console.log(
      "Something went wrong with adding " + product.name + " to the cart..."
    );
  },
  countCart: () => 0,
  deleteFromCart: (product: Product) => {
    console.log(
      "Something went wrong while deleting" + product.name + "to cart."
    );
  },
  deleteExtrasFromExtras: () => {},
  totalPrice: () => 0,
  getVAT: () => 0,
  deliveryOption: () => "",
  getDeliveryOption: () => 0,
  handleOrderInformation: () => []
});

export const CartConsumer = CartContext.Consumer;
