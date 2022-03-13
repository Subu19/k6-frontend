import React, { useEffect } from "react";
import { useGetCategory } from "../hooks/getMenu";
import Card from "./card";
import urls from "../constants/urls.json";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
const Category = (props) => {
  const { category } = props;
  const { loadingCat, categoryMenus } = useGetCategory(category);
  return (
    <>
      {loadingCat ? (
        <CircularProgress color="secondary"></CircularProgress>
      ) : (
        <>
          <div className="cat-name">{categoryMenus.attributes.Name}</div>
          {categoryMenus.attributes.categories.data.map((item) => {
            return (
              <>
                <div className="sub-cat-box">
                  <div className="sub-cat-name">{item.attributes.Name}</div>
                  <hr className="mid-seperator"></hr>
                </div>
                <div className="containner">
                  {item.attributes.menus.data.map((menu) => {
                    return (
                      <Card
                        menuId={menu.id}
                        img={
                          urls.media +
                          menu.attributes.Picture.data[0].attributes.formats
                            .thumbnail.url
                        }
                        title={menu.attributes.Name}
                        desc={menu.attributes.Description}
                        veg={menu.attributes.Veg}
                        spicy={menu.attributes.Spicy}
                        price={menu.attributes.Price}
                        orderable={menu.attributes.orderable}
                      ></Card>
                    );
                  })}
                </div>
              </>
            );
          })}
        </>
      )}
    </>
  );
};

export default Category;
