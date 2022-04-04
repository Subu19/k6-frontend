import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/nav";
import "../css/main.css";
import "../css/cart.css";
import urls from "../constants/urls.json";
import { CartContext, GlobalPopUP } from "../Helpers/Context";
import { Button, makeStyles, Switch, TextField } from "@material-ui/core";
import axios from "axios";
import Footer from "../components/Footer";
import { useGetHome } from "../hooks/getHome";
import Helmet from "react-helmet";

const Cart = (props) => {
  const classes = styles();
  const { loadingEssentials, essentials } = useGetHome();
  const { setPopupVisible, setTitle, setContext } = useContext(GlobalPopUP);
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [geoStatus, setGeoStatus] = useState(null);
  const [remember, setRemember] = useState(false);
  const handleSubmit = (e) => {
    const form = document.getElementById("orderForm");
    e.preventDefault();
    var newOrder = {
      data: {
        Location: form.querySelector('input[name="address"]').value,
        PhoneNumber: form
          .querySelector('input[name="phone_no"]')
          .value.toString(),
        FirstName: form.querySelector('input[name="first_name"]').value,
        LastName: form.querySelector('input[name="last_name"]').value,
        Lat: lat.toString(),
        Lng: lng.toString(),
        Dishes: {
          data: cart,
        },
      },
    };
    axios
      .post(`${urls.api}/orders`, newOrder)
      .then((res) => {
        if (res.status == 200) {
          if (localStorage.getItem("OldCart")) {
            const newCart = JSON.parse(localStorage.getItem("OldCart"));
            newCart.push(cart);
            localStorage.setItem("OldCart", JSON.stringify(newCart));
          } else {
            localStorage.setItem("OldCart", JSON.stringify([cart]));
          }
          setCart([]);
          setPopupVisible(true);
          setTitle("Order Successful");
          setContext(
            `You order was Successful! Please wait for the confirmation call on ${
              form.querySelector('input[name="phone_no"]').value
            } `
          );
        }
      })
      .catch((err) => {
        alert(err);
      });
    if (remember == true) {
      localStorage.setItem(
        "First Name",
        form.querySelector('input[name="first_name"]').value
      );
      localStorage.setItem(
        "Last Name",
        form.querySelector('input[name="last_name"]').value
      );
      localStorage.setItem(
        "Phone Number",
        form.querySelector('input[name="phone_no"]').value.toString()
      );
    }
  };
  const getLocation = () => {
    if (!navigator.geolocation) {
      setGeoStatus("Geolocation is not supported by your browser");
    } else {
      setGeoStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeoStatus("Found");
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          //   const results = fetch(
          //     `https://crossorigin.me/http://google.com/maps/search/${position.coords.latitude}+${position.coords.longitude}`
          //   ).then((res) => console.log(res.json()));
          //   console.log(results.json());
          //   console.log(
          //     fetchMeta(
          //       `http://google.com/maps/search/${position.coords.latitude}+${position.coords.longitude}`
          //     )
          //   );
        },
        () => {
          setGeoStatus("Unable to retrieve your location");
        }
      );
    }
  };
  const deleteItem = async (item) => {
    const updatedItems = [];
    await cart.map((res) => {
      if (res.menuId !== item.menuId) {
        updatedItems.push(res);
      }
    });
    setCart(updatedItems);
  };
  const addQt = (item) => {
    cart.find((res) => {
      if (res.menuId == item.menuId) {
        var updatedItem = res;
        updatedItem.quantity = parseInt(updatedItem.quantity) + 1;
        var updatedItems = [];
        cart.map((res2) => {
          if (res2.menuId != item.menuId) {
            updatedItems.push(res2);
          } else {
            updatedItems.push(updatedItem);
          }
        });

        setCart(updatedItems);
      }
    });
  };
  const reduceQt = (item) => {
    if (item.quantity > 1) {
      cart.find((res) => {
        if (res.menuId == item.menuId) {
          var updatedItem = res;

          updatedItem.quantity = parseInt(updatedItem.quantity) - 1;
          var updatedItems = [];
          cart.map((res2) => {
            if (res2.menuId != item.menuId) {
              updatedItems.push(res2);
            } else {
              updatedItems.push(updatedItem);
            }
          });
          setCart(updatedItems);
        }
      });
    }
  };
  useEffect(() => {
    var newTotal = 0;
    cart.map((item) => {
      var itemTotal = item.price * item.quantity;
      newTotal += itemTotal;
    });
    setTotal(newTotal);
  }, [cart]);
  return (
    <div className="main ">
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="Check out your orders." />
      </Helmet>
      <Nav currentPath={props.currentPath}></Nav>
      {cart.length > 0 ? (
        <div className="containner cartMain">
          <div className="cart-containner">
            <div className="order-containner">
              {cart.map((item) => {
                return (
                  <div className="order">
                    <div className="order-title">{item.title}</div>
                    <div className="order-price">Rs. {item.price}</div>
                    <div className="order-qt">
                      <div
                        className={
                          item.quantity == 1 ? "qt-icon disable" : "qt-icon"
                        }
                        onClick={() => reduceQt(item)}
                      >
                        -
                      </div>
                      <input
                        type={"number"}
                        value={item.quantity}
                        className="qt-qt"
                      ></input>
                      <div className="qt-icon" onClick={() => addQt(item)}>
                        +
                      </div>
                    </div>
                    <i
                      className="material-icons deleteIcon"
                      onClick={() => deleteItem(item)}
                      style={{
                        fontSize: "25px",
                        color: "red",
                        cursor: "pointer",
                        marginLeft: "10px",
                      }}
                    >
                      delete
                    </i>
                  </div>
                );
              })}
            </div>
            <div className="order-sum">
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "grey",
                }}
              >
                Order Summary
              </h3>
              <div className="order-sum-details">
                {cart.map((item) => {
                  return (
                    <div className="order-sum-list">
                      <div className="order-title">
                        {item.title + " (" + item.quantity + ")"}
                      </div>
                      <div className="order-sum-price">
                        Rs. {item.price * item.quantity}
                      </div>
                    </div>
                  );
                })}
              </div>
              <hr style={{ width: "90%" }} />
              <div className="order-sum-list">
                <b className="order-title">Total:</b>
                <b>Rs. {total}</b>
              </div>
            </div>
          </div>
          <div className="user-info-containner">
            <form onSubmit={handleSubmit} className="form" id="orderForm">
              <div className="form-title">Please fill the form below*</div>
              <TextField
                className="user-input"
                required
                id="outlined-required"
                label="First Name"
                classes={{ root: classes.inputStyle }}
                variant="outlined"
                name="first_name"
                defaultValue={localStorage.getItem("First Name")}
                margin="dense"
              />
              <TextField
                className="user-input"
                required
                id="outlined-required"
                label="Last Name"
                defaultValue={localStorage.getItem("Last Name")}
                variant="outlined"
                name="last_name"
                margin="dense"
                classes={{ root: classes.inputStyle }}
              />
              <br></br>
              <TextField
                className="user-input"
                required
                id="outlined-required"
                label="Phone Number"
                variant="outlined"
                name="phone_no"
                defaultValue={localStorage.getItem("Phone Number")}
                type={"tel"}
                inputProps={{ pattern: "[0-9]{10}" }}
                margin="dense"
                classes={{ root: classes.inputStyle }}
              />
              <div className="location-containner">
                <TextField
                  className="user-input"
                  id="outlined-required"
                  label="Address (optional)"
                  variant="outlined"
                  name="address"
                  margin="dense"
                  style={{ width: "500px", maxWidth: "90%" }}
                  classes={{ root: classes.inputStyle }}
                />
                <br></br>
                <br></br>
                <div className="">Or</div>
                <br></br>
                {geoStatus == null ? (
                  <Button
                    onClick={() => getLocation()}
                    variant="outlined"
                    color="primary"
                    size="small"
                  >
                    Give my Location
                  </Button>
                ) : geoStatus == "Found" ? (
                  <iframe
                    className="mapIframe"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng}%2C${lat}%2C${lng}%2C${lat}&layer=transportmap&marker=${lat}%2C${lng}`}
                  ></iframe>
                ) : (
                  geoStatus
                )}
              </div>
              <Switch
                onChange={(e) => {
                  setRemember(e.target.checked);
                }}
                color="primary"
              />{" "}
              Remember Me
              <div className="button-containner">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                >
                  Comfirm Order
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div
          className="containner"
          style={{
            height: "100vh",
            fontSize: "35px",
            color: "var(--yel)",
            paddingTop: "100px",
          }}
        >
          Cart is Empty!!!{" "}
        </div>
      )}
      <Footer
        essentials={essentials}
        loadingEssentials={loadingEssentials}
      ></Footer>
    </div>
  );
};
const styles = makeStyles({
  inputStyle: {
    marginRight: "10px",
  },
});
export default Cart;
