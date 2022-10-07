const express = require ("express")
const mongoose = require("mongoose")
const Post = require("./models/post");

const app = express();
//mongo set up
const url = "mongodb+srv://martha:pass@cluster0.jhc0mmx.mongodb.net/picreel?retryWrites=true&w=majority"
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log("connected to dB!");
  }
);
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
// app.get("/", (req, res) => {
//     res.send("Welcome to Picreel");
//   });
app.post("/post", async(req, res) => {
  console.log(req)
  const {file } = req.body;
  const newPost = await new Post({file:file });
  await newPost.save();
});
app.listen(5000, () => console.log(`connected on port:5000`));