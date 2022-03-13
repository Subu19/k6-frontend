import { Button } from "@material-ui/core";
import React, { useState } from "react";

const PopUp = ({ props }) => {
  const { popupVisible, setPopupVisible, context, title } = props;

  return (
    <div className={popupVisible ? "addToCart" : "addToCart invisible"}>
      <div className={popupVisible ? "ac-box" : "ac-box invisible2"}>
        {context ? (
          <>
            <h3 style={{ color: "green", margin: "20px" }}>{title}</h3>
            <br></br>
            <div style={{ margin: "20px" }}>{context}</div>
            <Button
              color="primary"
              variant="outlined"
              style={{ margin: "30px", width: "100px" }}
              onClick={() => {
                setPopupVisible(false);
              }}
            >
              Close
            </Button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PopUp;
