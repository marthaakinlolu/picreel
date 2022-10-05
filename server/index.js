const express = require ("express")
const mongoose = require("mongoose")

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
// app.get("/", (req, res) => {
//     res.send("Welcome to Picreel");
//   });
app.listen(5000, () => console.log(`connected on port:5000`));