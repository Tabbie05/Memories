import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import memories from "../assets/images.jpeg";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";

const Posts = ({ post }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <Card
      sx={{
        width: 300,        // Reduced width
        minHeight: 280,    // Smaller height
        position: "relative",
       
        borderRadius: 2,
        boxShadow: 3,      // slight shadow for better separation
      }}
      className="border rounded-lg"
    >
      <IconButton sx={{ position: "absolute", top: 8, right: 8 }}>
        <MoreHorizIcon />
      </IconButton>

      <CardMedia
        component="img"
        height="120"          // reduced image height
        image={memories}
        alt="Post Image"
      />

      <CardContent sx={{ pt: 1, pb: 1 }}>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: "bold", position: "absolute", top: 10, left: 10 }}
        >
          {post?.creator || "John Doe"}
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
          {post?.title || "Post Title"}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1, height: 50, overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {post?.message ||
            "This is the message for the post. It contains some information about the post content."}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton onClick={handleLike}>
            <ThumbUpIcon sx={{ color: liked ? "blue" : "gray" }} />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Posts;
