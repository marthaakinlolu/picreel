import { data } from '../Data'
import api from "../api/index"


export const getPosts = () => async (dispatch) => {
    try {  
      console.log(data);
      dispatch({ type: "GET_POSTS", payload: data });
    } catch (err) {
      console.log(err.message);
    }
  };

  export const createPost = (newData) => async (dispatch) => {
    try {  
      const { data } = await api.createPost(newData);
      dispatch({ type: "CREATE_POST", payload: data });
    } catch (err) {
      console.log(err.message);
    }
  };