import axios from "axios";
import React, { useEffect, useState } from "react";
import urls from "../constants/urls.json";

export const useGetGallery = () => {
  const [loadingGallery, setLoadingGallery] = useState(true);
  const [galleryTemp, setGalleryTemp] = useState([]);
  const [gallery, setGallery] = useState([]);

  const getGallery = () => {
    axios.get(urls.api + "/galleries?populate=%2A").then(async (res) => {
      const newGallary = await Promise.all(
        res.data.data.map((image) => {
          return {
            src: urls.media + image.attributes.Picture.data.attributes.url,
            width: image.attributes.Picture.data.attributes.width,
            height: image.attributes.Picture.data.attributes.height,
          };
        })
      );
      setGallery(newGallary);
      setLoadingGallery(false);
    });
  };
  useEffect(() => {
    setLoadingGallery(true);
    getGallery();
  }, []);
  return { loadingGallery, gallery };
};
