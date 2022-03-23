import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/nav";
import "../css/main.css";
import "../css/contact.css";
import { Button } from "@material-ui/core";
import { useGetHome } from "../hooks/getHome";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.webp";
const ContactUs = (props) => {
  const { loadingEssentials, essentials } = useGetHome();
  return (
    <div className="main">
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us now!" />
      </Helmet>
      <Nav currentPath={props.currentPath}></Nav>
      <div className="contact-containner" style={{}}>
        <div className="contact-title">Contact Us</div>
        <div className="contact-subtitle">
          Get in touch with us using different medium. We are always ready to
          hear from you.
        </div>
        <div className="contacts">
          <div className="contact-box">
            <img
              height={"200px"}
              width={"200px"}
              src={facebook}
              className="contact-img"
            ></img>
            <h3>Facebook</h3>
            {loadingEssentials ? (
              "loading.."
            ) : (
              <a href={essentials.FacebookLink}>
                <Button variant="contained" color="primary" size="medium">
                  View
                </Button>
              </a>
            )}
          </div>
          <div className="contact-box">
            <img
              height={"200px"}
              width={"200px"}
              src={whatsapp}
              className="contact-img"
            ></img>
            <h3>What's App</h3>
            <div>
              {loadingEssentials ? "loading...." : essentials.PhoneNumber}
            </div>
          </div>
        </div>
      </div>
      <Footer
        essentials={essentials}
        loadingEssentials={loadingEssentials}
      ></Footer>
    </div>
  );
};

export default ContactUs;
