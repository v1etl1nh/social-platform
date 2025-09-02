import { register } from "module";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  //   registeredAt: { type: Date, default: Date.now },
  //   country: String,
  //   isAdmin: { type: Boolean, default: false },
  //   sex: String,
  //   birthday: Date,
  //   avatar: String,
  //   coverImage: String,
  //   followers: { type: Array, default: [] },
  //   following: { type: Array, default: [] },
});
const User = mongoose.model("User", userSchema);
export default User;
