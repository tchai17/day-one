import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import Routes from "./routes/Routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", Routes);

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
