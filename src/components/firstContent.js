import React from "react";
import { motion } from "framer-motion";

const FirstContent = () => {
  return (
    <div className="firstContent" style={{ marginTop: "30px" }}>
      <div className="content-text">
        <motion.div
          className="content-title"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, transition: { duration: 0.7 }, opacity: 1 }}
          viewport={{ once: false }}
        >
          Delightful dining experience for every one
        </motion.div>
        <motion.div
          className="content-desc"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, transition: { duration: 0.7 }, opacity: 1 }}
          viewport={{ once: false }}
        >
          With three section we’re able to offer three different experiences to
          our guest The cabin area is specialized for private parties and
          privacy while you dine and have some quality time with your spouse, we
          care about what the privacy means to our guest. The casual dining area
          where you could socialize and have a nice hangout with your friends
          and family, we care about what entertainment and openness meant to our
          guests. Lastly, let’s have a drink in the bar section and let all the
          fun come in.
        </motion.div>
      </div>
      <motion.div
        className="content-image"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, transition: { duration: 0.5 }, opacity: 1 }}
        viewport={{ once: false }}
      >
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/15/df/2e/8d/ambiance.jpg"
          className="content-img"
        ></img>
      </motion.div>
    </div>
  );
};

export default FirstContent;
