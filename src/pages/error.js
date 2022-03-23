import React from "react";
import Helmet from "react-helmet";

const Error = () => {
  return (
    <div className="main">
      <Helmet>
        <title>Error</title>
        <meta name="description" content="404 page not found" />
      </Helmet>
      <h1>Error! couldnt find the page</h1>
    </div>
  );
};

export default Error;
