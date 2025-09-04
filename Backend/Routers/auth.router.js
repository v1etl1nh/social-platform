import mongoose from "mongoose";
import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import upload from "../Middleware/upload.js";
import { register } from "../Controller/auth.controller.js";
import { uploadProfile } from "../Controller/auth.controller.js";
const router = express.Router();

// Register route
router.post("/register", register);
router.post(
  "/upload/:id",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "banner", maxCount: 1 },
  ]),
  uploadProfile
);

export default router;
