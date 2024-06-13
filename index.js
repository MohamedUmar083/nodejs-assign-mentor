import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import mentor from "./Routers/mentorRouter.js";
import student from "./Routers/studentRouter.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", mentor);
app.use("/api", student);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Home-Page");
});

app.listen(process.env.PORT, () => {
  console.log("App is running successfully");
});
