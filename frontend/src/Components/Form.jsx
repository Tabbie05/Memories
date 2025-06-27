import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import usePostStore from '../store/postStore.js';  // Import your Zustand store

const Form = () => {
  // Local state for form inputs
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""  // we'll leave file handling for later
  });

  const addPost = usePostStore(state => state.addPost);

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert tags from string to array by splitting on commas
    const formattedPost = {
      ...postData,
      tags: postData.tags.split(",").map(tag => tag.trim())
    };

    addPost(formattedPost);

    // Clear form
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: ""
    });
  };

  return (
    <Paper elevation={4} className="p-6 max-w-md mx-auto mt-6">
      <Typography variant="h5" className="mb-4 text-center">
        Create a Memory
      </Typography>
      <br />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid columns={12}>
            <TextField
              label="Creator"
              variant="outlined"
              fullWidth
              name="creator"
              value={postData.creator}
              onChange={handleChange}
              sx={{ width: "340px" }}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              name="title"
              value={postData.title}
              onChange={handleChange}
              sx={{ width: "340px" }}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="message"
              value={postData.message}
              onChange={handleChange}
              sx={{ width: "340px" }}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Tags (comma separated)"
              variant="outlined"
              fullWidth
              name="tags"
              value={postData.tags}
              onChange={handleChange}
              sx={{ width: "340px" }}
              required
            />
          </Grid>

          {/* TODO: handle file upload for selectedFile */}

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" fullWidth type="submit">
              Submit
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button

              fullWidth
              sx={{
                border: "2px solid red",
                color: "red",
                "&:hover": {
                  bgcolor: "red",
                  color: "white",
                },
              }}
              type="button"
              onClick={() => setPostData({ creator: "", title: "", message: "", tags: "", selectedFile: "" })}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Form;
