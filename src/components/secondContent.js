import React from "react";
import { motion } from "framer-motion";
import { useGetHome } from "../hooks/getHome";
import { CircularProgress } from "@material-ui/core";
import urls from "../constants/urls.json";
const SecondContent = (props) => {
  const { loadingEssentials, essentials } = props;
  return (
    <div className="secondContent">
      <svg
        width="1727"
        height="241"
        viewBox="0 0 1727 241"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="curve2"
      >
        <path
          d="M773.5 102C285.5 250.5 302.5 227.833 -3 241L1727 241V0C1685.5 118.5 1137.76 -8.84721 773.5 102Z"
          fill="#555555"
        />
      </svg>
      {loadingEssentials ? (
        <CircularProgress></CircularProgress>
      ) : (
        <>
          <motion.div
            className="content-image"
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, transition: { duration: 0.5 }, opacity: 1 }}
            viewport={{ once: false }}
          >
            {essentials.HomeSecondContentImage ? (
              <>
                <img
                  src={
                    urls.media +
                    essentials.HomeSecondContentImage.data.attributes.url
                  }
                  width={"100%"}
                ></img>
              </>
            ) : (
              ""
            )}
          </motion.div>
          <div className="content-text">
            <motion.div
              className="content-title"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, transition: { duration: 0.7 }, opacity: 1 }}
              viewport={{ once: false }}
            >
              {essentials.HomeSecondContentTitle}
            </motion.div>
            <motion.div
              className="content-desc"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, transition: { duration: 0.7 }, opacity: 1 }}
              viewport={{ once: false }}
            >
              {essentials.HomeSecondContentText}
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

export default SecondContent;
