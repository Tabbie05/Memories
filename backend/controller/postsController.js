import postModel from "../models/postModel.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json(err);
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newpost = new postModel(post);
  try {
    await newpost.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
