import React, { useEffect } from "react";
import "../css/nav.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const Nav = (props) => {
  const { currentPath } = props;
  useEffect(() => {
    const navs = document.getElementsByClassName("nav");
    for (let i = 0; i < navs.length; i++) {
      const element = navs[i];
      element.classList.remove("navSelected");
    }
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
    </div>
  );
};

export default Nav;
