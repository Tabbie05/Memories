import React, { useEffect } from "react";
import { Container, Paper, Typography, Box } from "@mui/material";
import Form from "./Components/Form";
import Posts from "./Components/Posts";
import memories from "./assets/images.jpeg";
import usePostStore from "./store/postStore.js";

const App = () => {
  const { posts, fetchPosts } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      {/* Header */}
      <Paper
        elevation={4}
        sx={{
          p: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mr: 1 }}>
          Memories
        </Typography>
        <img
          src={memories}
          alt="memory"
          style={{ width: 60, height: 60, borderRadius: "50%" }}
        />
      </Paper>

      {/* Flex Layout: Posts on left, Form on right */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse", // form to right, posts to left
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* Form */}
        <Box
          sx={{
            width: "400px",
            flexShrink: 0,
          }}
        >
          <Paper elevation={3} sx={{ p: 2 }}>
            <Form />
          </Paper>
        </Box>

        {/* Posts */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {posts.map((post, idx) => (
            <Box key={idx} sx={{ width: "300px", flexShrink: 1 }}>
              <Posts post={post} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default App;
