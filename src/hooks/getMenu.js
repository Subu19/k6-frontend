import React, { useEffect, useState } from "react";
import axios from "axios";
import urls from "../constants/urls.json";
export const useGetMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loadingMenu, setLoadingMenu] = useState(true);

  const getMenu = () => {
    axios.get(urls.api + "/menus?populate=%2A").then((res) => {
      setMenu(res.data.data);
      setLoadingMenu(false);
    });
  };
  useEffect(() => {
    getMenu();
  }, []);
  return { loadingMenu, menu };
};

export const useGetFavourites = () => {
  const [favourites, setFav] = useState([]);
  const [loadingFav, setLoadingFav] = useState(true);

  const getMenu = () => {
    axios
      .get(urls.api + "/favourites?populate[menu][populate][0]=Picture")
      .then((res) => {
        console.log(res);

        setFav(res.data.data);
        setLoadingFav(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getMenu();
  }, []);
  return { loadingFav, favourites };
};

export const useGetCategory = (category) => {
  const [categoryMenus, setCategory] = useState([]);
  const [loadingCat, setLoadingCat] = useState(true);
  const getMenu = () => {
    axios
      .get(
        urls.api +
          `/main-categories?populate[categories][populate][menus][populate][0]=Picture&filters[name][$eq]=${category}`
      )
      .then((res) => {
        setCategory(res.data.data[0]);
        setLoadingCat(false);
      });
  };
  useEffect(() => {
    setLoadingCat(true);
    getMenu();
  }, [category]);
  return { loadingCat, categoryMenus };
};
// populate[categories][populate][menus][populate][0]=Picture
