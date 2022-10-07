const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  file: String,
});

const Post = mongoose.model("Posts", postSchema);


module.exports = Post;