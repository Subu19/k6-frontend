import React, { useEffect } from "react";
import pizza from "../assets/pizza.png";
import chicken from "../assets/chicken.png";
import beer from "../assets/beer.png";
import { Button, makeStyles } from "@material-ui/core";
const Slider = () => {
  const classes = styles();
  useEffect(() => {
    setInterval(() => {
      const length = document.getElementsByClassName("slider-img").length;
      const element = document.getElementsByClassName("slider-image")[0];
      if (element.scrollLeft < (length - 1) * element.clientWidth - 10) {
        element.scrollLeft = element.scrollLeft + element.clientWidth;
        console.log(element.scrollLeft + ".... of" + element.clientWidth);
      } else {
        element.scrollTo({ left: 0 });
        console.log(element.scrollLeft + ".... of" + element.clientWidth);
      }
    }, 5000);
  }, []);
  return (
    <div className="Slider-containner">
      <div className="slider">
        <div className="slider-content">
          <div className="slider-subtitle">Hungry?</div>
          <div className="slider-title">Come, Get a Pizza</div>
          <div className="slider-desc">
            Nostrud mollit consectetur enim ex. Eiusmod id ipsum sit cillum
            deserunt sit Lorem ipsum occaecat laborum culpa cillum. Sunt mollit
            minim id irure occaecat eu et elit exercitation dolor deserunt
            dolore. Nostrud duis ex nisi laborum id est ea minim laboris. Esse
            eu nostrud labore ut veniam.
          </div>
          <Button
            variant="contained"
            color="primary"
            classes={{ root: classes.buttonStyle }}
          >
            Order Now
          </Button>
        </div>
        <div className="slider-image">
          <div className="slider-img-holder">
            <img src={pizza} className="slider-img"></img>
          </div>
          <div className="slider-img-holder">
            <img src={chicken} className="slider-img"></img>
          </div>
          <div className="slider-img-holder">
            <img src={beer} className="slider-img"></img>
          </div>
        </div>
      </div>
      <svg
        width="1727"
        height="242"
        viewBox="0 0 1727 242"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="curve"
      >
        <path
          d="M773.5 139.5C285.5 -9 302.5 13.6666 -3 0.499939H1727V241.5C1685.5 123 1137.76 250.347 773.5 139.5Z"
          fill="#555555"
        />
      </svg>
    </div>
  );
};
const styles = makeStyles({
  buttonStyle: {
    marginTop: "10px",
  },
});
export default Slider;
