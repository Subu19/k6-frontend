import axios from "axios";
import React, { useEffect, useState } from "react";
import urls from "../constants/urls.json";
export const useGetGallery = () => {
  const [loadingGallery, setLoadingGallery] = useState(true);
  const [gallery, setGallery] = useState([]);
  const getGallery = () => {
    axios.get(urls.api + "/galleries?populate=%2A").then((res) => {
      setGallery(res.data.data);
      setLoadingGallery(false);
    });
  };
  useEffect(() => {
    setLoadingGallery(true);
    getGallery();
  }, []);
  return { loadingGallery, gallery };
};
