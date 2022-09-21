import { data } from '../Data'

export const getPosts = () => async (dispatch) => {
    try {
        console.log(data)
      dispatch({ type: "GET_POSTS", payload: data });
    } catch (err) {
      console.log(err.message);
    }
  };