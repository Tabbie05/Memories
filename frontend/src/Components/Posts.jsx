import React from "react";
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"; // Three dots icon
import memories from '../assets/images.jpeg'

const Posts = () => {
  return (
    <Card sx={{ width: 345, position: "relative",mt:4 }}>
      <IconButton sx={{ position: "absolute", top: 8, right: 8 }}>
        <MoreHorizIcon />
      </IconButton>

      <CardMedia
        component="img"
        height="140"
        image={memories} 
        alt="Post Image"
      />

      {/* Post content */}
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" , position : 'absolute', top:0 , left: 0}}>
         John Doe
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Post Title
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
          This is the message for the post. It contains some information about the post content.
        </Typography>

        {/* Likes and Comments */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2" color="text.secondary">
            Likes: 100
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Comments: 30
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Posts;
