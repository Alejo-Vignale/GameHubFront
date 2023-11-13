import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../redux/cartSlice";

function ButtonAddToCart({ game }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const isGameInCart = () => {
    return cartItems.some((item) => item._id === game._id);
  };

  const handleAddToCart = () => {
    if (!isGameInCart()) {
      dispatch(addItem(game));
    } else {
    }
  };

  return (
    <div className="component_cartButton d-flex justify-content-end">
      <div
        style={{ textDecoration: "none", cursor: "pointer" }}
        onClick={handleAddToCart}
      >
        <p className="cart-icon ion-bag p-0 m-0 text-center d-flex justify-content-center align-items-center">
          {isGameInCart() ? "In cart" : "Add to cart"}
        </p>
      </div>
    </div>
  );
}

export default ButtonAddToCart;
