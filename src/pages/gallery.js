import { ImageList, ImageListItem, ImageListItemBar } from "@material-ui/core";
import React from "react";
import Nav from "../components/nav";
import { useGetGallery } from "../hooks/getGallery";
import urls from "../constants/urls.json";
const Gallery = (props) => {
  const { loadingGallery, gallery } = useGetGallery();
  return (
    <div className="main">
      <Nav currentPath={props.currentPath}></Nav>

      {loadingGallery ? (
        "loading ................."
      ) : (
        <ImageList
          sx={{ width: 500, height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
          style={{ marginTop: "200px" }}
        >
          {gallery.map((item) => (
            <ImageListItem
              key={urls.media + item.attributes.Picture.data.attributes.url}
              cols={item.cols || 1}
              rows={item.rows || 2}
            >
              <img
                src={urls.media + item.attributes.Picture.data.attributes.url}
                loading="lazy"
              />
              <ImageListItemBar
                position="bottom"
                title={item.attributes.Picture.data.attributes.name}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </div>
  );
};

export default Gallery;
