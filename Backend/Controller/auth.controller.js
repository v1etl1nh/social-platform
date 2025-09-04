import User from "../Models/auth.models.js";
import Profile from "../Models/auth.models.js";
import bcrypt from "bcryptjs";
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
