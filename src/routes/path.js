import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Error from "../pages/error";
import Menu from "../pages/menu";
import Gallery from "../pages/gallery";
import Cart from "../pages/Cart";
import { CartContext } from "../Helpers/Context";
import CartIcon from "../components/CartIcon";

function Path() {
  const { cart, setCart } = useContext(CartContext);
  return (
    <>
      <Router>
        {cart.length > 0 ? <CartIcon></CartIcon> : ""}
        <Routes>
          <Route path="/" element={<Home currentPath="homeNav"></Home>} />
          <Route path="/home" element={<Home currentPath="homeNav"></Home>} />
          <Route
            path="/menu/:category"
            element={<Menu currentPath="menuNav"></Menu>}
          />
          <Route path="/menu" element={<Menu currentPath="menuNav"></Menu>} />
          <Route
            path="/gallery"
            element={<Gallery currentPath="galleryNav"></Gallery>}
          />
          <Route path="/cart" element={<Cart currentPath="cartNav"></Cart>} />
          <Route path="*" element={<Error currentPath="error"></Error>} />
        </Routes>
      </Router>
    </>
  );
}

export default Path;
