import React, { useEffect } from "react";
import urls from "../constants/urls.json";
import { Button, CircularProgress, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const Slider = (props) => {
  const { essentials, loadingEssentials } = props;
  const classes = styles();
  useEffect(() => {
    if (essentials.HomeGallery) {
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
    }
  }, [essentials]);

  return (
    <div className="Slider-containner">
      <div className="slider">
        <div className="slider-content">
          <div className="slider-subtitle">Hungry?</div>
          <div className="slider-title">Come, Get a Pizza</div>
          <div className="slider-desc">
            {loadingEssentials ? (
              <CircularProgress color="secondary"></CircularProgress>
            ) : (
              essentials.HomeText
            )}
          </div>
          <Link to={"/menu"}>
            <Button
              variant="contained"
              color="primary"
              classes={{ root: classes.buttonStyle }}
            >
              Order Now
            </Button>
          </Link>
        </div>
        <div className="slider-image">
          {loadingEssentials ? (
            <CircularProgress color="secondary"></CircularProgress>
          ) : essentials.HomeGallery ? (
            essentials.HomeGallery.data.map((image) => {
              return (
                <>
                  <div className="slider-img-holder">
                    <img
                      src={urls.media + image.attributes.url}
                      className="slider-img"
                    ></img>
                  </div>
                </>
              );
            })
          ) : (
            <CircularProgress></CircularProgress>
          )}
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
