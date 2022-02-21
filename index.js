import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import PostRoutes from "./routes/posts.js";

const app = express();
const PORT = process.env.PORT || 5555;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello To Api");
});

app.use("/posts", PostRoutes);
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected");
    app.listen(PORT, () => {
      console.log("Your Server is Up and Running...");
    });
  })
  .catch((error) => console.log(error.message));
