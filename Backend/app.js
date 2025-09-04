import express from "express";
import ConnectDB from "./Config/db.js";
import authRouter from "./Routers/auth.router.js";
import cors from "cors";
import dotenv from "dotenv";

const port = 8080;
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
app.use("/api/auth", authRouter);
ConnectDB().then(() => {
  app.listen(port, () => {
    console.log("Server is running on port 8080");
  });
});
