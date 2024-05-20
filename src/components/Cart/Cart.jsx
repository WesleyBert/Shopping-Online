import React, { useContext, useEffect, useState } from "react";

import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

function Cart() {
  const { cartItems, isCartVisible, setIsCartVisible, setCartItems } =
    useContext(AppContext);
  const [finalBuy, setFinalBuy] = useState(false);

  const totalPrice = cartItems.reduce(
    (acc, item) => Number(item?.price) * Number(item?.quantity || 1) + acc,
    0,
  );

  const handleCheckout = () => {
    setCartItems([]);
    setFinalBuy(true);
  };

  useEffect(() => {
    if (finalBuy) {
      alert("Compra Realizada com sucesso! Obrigado pela compra");
      setFinalBuy(false);
    }
  }, [finalBuy]);

  return (
    <section className={`cart ${isCartVisible ? "cart--active" : ""}`}>
      <button
        className="button"
        onClick={() => setIsCartVisible(!isCartVisible)}
      >
        X
      </button>
      <h1>Carrinho</h1>
      <h1>de compras</h1>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>

      <div className="cart-resume">
        <span>Total: </span>
        {formatCurrency(totalPrice, "BRL")}
      </div>
      <button className="checkout" onClick={handleCheckout}>
        Finalizar Compra
      </button>
    </section>
  );
}

export default Cart;
