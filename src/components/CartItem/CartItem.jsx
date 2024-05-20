import React, { useContext, useState } from "react";
import propTypes from "prop-types";
import "./CartItem.css";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";

function CartItem({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, photo, name, price, quantity = 1 } = data;

  console.log(quantity);

  const [updatedQuantity, setUpdatedQuantity] = useState(quantity);

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const handleIncreaseQuantity = () => {
    const addQuantity = cartItems.map((item) => {
      if (item.id === id) {
        setUpdatedQuantity(updatedQuantity + 1);
        return { ...item, quantity: updatedQuantity + 1 };
      } else {
        return item;
      }
    });
    setCartItems(addQuantity);
  };

  const handleDecreaseQuantity = () => {
    if (updatedQuantity > 1) {
      const removeQuantity = cartItems.map((item) => {
        if (item.id === id) {
          setUpdatedQuantity(updatedQuantity - 1);
          return { ...item, quantity: updatedQuantity - 1 };
        } else {
          return item;
        }
      });
      setCartItems(removeQuantity);
    }
  };

  return (
    <section className="cart-item">
      <img src={photo} alt="imagem do produto" className="cart-item-image" />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{name}</h3>
      </div>
      <div className="cart-item-quantity">
        <button onClick={handleDecreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
      <div className="cart-item-content">
        <h3 className="cart-item-price">R${formatCurrency(price, "BRL")}</h3>
      </div>

      <button
        type="button"
        className="button__remove-item"
        onClick={handleRemoveItem}
      >
        X
      </button>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object,
}.isRequired;
