import React from "react";
import { Container, Paper, Typography, Grid } from "@mui/material";
import Form from "./Components/Form";
import Posts from './Components/Posts'
import memories from './assets/images.jpeg'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../backend/controller/postsController";
const App = () => {
  const postList = [1, 2, 3, 4]; // Or however many posts you want
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPosts)
  },[dispatch])
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

      <Grid container spacing={2} mt={2}>
        {postList.map((_, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Posts />
          </Grid>
        ))}


      <Grid item xs={12}>
        <Form />
      </Grid>
    </Grid>
    </Container >
  );
};

export default App;
