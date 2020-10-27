import React from "react";

import {
  CartItemContainer,
  ImageContainer,
  ItemDetailsContainer,
  NameContainer,
} from "./cart-item.styles";

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <CartItemContainer>
      <ImageContainer src={imageUrl} alt={name} />
      <ItemDetailsContainer className="item-details">
        <NameContainer>{name}</NameContainer>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
}

export default CartItem;
