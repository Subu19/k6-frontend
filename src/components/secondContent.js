import React from "react";
import { motion } from "framer-motion";

const SecondContent = () => {
  return (
    <div className="firstContent">
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
      <motion.div
        className="content-image"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, transition: { duration: 0.5 }, opacity: 1 }}
        viewport={{ once: false }}
      >
        <img
          src="https://www.pngall.com/wp-content/uploads/2/Meal-PNG-Image-File.png"
          width={"100%"}
        ></img>
      </motion.div>
      <div className="content-text">
        <motion.div
          className="content-title"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, transition: { duration: 0.7 }, opacity: 1 }}
          viewport={{ once: false }}
        >
          Quality food requires quality ingredients
        </motion.div>
        <motion.div
          className="content-desc"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, transition: { duration: 0.7 }, opacity: 1 }}
          viewport={{ once: false }}
        >
          This is where our chefs refuse to compromise, realizing that quality
          ingredients are the best way to a quality plate for our guests. ​ We
          try, where ever possible to source quality, foreign or local,
          sustainable, &amp; environmentally friendly ingredients &amp; products
          throughout our restaurant.
        </motion.div>
      </div>
    </div>
  );
};

export default SecondContent;
