import React from "react";
import CartButton from "../CartButton/CartButton";
import Logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={Logo} alt="Logo" width="200px" height="50px" />
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
