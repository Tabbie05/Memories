import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
 
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors({ origin: 'http://localhost:5173' }));
app.use('/posts', postRoutes);


const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Memories_db')
.then(() => app.listen(PORT, () => console.log(`MongoDB connected! Server running on PORT: ${PORT}`)))
.catch((error) => console.error('MongoDB connection error:', error.message));
