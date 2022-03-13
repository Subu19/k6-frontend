import React, { useContext } from "react";
import "../css/menu.css";
import { Button } from "@material-ui/core";
import vegTag from "../assets/veg.svg";
import spicyTag from "../assets/spicy.svg";
import { CartContext, PopUpContext } from "../Helpers/Context";
const Card = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const { visible, setVisible, popUpItem, setPopUpItem } =
    useContext(PopUpContext);
  const { img, title, desc, veg, spicy, price, orderable, menuId } = props;
  const addToCart = () => {
    setVisible(true);
    const item = { ...props };
    setPopUpItem(item);
  };
  return (
    <div className="card">
      <div className="card-section1">
        <img src={img} className="card-img"></img>
        <div className="card-info">
          <div className="card-title">{title}</div>
          <div className="card-desc">{desc}</div>
        </div>
      </div>
      <div className="card-section2">
        <div className="card-tags">
          {veg ? <img src={vegTag} className="card-tag"></img> : ""}
          {spicy ? <img src={spicyTag} className="card-tag"></img> : ""}
        </div>
        <div className="card-price">
          <div>Rs. {price}</div>
        </div>
        <div className="card-order">
          {orderable != false ? (
            cart.find((res) => res.menuId == menuId) == null ? (
              <Button
                onClick={() => {
                  addToCart();
                }}
                color="secondary"
                variant="contained"
                size="small"
              >
                Add To Cart
              </Button>
            ) : (
              "Added to cart"
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
