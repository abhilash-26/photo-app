import React from "react";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";

function PopUp({ handleClosePopUp, currentPhoto }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "20%",
        zIndex: "999",
        backgroundColor: "grey",
      }}
    >
      <div>
        <img
          style={{ maxWidth: "100%", height: "auto", maxHeight: "60vh" }}
          src={currentPhoto.urls.full}
        />
        <CloseIcon
          onClick={handleClosePopUp}
          style={{ position: "absolute", right: 0, cursor: "pointer" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={currentPhoto.user.profile_image.small} />
          <p>{currentPhoto.user.username}</p>
        </div>
        <div>
          <ThumbUpIcon />
          {currentPhoto.likes}
          <br />
          Total photos-{currentPhoto.user.total_photos}
          <br />
          Total Likes-{currentPhoto.user.total_likes}
        </div>
      </div>
      <div>Tags -</div>
    </div>
  );
}

export default PopUp;
