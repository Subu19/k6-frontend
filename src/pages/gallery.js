import {
  CircularProgress,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@material-ui/core";
import React from "react";
import Nav from "../components/nav";
import { useGetGallery } from "../hooks/getGallery";
import urls from "../constants/urls.json";
import Footer from "../components/Footer";
import { useGetHome } from "../hooks/getHome";
import Helmet from "react-helmet";

import GalleryLib from "react-photo-gallery";
// import styles

const Gallery = (props) => {
  const { loadingEssentials, essentials } = useGetHome();
  const { loadingGallery, gallery } = useGetGallery();
  return (
    <div className="main">
      <Helmet>
        <title>Gallery</title>
        <meta name="description" content="Gallery of our resturant." />
      </Helmet>
      <Nav currentPath={props.currentPath}></Nav>

      {loadingGallery ? (
        <div
          className="centerIt"
          style={{ minHeight: "100vh", paddingTop: "70px" }}
        >
          <CircularProgress></CircularProgress>
        </div>
      ) : (
        <div
          className="containner"
          style={{
            marginBottom: "100px",
            height: "100vh",
          }}
        >
          <div
            className="centerIt"
            style={{ marginBottom: "50px", marginTop: "60px" }}
          >
            <h1 className="yellow">Gallery</h1>
          </div>
          <GalleryLib margin={2} photos={gallery}></GalleryLib>
          {/* <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            {gallery.map((image) => {
              return (
                <a
                  href={
                    urls.media + image.attributes.Picture.data.attributes.url
                  }
                >
                  <img
                    class="img-responsive"
                    src={
                      urls.media +
                      image.attributes.Picture.data.attributes.formats.thumbnail
                        .url
                    }
                  />
                </a>
              );
            })}
          </LightGallery> */}
        </div>
      )}
      <Footer
        essentials={essentials}
        loadingEssentials={loadingEssentials}
      ></Footer>
    </div>
  );
};

export default Gallery;
