import { data } from '../Data'


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
      console.log(newData, "newData")
      dispatch({ type: "CREATE_POST", payload: newData});
    } catch (err) {
      console.log(err.message);
    }
  };