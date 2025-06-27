import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchPost = () => axios.get(`${API_URL}/posts`);
export const createPost = (postData) => axios.post(`${API_URL}/posts`, postData);
