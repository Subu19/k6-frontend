import React, { useState } from "react";
import Nav from "../components/nav";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";
import "../css/main.css";

import "../css/menu.css";

import { useGetFavourites, useGetMenu } from "../hooks/getMenu";
import urls from "../constants/urls.json";
import Sort from "../components/sort";
import fries from "../assets/fries.jpg";
import veg from "../assets/veg.svg";
import spicy from "../assets/spicy.svg";
import Card from "../components/card";
import { useParams } from "react-router-dom";
import Category from "../components/Category";
import AddToCart from "../components/AddToCart";
import { PopUpContext } from "../Helpers/Context";
import Footer from "../components/Footer";
import { useGetHome } from "../hooks/getHome";
import Helmet from "react-helmet";

const useStyles = makeStyles({});

const Menu = (props) => {
  const { loadingEssentials, essentials } = useGetHome();
  const { category } = useParams();
  const { loadingFav, favourites } = useGetFavourites();
  const [visible, setVisible] = useState(false);
  const [popUpItem, setPopUpItem] = useState({});
  return (
    <div className="main" style={{ minHeight: "100vh" }}>
      <Helmet>
        <title>Menu</title>
        <meta name="description" content="List of our menu." />
      </Helmet>
      <PopUpContext.Provider
        value={{ visible, setVisible, popUpItem, setPopUpItem }}
        className="main"
      >
        <AddToCart props={{ visible, setVisible, popUpItem }}></AddToCart>
        <Nav currentPath={props.currentPath}></Nav>
        <Sort></Sort>
        <div className="containner" style={{ minHeight: "70vh" }}>
          {category ? (
            <Category category={category}></Category>
          ) : loadingFav ? (
            <CircularProgress color="secondary"></CircularProgress>
          ) : (
            <>
              <div className="cat-name">Popular</div>
              {favourites.map((item) => {
                if (item.attributes.menu.data == null) return;
                return (
                  <Card
                    img={
                      urls.media +
                      item.attributes.menu.data.attributes.Picture.data[0]
                        .attributes.formats.thumbnail.url
                    }
                    title={item.attributes.menu.data.attributes.Name}
                    desc={item.attributes.menu.data.attributes.Description}
                    veg={item.attributes.menu.data.attributes.Veg}
                    spicy={item.attributes.menu.data.attributes.Spicy}
                    price={item.attributes.menu.data.attributes.Price}
                    orderable={item.attributes.menu.data.attributes.orderable}
                    menuId={item.attributes.menu.data.id}
                  ></Card>
                );
              })}
            </>
          )}
        </div>
      </PopUpContext.Provider>
      <Footer
        essentials={essentials}
        loadingEssentials={loadingEssentials}
      ></Footer>
    </div>
  );
};

export default Menu;
