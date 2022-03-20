import React, { useEffect } from "react";
import "../css/nav.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Box, SwipeableDrawer } from "@material-ui/core";
// import { Button } from "@material-ui/core";
const Nav = (props) => {
  const [boxOpen, setboxOpen] = React.useState(false);
  const { currentPath } = props;
  useEffect(() => {
    const navs = document.getElementsByClassName("nav");
    for (let i = 0; i < navs.length; i++) {
      const element = navs[i];
      element.classList.remove("navSelected");
    }
    const mobileNav = document.getElementsByClassName("mobile-nav");
    for (let i = 0; i < mobileNav.length; i++) {
      const element = mobileNav[i];
      element.classList.remove("navSelectedM");
    }
    document.getElementById(currentPath + "M")?.classList?.add("navSelectedM");
    document.getElementById(currentPath)?.classList?.add("navSelected");
    if (window.scrollY <= 50 && currentPath == "homeNav") {
      document.getElementsByClassName("logo")[0].classList.remove("scrolled");
    } else {
      document.getElementsByClassName("logo")[0].classList.add("scrolled");
    }
  }, [currentPath]);
  const checkScroll = () => {
    if (window.scrollY <= 50 && currentPath == "homeNav") {
      document.getElementsByClassName("logo")[0].classList.remove("scrolled");
    } else {
      document.getElementsByClassName("logo")[0].classList.add("scrolled");
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", checkScroll);
  }, []);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setboxOpen(open);
  };
  return (
    <div className="NavBar">
      <img src={logo} className="logo"></img>
      <div className="navs">
        <Link to={"/home"} className="nav" id="homeNav">
          Home
        </Link>
        <Link to={"/menu"} className="nav" id="menuNav">
          Menu
        </Link>
        <Link to={"/cart"} className="nav" id="cartNav">
          Cart
        </Link>
        <Link to={"/gallery"} className="nav" id="galleryNav">
          Gallery
        </Link>
        <Link to={"Contact Us"} className="nav" id="contactNav">
          Contact Us
        </Link>
      </div>
      <div className="mobile-menu">
        <i
          onClick={toggleDrawer(true)}
          className="material-icons"
          style={{ fontSize: "34px" }}
        >
          menu
        </i>
        <SwipeableDrawer
          anchor={"right"}
          open={boxOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <Link to={"/home"} className="mobile-nav" id="homeNavM">
              Home
            </Link>
            <Link to={"/menu"} className="mobile-nav" id="menuNavM">
              Menu
            </Link>
            <Link to={"/cart"} className="mobile-nav" id="cartNavM">
              Cart
            </Link>
            <Link to={"/contactUs"} className="mobile-nav" id="contactNavM">
              Contact Us
            </Link>
          </Box>
        </SwipeableDrawer>
      </div>
    </div>
  );
};

export default Nav;
