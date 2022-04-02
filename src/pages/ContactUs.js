import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/nav";
import "../css/main.css";
import "../css/contact.css";
import { Button } from "@material-ui/core";
import { useGetHome } from "../hooks/getHome";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import urls from "../constants/urls.json";
import facebook from "../assets/facebook.png";
import tiktok from "../assets/tiktok.png";
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
      <div className="contact-containner">
        <div className="contact-imgbox">
          <img
            src={
              "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
            }
            className="contact-img"
          ></img>
        </div>
        <div className="contact-box">
          <div className="form-box">
            <div className="contact-title">Get In Touch</div>
            <form
              action="https://formsubmit.co/k6pizzaandbar@gmail.com"
              method="POST"
              className="contact-form"
            >
              <div className="contact-form-title">Name:</div>
              <input
                type={"text"}
                name={"name"}
                required
                className="contactInput"
              ></input>
              <div className="contact-form-title">Email:</div>
              <input
                required
                type={"email"}
                name={"email"}
                className="contactInput"
              ></input>
              <div className="contact-form-title">Phone No:</div>
              <input
                required
                type={"tel"}
                name={"phone"}
                className="contactInput"
              ></input>
              <div className="contact-form-title">Message:</div>
              <textarea
                required
                name="message"
                className="contactInput"
              ></textarea>
              <input type="hidden" name="_next" value={urls.currentUrl}></input>
              <input type={"hidden"} name="_subject" value={"New Message"} />
              <input type={"hidden"} name="_captcha" value="false"></input>
              <Button
                type={"submit"}
                variant={"contained"}
                size={"small"}
                color={"secondary"}
                style={{ width: "100px" }}
              >
                Message
              </Button>
            </form>
          </div>
          <div className="contact-infos">
            <div className="contact-info">
              {" "}
              <i
                class="fa fa-phone"
                style={{
                  fontSize: "25px",
                  color: "#25D366",
                  marginRight: "10px",
                }}
              ></i>
              {loadingEssentials ? "" : essentials.PhoneNumber}
            </div>
            <div className="contact-info">
              <i
                class="material-icons"
                style={{ fontSize: "25px", marginRight: "10px", color: "red" }}
              >
                mail
              </i>
              k6pizzaandbar@gmail.com
            </div>
            <iframe
              width="100%"
              height="350"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              className="contact-map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=85.2918863296509%2C27.727512101996535%2C85.29970228672029%2C27.73124904731783&amp;layer=transportmap&amp;marker=27.729380590672307%2C85.29579430818558"
            ></iframe>
          </div>
        </div>
        <div
          className="contact-box"
          style={{
            backgroundColor: "rgb(242, 242, 242)",
            marginBottom: "20px",
            position: "relative",
            justifyContent: "center",
          }}
        >
          <div className="other-contacts-title">Contact With Us</div>
          <div className="other-contacts">
            <div className="other-contact">
              <img className="other-contact-img" src={facebook}></img>
              <Link
                to={
                  loadingEssentials
                    ? ""
                    : essentials.FacebookLink
                    ? essentials.FacebookLink
                    : ""
                }
              >
                @k6pizzaandbar
              </Link>
            </div>
            <div className="other-contact">
              <img className="other-contact-img" src={whatsapp}></img>
              <div>{loadingEssentials ? "" : essentials.PhoneNumber}</div>
            </div>
            <div className="other-contact">
              <img className="other-contact-img" src={tiktok}></img>
              <div>@k6pizzaandbar</div>
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
