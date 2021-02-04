import React from "react";
import DeliveryInfo from "../DeliveryInfo";
import DeliveryAndPaymentStyled from "./DeliveryAndPaymentStyled";
import Payment from "../Payment";
import { CartContext } from "../../contexts/cartContext";

interface Props {
  history: any
}

interface State {
  showBuyerInfo: boolean;
  forms: [];
  /* delivery: string; */
}

export default class DeliveryAndPayment extends React.Component<Props, State> {
  static contextType = CartContext;
  constructor(props: Props) {
    super(props);

    this.state = {
      showBuyerInfo: false,
      forms: [],
      /* delivery: "", */
    };
  }

  printBuyerInfoBtn = (buyerInfo: any) => {
    const cartItem = this.context.cartItems.length;
    let buyerInfoToConfirm = this.state.forms as any;
    if (Object.keys(buyerInfo).length !== 0 && cartItem !== 0) {
      buyerInfoToConfirm.splice(0, 1);
      buyerInfoToConfirm.push(buyerInfo);
      this.setState(
        {
          forms: buyerInfoToConfirm,
        },
        () => {
          this.setState({ showBuyerInfo: true });
        }
      );
    } else {
      console.log(this.state.forms);
    }
  };

  /* deliveryOption = (option: any) => {
    this.setState({ delivery: option });
  }; */

  render() {
    return (
      <DeliveryAndPaymentStyled>
        <div className="title">
          <h2>Frakt & Betalsätt</h2>
        </div>
        <DeliveryInfo
          printBuyerInfoBtn={(buyerInfo) => this.printBuyerInfoBtn(buyerInfo)}
          /* deliveryOption={(option) => this.deliveryOption(option)} */
        />
        {this.state.showBuyerInfo ? <Payment forms={this.state.forms} history={this.props.history} /> : null}
      </DeliveryAndPaymentStyled>
    );
  }
}
