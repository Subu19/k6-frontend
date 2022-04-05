import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import urls from "../constants/urls.json";
import { Button, CircularProgress, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const Slider = (props) => {
  const { essentials, loadingEssentials } = props;
  // const [slides, setSlides] = useState(null);
  // useEffect(async () => {
  //   if (!loadingEssentials) {
  //     if (essentials.HomeGallery) {
  //       var newSlider = await Promise.all(
  //         essentials.HomeGallery.data.map((image) => {
  //           return (
  //             <div>
  //               <img src={urls.media + image.attributes.url}></img>
  //               <p className="legend">Legend 1</p>
  //             </div>
  //           );
  //         })
  //       );
  //       console.log(newSlider);
  //       setSlides(newSlider);
  //     }
  //   }
  // }, [loadingEssentials, essentials]);
  const classes = styles();
  // useEffect(() => {
  //   if (essentials.HomeGallery) {
  //     let interval = setInterval(() => {
  //       const length = document.getElementsByClassName("slider-img").length;
  //       if (length) {
  //         const element = document.getElementsByClassName("slider-image")[0];
  //         if (element.scrollLeft < (length - 1) * element.clientWidth - 10) {
  //           element.scrollLeft = element.scrollLeft + element.clientWidth;
  //         } else {
  //           element.scrollTo({ left: 0 });
  //         }
  //       } else {
  //         clearInterval(interval);
  //       }
  //     }, 5000);
  //   }
  // }, [essentials]);

  return (
    <div className="sliderContainner">
      <div className="sliderBox">
        <div className="sliderContent">
          <div className="slider-subtitle">Hungry?</div>
          <div className="slider-title">Come, Get a crust Pizza</div>
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
          {/* {slides == null ? (
            <CircularProgress></CircularProgress>
          ) : (
            <Carousel showArrows={true}>
              {slides.map((img) => {
                return img;
              })}
            </Carousel>
          )} */}
          {loadingEssentials ? (
            <CircularProgress color="secondary"></CircularProgress>
          ) : essentials.HomeGallery ? (
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              showThumbs={false}
              showArrows={false}
              dynamicHeight={false}
              showIndicators={true}
              showStatus={false}
              swipeable={false}
            >
              {essentials.HomeGallery.data.map((image) => {
                return (
                  <div>
                    <img
                      src={urls.media + image.attributes.url}
                      style={{
                        maxHeight: "500px",
                      }}
                    ></img>
                  </div>
                );
              })}
            </Carousel>
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
