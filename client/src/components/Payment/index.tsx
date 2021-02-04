import React from "react";
import PaymentStyled from "./PaymentStyled";
import { CartContext } from "../../contexts/cartContext";
import PrivacyPolicyCheckbox from "../PrivacyPolicyCheckbox";
import { loadStripe } from "@stripe/stripe-js";

interface PayOption {
  title: string;
}
export const paymentOptions: PayOption[] = [
  {
    title: "VISA",
  },
  {
    title: "Swish",
  },
];

interface Props {
  forms: any;
  history: any;
}

interface State {
  toggle: number;
  paymentOption: string;
  showPayBtn: boolean;
  total: number;
}

export default class Payment extends React.Component<Props, State> {
  static contextType = CartContext;
  constructor(props: Props) {
    super(props);

    this.state = {
      toggle: 0,
      paymentOption: "VISA",
      showPayBtn: false,
      total: 0,
    };
  }

  handleOption = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({ toggle: index }, () => {});

    this.setState({ paymentOption: value }, () => {
      console.log(this.state.paymentOption);
    });
  };

  handlePrivacy = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    if (checked === true && this.state.paymentOption === "VISA") {
      this.setState({ showPayBtn: true });
    } else {
      this.setState({ showPayBtn: false });
    }
  };

  async proceedToCheckout(body: any) {
    const PUBLIC_KEY = "pk_test_8asbHZHZoVp2kblhfCEUUGIr006fit3Srr";
    const stripePromise = loadStripe(PUBLIC_KEY);

    try {
      console.log("Starting...");
      const response = await fetch("http://localhost:5000/checkout-session", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(body),
      });

      const session = await response.json();
      console.log(session.id);
      const stripe = await stripePromise;
      const result = await stripe?.redirectToCheckout({
        sessionId: session.id,
      });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  visaPayment = () => {
    console.log(this.state.paymentOption);
    if (this.state.paymentOption === "VISA") {
      const getCart = this.context.cartItems;
      this.context.handleOrderInformation(this.props.forms);
      const sumPrice = this.context.totalPrice();
      const deliveryPrice = this.context.getDeliveryOption();
      const quantity = this.context.countCart();
      const totalPrice = sumPrice + deliveryPrice;
      const vat = this.context.getVAT();
      /* this.props.history.push("/confirmation"); */
      const extras = this.context.extras

      const cartItem = getCart.map((product: any) => {
        return {
          id: product.product.id,
          name: product.product.name,
          title: product.product.title,
          brand: product.product.brand,
          price: product.product.price,
          quantity: product.quantity,
        };
      });

      const orderInfo = this.props.forms.map((content: any) => {
        return {
          firstName: content.firstName,
          lastName: content.lastName,
          address: content.address,
          postNumber: content.postNumber,
          postAddress: content.postAddress,
          email: content.email,
          mobile: content.mobile,
        };
      });

      const buyerInfo = {
        totalQuantity: quantity,
        totalPriceProducts: sumPrice,
        deliveryPrice: deliveryPrice,
        totalAmount: totalPrice,
        VAT: vat,
        info: orderInfo,
        cart: cartItem,
        extras: extras
      };

      fetch("http://localhost:5000/sending-data", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(buyerInfo),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            console.log(res);
          }
        });

      this.proceedToCheckout({
        line_items: [
          {
            price_data: {
              currency: "sek",
              product_data: {
                name: "Din beställning",
              },
              unit_amount: totalPrice * 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
      });
    }
  };

  render() {
    return (
      <div>
        {this.props.forms.map((content: any, index: number) => {
          let delivery = content.deliveryOption;
          let numberDelivery = parseInt(delivery);
          return (
            <PaymentStyled key={index}>
              <span className="double">
                <p>{content.firstName}</p>
                <p>{content.lastName}</p>
              </span>
              <p>{content.address}</p>
              <span className="double">
                <p>{content.postNumber}</p>
                <p>{content.postAddress}</p>
              </span>
              <br />
              <p>{content.email}</p>
              <p>{content.mobile}</p>
              <br />
              <span className="delivery-span">
                <p className="delivery-text">Frakt </p>
                {delivery} kr
              </span>
              <span className="delivery-span">
                <p className="total-text">Totalt</p>
                {numberDelivery + this.context.totalPrice()} kr
              </span>
            </PaymentStyled>
          );
        })}
        <PaymentStyled>
          <h2>Betalningsalternativ</h2>
          <div className="payment-options-container">
            <div className="payment-option">
              {paymentOptions.map((option, index) => {
                return (
                  <label htmlFor="payment" key={index}>
                    <h3>{option.title}</h3>
                    <input
                      name="payment"
                      type="radio"
                      value={option.title}
                      checked={this.state.toggle === index}
                      onChange={(e) => this.handleOption(e, index)}
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <PrivacyPolicyCheckbox handlePrivacy={(e) => this.handlePrivacy(e)} />
          <div className="finish-btn-div">
            {this.state.showPayBtn ? (
              <button className="finish-btn" onClick={this.visaPayment}>
                Slutför köp
              </button>
            ) : null}
          </div>
        </PaymentStyled>
      </div>
    );
  }
}
