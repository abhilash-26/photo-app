import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function MediaCard({ photo, handlePopUp }) {
  //   console.log(photo);
  return (
    <Card
      sx={{ maxWidth: 345, margin: 5, minWidth: 250 }}
      onClick={() => handlePopUp(photo)}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={photo.urls.thumb}
        title="green iguana"
      />
      <CardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar src={photo.user.profile_image.small} />
          {photo.user.username}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <ThumbUpIcon />
            {photo.likes}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
