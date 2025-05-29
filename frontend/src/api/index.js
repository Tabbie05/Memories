import axios from 'axios'

const url = 'http://localhost:5173'

export const fetchPost = () => axios.get(url)