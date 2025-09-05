import User from "../Models/auth.models.js";
import Profile from "../Models/auth.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;
export const register = async (req, res) => {
  try {
    const exitingEmail = await User.findByEmail(req.body.email);
    if (exitingEmail) {
      return res.status(400).json({ message: "Email already in use" });
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;
      const newUser = new User(req.body);
      await newUser.save();

      res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const login = async (req, res) => {
  try {
    const user = await User.findByEmail(req.body.email);
    if (!user) {
      return res
        .status(400)
        .json({ message: "Tài khoản hoặc mật khẩu không đúng" });
    } else {
      const hashedPassword = req.body.password.trim();
      const isPasswordValid = await bcrypt.compare(
        hashedPassword,
        user.password
      );
      if (isPasswordValid) {
        const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: "1d" });
        
        return res.status(200).json({ message: "Login successful", user:{id:user.id, firstName: user.firstName, lastName: user.lastName},token });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const uploadProfile = async (req, res) => {
  try {
    console.log(req.files);
    // Lúc này req.files.avatar[0].path = URL của ảnh trên Cloudinary
    // req.files.banner[0].path = URL của ảnh trên Cloudinary

    const profilePic = {
      avatar: req.files?.avatar ? req.files.avatar[0].path : null,
      banner: req.files?.banner ? req.files.banner[0].path : null,
    };

    res.status(201).json({
      message: "Profile uploaded to Cloudinary",
      data: profilePic,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Upload failed" });
  }
};
