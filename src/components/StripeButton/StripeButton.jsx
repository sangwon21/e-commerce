import React from "react";
import StripeCheckout from "react-stripe-checkout";

import { publishableKey } from "./StripeButton.config";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="http://res.heraldm.com/phpwas/restmb_jhidxmake.php?idx=5&simg=201909271057327786011_20190927105823_01.jpg"
      description={`Your Price Value is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
