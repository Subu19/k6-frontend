import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/basket.png";
import { CartContext } from "../Helpers/Context";

const CartIcon = () => {
  const { cart, setcart } = useContext(CartContext);
  return (
    <Link to={"/cart"} className="cartIconContainner">
      <img src={cartIcon} className="cartIcon"></img>
      <div className="cartCount"> {cart.length}</div>
    </Link>
  );
};

export default CartIcon;
