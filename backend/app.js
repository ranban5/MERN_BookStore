const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares

app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books
mongoose.set("strictQuery", false);
mongoose
  .connect(
    // "mongodb+srv://admin:nUd0zMDtbX35sTL0@cluster0.5yvzr.mongodb.net/bookStore?retryWrites=true&w=majority"
    "mongodb://admin:q5SKbsEh3D9r5324@ac-0tshvda-shard-00-00.hmsje9u.mongodb.net:27017,ac-0tshvda-shard-00-01.hmsje9u.mongodb.net:27017,ac-0tshvda-shard-00-02.hmsje9u.mongodb.net:27017/bookStore?ssl=true&replicaSet=atlas-ki7486-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(8080);
  })
  .catch(err => console.log(err));

// q5SKbsEh3D9r5324
