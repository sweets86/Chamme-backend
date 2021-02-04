import React from "react";
import ConfirmationCompositionStyled from "./ConfirmationCompositionStyled";
import { CartContext } from "../../contexts/cartContext";

interface Props {}

interface State {
  infoList: [];
  cartList: [];
  extrasList: [];
  showExtra: boolean;

  deliveryPrice: number;
  VAT: number;
  totalAmount: number;
  totalQuantity: number;
  totalSumProducts: number;

  orderNumber: string;
}

export default class ConfirmationComposition extends React.Component<
  Props,
  State
> {
  static context = CartContext;

  constructor(props: Props) {
    super(props);

    this.state = {
      infoList: [],
      cartList: [],
      extrasList: [],
      showExtra: false,

      deliveryPrice: 0,
      VAT: 0,
      totalAmount: 0,
      totalQuantity: 0,
      totalSumProducts: 0.0,

      orderNumber: "",
    };
  }

  async componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get("session_id");
    try {
      if (sessionId) {
        const response = await fetch("http://localhost:5000/verify-checkout-session", {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({ sessionId }),
        });
        const session = await response.json();

        if (session.isVerified) {
          /* this.setState({ showSuccess: true }) */
          this.makeOrderRequest(sessionId);
        } else {
          alert("Du måste genomföra betalningen innan din order kan skickas.");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async makeOrderRequest(sessionId: any) {
    try {
      const response = await fetch("http://localhost:5000/order/" + sessionId, {
        headers: { "Content-Type": "application/json" },
        method: "GET",
      });
      console.log(response);
      const orders = await response.json();
      console.log(orders);
      console.log(orders.data[0]);

      let info = orders.data[0].info;
      let cart = orders.data[0].cart;
      let extras = orders.data[0].extras;
      let totalSumProducts = orders.data[0].totalSumProducts;
      let VAT = orders.data[0].VAT;
      let deliveryPrice = orders.data[0].deliveryPrice;
      let amount = orders.data[0].totalAmount;
      let quantity = orders.data[0].totalQuantity;
      let orderNumber = orders.data[1].orderNumber;

      this.setState({ infoList: info });
      this.setState({ cartList: cart });
      this.setState({ extrasList: extras });

      this.setState({ totalSumProducts: totalSumProducts });
      this.setState({ VAT: VAT });
      this.setState({ deliveryPrice: deliveryPrice });
      this.setState({ totalAmount: amount });
      this.setState({ totalQuantity: quantity });

      this.setState({ orderNumber: orderNumber });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <ConfirmationCompositionStyled>
        <h2>Orderbekräftelse</h2>
        <div className="contain">
          <div className="top-container">
            <h3>Ordernummer: {this.state.orderNumber}</h3>
          </div>
          <div className="container">
            <h3>Produkt</h3>
            <h3>Antal</h3>
            <h3 className="price-h3">Pris</h3>
          </div>
          {this.state.cartList.map((product: any, index: number) => {
            return (
              <div className="container-products" key={index}>
                <div className="left-container">
                  <div className="product">
                    <h4>{product.brand}</h4>
                    <h4>{product.name}</h4>
                  </div>
                  {this.state.extrasList
                    .filter((extra: any) => extra.productId === product.id)
                    .map((extra: any, index: number) => {
                      return (
                        <div key={index} className="extras">
                          <h4>{extra.extrasColor}</h4>
                          <h4>{extra.extrasSize}</h4>
                        </div>
                      );
                    })}
                </div>

                <div className="right-container">
                  <h4>{product.quantity}</h4>
                  <h4>{product.price},00 kr</h4>
                </div>
              </div>
            );
          })}

          <div className="pay-container">
            <h3>Summa</h3>
            <h4>{this.state.totalSumProducts},00 kr</h4>
          </div>
          <div className="pay-container">
            <h3>Frakt</h3>
            <h4>{this.state.deliveryPrice},00 kr</h4>
          </div>
          <div className="pay-container">
            <h3>Moms 25%</h3>
            <h4>{this.state.VAT}0 kr</h4>
          </div>
          <div className="pay-container">
            <h3>Total inkl. moms</h3>
            <h4>{this.state.totalAmount},00 kr</h4>
          </div>
        </div>
        <div className="contain-bottom">
          <h2 className="bottom-h2">Dina uppgifter</h2>
          <h3>Beställd av</h3>
          {this.state.infoList.map((info: any, index: number) => {
            return (
              <div key={index}>
                <div className="information">
                  <h4>{info.firstName}</h4>
                  <h4>{info.lastName}</h4>
                </div>

                <h4>{info.address}</h4>

                <div className="information">
                  <h4>{info.postNumber}</h4>
                  <h4>{info.postAddress}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </ConfirmationCompositionStyled>
    );
  }
}
