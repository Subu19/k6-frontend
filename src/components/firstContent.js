import React from "react";
import { motion } from "framer-motion";
import { CircularProgress } from "@material-ui/core";
import urls from "../constants/urls.json";
const FirstContent = (props) => {
  const { essentials, loadingEssentials } = props;
  return (
    <div className="firstContent" style={{ marginTop: "30px" }}>
      {loadingEssentials ? (
        <CircularProgress></CircularProgress>
      ) : (
        <>
          <div className="content-text">
            <motion.div
              className="content-title"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, transition: { duration: 0.7 }, opacity: 1 }}
              viewport={{ once: true }}
            >
              {essentials.HomeFirstContentTitle}
            </motion.div>
            <motion.div
              className="content-desc"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, transition: { duration: 0.7 }, opacity: 1 }}
              viewport={{ once: true }}
            >
              {essentials.HomeFirstContentText}
            </motion.div>
          </div>
          <motion.div
            className="content-image"
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, transition: { duration: 0.5 }, opacity: 1 }}
            viewport={{ once: true }}
          >
            {
              essentials.HomeFirstContentImage ? (
                <img
                  src={
                    urls.media +
                    essentials.HomeFirstContentImage.data.attributes.url
                  }
                  className="content-img"
                ></img>
              ) : (
                <CircularProgress></CircularProgress>
              )
              /*  */
            }
          </motion.div>
        </>
      )}
    </div>
  );
};

export default FirstContent;
