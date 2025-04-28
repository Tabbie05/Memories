import React from "react";
import { Container, Paper, Typography, Grid } from "@mui/material";
import Form from "./Components/Form";
import Posts from './Components/Posts'
import memories from './assets/images.jpeg'

const App = () => {
  return (
    <Container>
      <Paper elevation={4} className="h-15 flex justify-center items-center text-center bg-cover bg-center mt-4" >
        <div className="flex items-center space-x-4">
          <Typography variant="h4" className="text-pink-500">
            Memories
          </Typography>
          <img src={memories} alt="memory-img" className="h-16 w-16 object-cover rounded-full" />
        </div>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Posts />
        </Grid>
        <Grid item xs={12}>
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
