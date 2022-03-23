import React, { useEffect } from "react";
import Nav from "../components/nav";
import Slider from "../components/slider";
import FirstContent from "../components/firstContent";
import SecondContent from "../components/secondContent";
import { Button, makeStyles } from "@material-ui/core";
import string from "../assets/string.svg";
import "../css/home.css";
import "../css/main.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useGetHome } from "../hooks/getHome";
import Helmet from "react-helmet";
const Home = (props) => {
  const classes = styles();
  const { loadingEssentials, essentials } = useGetHome();

  return (
    <div className="main">
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="K6 Pizza and Bars resturant. Order your food now!"
        />
      </Helmet>
      <Nav currentPath={props.currentPath}></Nav>
      <Slider
        essentials={essentials}
        loadingEssentials={loadingEssentials}
      ></Slider>
      <div className="centerIt">
        <FirstContent
          essentials={essentials}
          loadingEssentials={loadingEssentials}
        ></FirstContent>
      </div>

      <img
        src={string}
        width="100%"
        style={{ transform: "translateY(15px)" }}
      ></img>
      <div className="centerIt yellowBack">
        <SecondContent
          essentials={essentials}
          loadingEssentials={loadingEssentials}
        ></SecondContent>
      </div>
      <div className="centerIt grayBack motd">
        <h1>“{loadingEssentials ? "" : essentials.Tagline}”</h1>
      </div>
      <div className="centerIt grayBack">
        <Link to={"/contactUs"}>
          <Button
            variant="contained"
            color="primary"
            classes={{ root: classes.buttonStyle }}
            size="large"
          >
            Book Table
          </Button>
        </Link>
      </div>
      <Footer
        essentials={essentials}
        loadingEssentials={loadingEssentials}
      ></Footer>
    </div>
  );
};
const styles = makeStyles({
  buttonStyle: {
    marginTop: "10px",
  },
});
export default Home;
