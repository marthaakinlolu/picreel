import axios from "axios";

const url = "http://localhost:5000";

const createPost = (newPost) => axios.post(`${url}/posts`, newPost);
export default {
    createPost
  };