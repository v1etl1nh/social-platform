import User from "../Models/auth.models.js";
export const register = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
