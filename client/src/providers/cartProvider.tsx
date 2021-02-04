import React, { Component } from "react";
import { CartContext } from "../contexts/cartContext";
import { Product } from "../data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  count: number;
}

export interface Extras {
  extrasColor: string;
  extrasSize: string;
  productId: number;
}

export interface ProviderState {
  cartItems: CartItem[];
  extras: Extras[];
  option: string[];
  orderInfo: []
}

export class CartProvider extends Component<{}, ProviderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cartItems: [],
      extras: [],
      option: [],
      orderInfo: []
    };
  }

  addProductToCart = (
    product: Product,
    extrasColor: string,
    extrasSize: string,
    productId: number
  ) => {
    const clonedCart: CartItem[] = Object.assign([], this.state.cartItems);
    const clonedExtras: Extras[] = Object.assign([], this.state.extras);

    const findProductIndex: number = this.state.cartItems.findIndex(
      (foundProduct) => {
        return product.id === foundProduct.product.id;
      }
    );

    if (extrasColor !== "") {
      clonedExtras.push({ extrasColor, extrasSize, productId });
      this.setState({ extras: clonedExtras });
    } else {
      console.log(clonedExtras);
    }

    if (findProductIndex === -1) {
      clonedCart.push({
        product: product,
        quantity: 1,
        count: 1,
      });
    } else {
      clonedCart[findProductIndex].quantity++;
    }

    this.setState({ cartItems: clonedCart });
    console.log(clonedCart);
  };

  deleteFromCart = (product: Product, index: number) => {
    const clonedCart: CartItem[] = Object.assign([], this.state.cartItems);

    const findProductIndex: number = this.state.cartItems.findIndex(
      (foundProduct) => {
        return product.id === foundProduct.product.id;
      }
    );

    console.log(findProductIndex);

    if (findProductIndex === -1 || clonedCart[findProductIndex].quantity <= 1) {
      // annars tänkte jag testa ifall man kan kolla här om extras array length?
      clonedCart.splice(index, 1, {
        product: product,
        quantity: -1,
        count: -1,
      });
      clonedCart.splice(index, 1);
      console.log(index);
    } else {
      clonedCart[findProductIndex].quantity--;
    }

    this.setState({ cartItems: clonedCart }, () => {
      console.log(this.state);
    });

    console.log(index);
  };

  deleteExtrasFromExtras = (
    extraIndex: number,
    extrasColor: string,
    extrasSize: string,
    productId: number,
    product: Product
  ) => {
    const clonedExtras: Extras[] = Object.assign([], this.state.extras);

    const findExtrasIndex: number = this.state.cartItems.findIndex(
      (foundExtra) => {
        return product.id === foundExtra.product.id;
      }
    );

    console.log(findExtrasIndex, extraIndex);

    if (findExtrasIndex === extraIndex) {
      clonedExtras.splice(extraIndex, 1, {
        extrasColor: extrasColor,
        extrasSize: extrasSize,
        productId: productId,
      });
      clonedExtras.splice(extraIndex, 1);
    } else {
      console.log(productId, product.id);
    }
    this.setState({ extras: clonedExtras }, () => {
      console.log(this.state);
    });
  };

  countCart = () => {
    let totQuantity: number = 0;
    this.state.cartItems.map((cartItem) => {
      return (totQuantity += cartItem.quantity);
    });

    return totQuantity;
  };

  totalPrice = () => {
    let totPrice: number = 0;
    this.state.cartItems.map((cartItem) => {
      return (totPrice += cartItem.quantity * cartItem.product.price);
    });
    return totPrice;
  };

  getVAT = () => {
    let productVAT: number = 0;
    this.state.cartItems.map((VAT) => {
      return (productVAT = productVAT + VAT.product.price * 0.2 * VAT.quantity);
    });
    return Math.round(productVAT * 100 + Number.EPSILON) / 100;
  };

  deliveryOption = (value: string) => {
    const clonedOption = this.state.option;

    if (!clonedOption.includes(value)) {
      clonedOption.splice(0, 1);
      clonedOption.push(value);
    }

    this.setState({ option: clonedOption}, () => {
      console.log(this.state.option);
    });

    return value;
  };

  getDeliveryOption = () => {
    let option: number = 0;
    this.state.option.map((value) => {
    let newValue = parseInt(value)
      return (option += newValue);
    });

    if (option === 0) {
      return 49
    }

    return option;
  }

 handleOrderInformation = (order: []) => {
   const getOrder = this.state.orderInfo as any;
  if (Object.keys(order).length !== 0) {
    getOrder.push(order)
  }

  this.setState({orderInfo: getOrder}, () => {
    console.log(this.state.orderInfo)
  })
 }
 
  render() {
    return (
      <CartContext.Provider
        value={{
          ...this.state,
          addProductToCart: this.addProductToCart,
          deleteFromCart: this.deleteFromCart,
          deleteExtrasFromExtras: this.deleteExtrasFromExtras,
          countCart: this.countCart,
          totalPrice: this.totalPrice,
          getVAT: this.getVAT,
          deliveryOption: this.deliveryOption,
          getDeliveryOption: this.getDeliveryOption,
          handleOrderInformation: this.handleOrderInformation
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
