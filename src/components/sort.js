import React from "react";
import fries from "../assets/fries.jpg";
import cat1 from "../assets/classic-canape-trio-90416-1.jpeg";
import { Link } from "react-router-dom";
const Sort = () => {
  return (
    <div className="sort-containner">
      <div className="category-containner">
        <Link to={"/menu/starter"} className="category" id="cat1">
          <div className="cat-content">
            <div>Starter</div>
          </div>
        </Link>
        <Link to={"/menu/mainCourse"} className="category" id="cat2">
          <div className="cat-content">
            <div>Main</div>
            <div>Course</div>
          </div>
        </Link>
        <Link to={"/menu/dessert"} className="category" id="cat3">
          <div className="cat-content">
            <div>Dessert</div>
          </div>
        </Link>
        <Link to={"/menu/beverage"} className="category" id="cat4">
          <div className="cat-content">
            <div>Beverage</div>
          </div>
        </Link>
        <Link to={"/menu/pizza"} className="category" id="cat5">
          <div className="cat-content">
            <div>Pizza</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sort;
