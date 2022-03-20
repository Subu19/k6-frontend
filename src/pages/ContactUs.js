import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/nav";
import "../css/main.css";
import "../css/contact.css";
import { Button } from "@material-ui/core";
import { useGetHome } from "../hooks/getHome";
import { Link } from "react-router-dom";

const ContactUs = (props) => {
  const { loadingEssentials, essentials } = useGetHome();
  return (
    <div className="main">
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
              src="https://www.stephenvilletx.gov/sites/default/files/styles/gallery500/public/imageattachments/citysecretary/page/19161/facebook_icon_130940.png"
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
              src="https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo-whatsapp-512.png"
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
