
export const allPosts =  (posts = [], action) => {
    console.log(action, "action")
    switch (action.type) {
      case "GET_POSTS":
        if(posts.length < 1){
           return action.payload;
        }else{
          return posts;
        }
      case "CREATE_POST":
        return [...posts, action.payload];
      default:
        return posts;
    }
  };