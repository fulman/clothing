import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HgXh6H18NklorxfnNiEgDaCSZY3z3WZHVZFMV16sFzT2hEtCkCWm9H24mOFwfhNicrwRPQjoLrCQXIiUTE2m3Rd0098X3Lupz";

  const onToken = (token) => {
    console.log(token);
    alert("Payment is successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="HHK Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
