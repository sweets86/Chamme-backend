import React from "react";
import OrderCompositionStyled from "./OrderCompositionStyled";
import Order from "../../components/Order";
import DeliveryAndPayment from "../../components/DeliveryAndPayment";
import {useHistory} from 'react-router-dom'

export default function OrderComposition() {
const history = useHistory()
  return (
    <OrderCompositionStyled>
      <div className="contain">
        <Order />
        <DeliveryAndPayment history={history} />
      </div>
    </OrderCompositionStyled>
  );
}
