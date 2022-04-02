import axios from "axios";
import React, { useEffect, useState } from "react";
import urls from "../constants/urls.json";
export const useGetHome = () => {
  const [loadingEssentials, setLoadingEssentials] = useState(true);
  const [essentials, setEssentials] = useState({});

  const getEssentials = () => {
    axios.get(urls.api + "/essential?populate=%2A").then((res) => {
      if (res.data.data != null) {
        setLoadingEssentials(false);
        setEssentials(res.data.data.attributes);
      } else {
        console.log(res);
      }
    });
  };

  useEffect(() => {
    setLoadingEssentials(true);
    getEssentials();
  }, []);

  return { loadingEssentials, essentials };
};
