import React, { useEffect, useState } from "react";
import MediaCard from "./PhotoCard";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import Switch from "@mui/material/Switch";
import ReactSearchBox from "react-search-box";

import axios from "axios";
import PopUp from "./PopUp";

function PhotoPage() {
  const [photos, setPhotos] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState();
  const [searchValue, setSearchValue] = useState();
  const [bg, setBg] = useState(false);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const getPhoto = async () => {
      const data = await axios({
        method: "get",
        url: "https://api.unsplash.com/photos?client_id=4rcOUoH4m26_QJcFUD6jUIMHWHpWXGWrI6_j-qufDKs",
      });
      setPhotos(data.data);
    };
    getPhoto();
  }, []);

  useEffect(() => {
    const getPhotoSearch = async () => {
      const data = await axios({
        method: "get",
        url: "https://api.unsplash.com/search/photos?client_id=4rcOUoH4m26_QJcFUD6jUIMHWHpWXGWrI6_j-qufDKs",
        params: {
          query: searchValue,
        },
      });
      if (searchValue) {
        setPhotos(data.data.results);
        // console.log(data.data);
      }
    };
    getPhotoSearch();
  }, [searchValue]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleChangeSwitch = (e) => {
    setBg(!bg);
  };
  const handlePopUp = (photo) => {
    console.log(photo);
    setCurrentPhoto(photo);
    setPopup(true);
  };
  const closePopUp = () => {
    setPopup(false);
  };
  return (
    <div
      style={{
        backgroundColor: bg ? "black" : "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          borderBottom: "1px dotted grey",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "Pacifico",
            fontVariant: "titling-caps",
            fontWeight: "lighter",
            color: bg ? "white" : "black",
            fontSize: 30,
          }}
        >
          image gallary
        </h2>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={handleChange}
          style={{ backgroundColor: "white" }}
        />
        {/* <ReactSearchBox onChange={handleChange} /> */}
        <div>
          <label style={{ color: bg ? "white" : "black" }}>Dark mode</label>

          <Switch
            aria-label="dark mode"
            checked={bg}
            onChange={handleChangeSwitch}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {photos &&
          photos.map((item, index) => {
            return (
              <MediaCard photo={item} key={index} handlePopUp={handlePopUp} />
            );
          })}
      </div>
      {popup && (
        <PopUp handleClosePopUp={closePopUp} currentPhoto={currentPhoto} />
      )}
    </div>
  );
}

export default PhotoPage;
