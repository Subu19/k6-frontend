import React from "react";
import "../css/footer.css";
import logo from "../assets/logosvg.svg";
import { Link } from "react-router-dom";
import { grey } from "@material-ui/core/colors";
const Footer = (props) => {
  return (
    <div className="footer">
      <img src={logo} className="footer-logo"></img>

      <div className="footer-section">
        <p className="footer-desc">
          {props.loadingEssentials ? "loading..." : props.essentials.FooterText}
        </p>
      </div>
      <div className="footer-section">
        <h4> Nagivate</h4>
        <Link to={"/home"} style={{ color: "grey", marginTop: "5px" }}>
          Home
        </Link>
        <Link to={"/menu"} style={{ color: "grey", marginTop: "5px" }}>
          Menu
        </Link>
        <Link to={"/cart"} style={{ color: "grey", marginTop: "5px" }}>
          Cart
        </Link>
        <Link to={"/gallay"} style={{ color: "grey", marginTop: "5px" }}>
          Gallay
        </Link>
        <Link to={"/contactus"} style={{ color: "grey", marginTop: "5px" }}>
          Contact Us
        </Link>
      </div>
      <div className="footer-section">
        <h4> Contact Us</h4>
        <a
          href={
            props.loadingEssentials
              ? "loading..."
              : props.essentials.FacebookLink
          }
          className="footer-contacts"
        >
          <i
            class="fa fa-facebook-official"
            style={{ fontSize: "25px", color: "#4267B2" }}
          ></i>
          <div>{"Facebook"}</div>
        </a>
        <div className="footer-contacts">
          <i
            class="fa fa-whatsapp"
            style={{ fontSize: "25px", color: "#25D366" }}
          ></i>
          <div>
            {props.loadingEssentials
              ? "loading..."
              : props.essentials.PhoneNumber}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
