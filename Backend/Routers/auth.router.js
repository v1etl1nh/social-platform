import mongoose from "mongoose";
import express from "express";
import { register } from "../Controller/auth.controller.js";

const router = express.Router();

// Register route
router.post("/register", register);

export default router;
