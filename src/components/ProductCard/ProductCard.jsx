import React, { useContext } from "react";
import propTypes from "prop-types";

import "./ProductCard.css";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";
import { RiShoppingBag3Line } from "react-icons/ri";

function ProductCard({ data }) {
  const { id, name, photo, price, description } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    const existOnCart = cartItems.find((item) => item.id === id);
    if (existOnCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id
            ? { ...item, quantity: (item?.quantity || 1) + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, data]);
    }
  };

  return (
    <section className="product-card">
      <img src={photo} alt="product" className="card__image" />

      <div className="card__infos">
        <h2 className="card__title">{name}</h2>
        <h2 className="card__price">R${formatCurrency(price, 'BRL')}</h2>
      </div>

      <h2 className="card__description">{description}</h2>
      <div className="buy_button_wrapper">
        <button className="button__buy" onClick={handleAddCart}>
          <RiShoppingBag3Line size={18} /> COMPRAR
        </button>
      </div>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
