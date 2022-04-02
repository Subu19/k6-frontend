import { Button, TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Helpers/Context";

const AddToCart = ({ props }) => {
  const { visible, setVisible, popUpItem } = props;
  const { cart, setCart } = useContext(CartContext);
  const [qt, setQt] = useState(1);
  useEffect(() => {
    setQt(1);
  }, [popUpItem]);
  const addToCart = (item) => {
    const newItem = {
      ...item,
      quantity: qt,
    };
    setCart([...cart, newItem]);
    setVisible(false);
  };
  return (
    <div className={visible ? "addToCart" : "addToCart invisible"}>
      <div className={visible ? "ac-box" : "ac-box invisible2"}>
        {popUpItem ? (
          <>
            <div className="ac-topbar">
              <div className="ac-topbartitle"> Add To Cart?</div>
              <Button
                color="primary"
                variant="outlined"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Close
              </Button>
            </div>
            <div className="ac-content">
              <div className="ac-item">
                <img className="ac-img" src={popUpItem.img} />
                <div className="card-title" style={{ marginTop: "10px" }}>
                  {popUpItem.title}
                </div>
                <div className="card-desc">{popUpItem.desc}</div>
                <div className="ac-price">Rs. {popUpItem.price} </div>
              </div>
              <div className="ac-calc">
                <div className="ac-qt">
                  {" "}
                  <TextField
                    id="outlined-number"
                    label="Quantity"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      if (e.target.value <= 0) {
                        e.target.value = 1;
                        setQt(1);
                      } else {
                        setQt(e.target.value);
                      }
                    }}
                    defaultValue={qt}
                  />
                </div>
                <div className="ac-total">Total: {popUpItem.price * qt}</div>
                <Button
                  style={{ marginTop: "20px" }}
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={() => addToCart(popUpItem)}
                >
                  CONFIRM
                </Button>
              </div>
            </div>
          </>
        ) : (
          "loading"
        )}
      </div>
    </div>
  );
};

export default AddToCart;
