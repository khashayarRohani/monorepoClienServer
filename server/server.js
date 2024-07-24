import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.json("Welcome to Api");
});

app.post("/joke", function (request, response) {
  // retrieve the information from the form
  console.log(request.body);

  response.json(request.body);
  response.json({ message: "Thank you for making a new entry" });
});

app.listen(8181, function (req, res) {
  console.log("you are listening to port 8181");
});
