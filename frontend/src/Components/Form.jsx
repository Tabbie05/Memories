import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";

const Form = () => {
  return (
    <Paper elevation={4} className="p-6 max-w-md mx-auto mt-6">
      <Typography variant="h5" className="mb-4 text-center">
        Create a Memory
      </Typography>
      <br />
      <form>
        <Grid container spacing={1}>
          {/* Creator Input */}
          <Grid item xs={12}>
            <TextField
              label="Creator"
              variant="outlined"
              fullWidth
              name="creator"
              sx={{ width: "400px" }}
            />
          </Grid>

          {/* Title Input */}
          <Grid item xs={12}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              name="title"
              sx={{ width: "400px" }}
            />
          </Grid>

          {/* Message Input */}
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="message"
              sx={{ width: "400px" }}
            />
          </Grid>

          {/* Tags Input */}
          <Grid item xs={12}>
            <TextField
              label="Tags"
              variant="outlined"
              fullWidth
              name="tags"
              sx={{ width: "400px" }}
            />
          </Grid>
          <Button>
            <input type="file" />
          </Button>

          {/* Buttons */}
          <Button variant="contained" color="primary" fullWidth type="submit">
            Submit
          </Button>
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
            type="submit"
          >
            Clear
          </Button>
        </Grid>
      </form>
    </Paper>
  );
};

export default Form;
