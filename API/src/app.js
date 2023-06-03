import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", function () {
  console.log("1");
});
mongoose.connect("mongodb://127.0.0.1:27017/Angular");
export const viteNodeApp = app;
