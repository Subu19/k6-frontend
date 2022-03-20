import React from "react";
import Nav from "../components/nav";
import Slider from "../components/slider";
import FirstContent from "../components/firstContent";
import SecondContent from "../components/secondContent";
import { Button, makeStyles } from "@material-ui/core";
import string from "../assets/string.svg";
import "../css/home.css";
import "../css/main.css";
import { Link } from "react-router-dom";
const Home = (props) => {
  const classes = styles();
  return (
    <div className="main">
      <Nav currentPath={props.currentPath}></Nav>
      <Slider></Slider>
      <div className="centerIt">
        <FirstContent></FirstContent>
      </div>

      <img
        src={string}
        width="100%"
        style={{ transform: "translateY(15px)" }}
      ></img>
      <div className="centerIt yellowBack">
        <SecondContent></SecondContent>
      </div>
      <div className="centerIt grayBack motd">
        <h1>“Lets meet and chase the flavors at k6”</h1>
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
    </div>
  );
};
const styles = makeStyles({
  buttonStyle: {
    marginTop: "10px",
  },
});
export default Home;
