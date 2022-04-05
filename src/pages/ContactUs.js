import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/nav";
import "../css/main.css";
import "../css/contact.css";
import {
  Button,
  makeStyles,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import { useGetHome } from "../hooks/getHome";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import urls from "../constants/urls.json";
import facebook from "../assets/Facebook.svg";
import Mail from "../assets/Mail.svg";
import Call from "../assets/Call.svg";
import insta from "../assets/Insta.svg";
import tiktok from "../assets/Tiktok.svg";
import whatsapp from "../assets/Whatsapp.svg";
import { grey } from "@material-ui/core/colors";
const ContactUs = (props) => {
  const classes = styles();

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
              loadingEssentials
                ? ""
                : essentials.ContactUsBanner
                ? urls.media + essentials.ContactUsBanner.data.attributes.url
                : ""
            }
            className="contact-img"
          ></img>
        </div>
        <div className="contact-box">
          <div className="form-box">
            <div className="contact-title">Get In Touch</div>
            <form
              action="https://formsubmit.co/support@k6pizzaandbar.com.np"
              method="POST"
              className="contact-form"
            >
              {/* <div className="contact-form-title">Name:</div> */}
              <TextField
                className="user-input"
                required
                id="outlined-required"
                label="Name"
                classes={{ root: classes.inputStyle }}
                variant="outlined"
                name="Name"
                defaultValue={
                  localStorage.getItem("First Name") +
                  " " +
                  localStorage.getItem("Last Name")
                }
                margin="dense"
              />
              {/* <input

                type={"text"}
                name={"name"}
                required
                className="contactInput"
              ></input> */}
              {/* <div className="contact-form-title">Email:</div> */}
              {/* <input
                required
                type={"email"}
                name={"email"}
                className="contactInput"
              ></input> */}
              <TextField
                className="user-input"
                required
                id="outlined-required"
                type={"email"}
                label="Email"
                classes={{ root: classes.inputStyle }}
                variant="outlined"
                name="Email"
                margin="dense"
              />
              {/* <div className="contact-form-title">Phone No:</div> */}
              <TextField
                className="user-input"
                required
                id="outlined-required"
                label="Phone Number"
                variant="outlined"
                name="Phone_No"
                color="primary"
                defaultValue={localStorage.getItem("Phone Number")}
                type={"tel"}
                inputProps={{ pattern: "[0-9]{10}" }}
                margin="dense"
                classes={{ root: classes.inputStyle }}
                // style={{ width: "300px", maxWidth: "50%" }}
              />
              {/* <input
                required
                type={"tel"}
                name={"phone"}
                className="contactInput"
              ></input> */}
              {/* <div className="contact-form-title">Message:</div> */}
              {/* <textarea
                required
                name="message"
                className="contactInput"
              ></textarea> */}
              {/* <TextField
                className="user-input"
                required
                id="outlined-required"
                label="Phone Number"
                variant="outlined"
                name="phone_no"
                color="primary"
                defaultValue={localStorage.getItem("Phone Number")}
                type={""}
                inputProps={{ pattern: "[0-9]{10}" }}
                margin="dense"
                classes={{ root: classes.inputStyle }}
              /> */}
              <TextareaAutosize
                aria-label="minimum height"
                className="user-input"
                name="Message"
                classes={{ root: classes.inputStyle }}
                minRows={3}
                placeholder={"Type your Message here!"}
                style={{
                  marginTop: 10,
                  borderColor: "gray",
                  borderRadius: 5,
                  marginBottom: 10,
                }}
              />
              <input type="hidden" name="_next" value={urls.currentUrl}></input>
              <input
                type={"hidden"}
                name="_subject"
                value={"New Message Alert!!!!!!!!"}
              />
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
            <div className="contact-info-containner">
              <div className="contact-info">
                {loadingEssentials ? "" : essentials.PhoneNumber}
              </div>
              <div className="contact-info">support@k6pizzaandbar.com.np</div>
              <div className="contact-info-logos">
                <img src={Call} className="contact-info-logo"></img>
                <img src={Mail} className="contact-info-logo"></img>
              </div>
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
            marginBottom: "20px",
            position: "relative",
            justifyContent: "center",
          }}
        >
          <div className="other-contacts-title">Find Us Here</div>
          <div className="other-contacts">
            <div className="other-contact-box">
              <div className="other-contact">
                <img className="other-contact-img" src={insta}></img>
                <div className="other-contact-desc">@k6pizzaandbar</div>
              </div>
              <div className="other-contact">
                <img className="other-contact-img" src={facebook}></img>
                <Link
                  className="other-contact-desc"
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
                <div className="other-contact-desc">
                  {loadingEssentials
                    ? ""
                    : essentials.PhoneNumber
                    ? essentials.PhoneNumber.replace("+977", "")
                    : ""}
                </div>
              </div>
              <div className="other-contact">
                <img className="other-contact-img" src={tiktok}></img>
                <div className="other-contact-desc">@k6pizzaandbar</div>
              </div>
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

const styles = makeStyles({
  inputStyle: {
    marginRight: "10px",
  },
});
export default ContactUs;
