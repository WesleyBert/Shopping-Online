import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./CartButton.css";
import AppContext from "../../context/AppContext";

function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className="cart__button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <AiOutlineShoppingCart />
      {
        <span className="cart-status">
          {cartItems.reduce((acc, curr) => {
            acc += (curr.quantity || 1) * 1;
            return acc;
          }, 0)}
        </span>
      }
    </button>
  );
}

export default CartButton;
