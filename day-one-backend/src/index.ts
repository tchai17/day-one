import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (request: Request, response: Response) => {
  response.send("Hello, World!");
});

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => {
    console.log("App connected to database");
    app.listen(7500, () => {
      console.log("server running on port 7500");
    });
  })
  .catch((error) => console.log(error));
