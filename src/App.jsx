import React from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Provider from "./context/Provider";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Carrossel from "./components/Carrossel/Carrossel";

function App() {
  return (
    <Provider>
      <Header />
      <Carrossel />
      <Products />
      <Cart />
      <Footer />
    </Provider>
  );
}

export default App;
