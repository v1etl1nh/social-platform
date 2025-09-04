import { register } from "module";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  registeredAt: { type: Date, default: Date.now },
  country: String,
  isAdmin: { type: Boolean, default: false },
  sex: String,
  birthday: Date,
  //   avatar: String,
  //   coverImage: String,
});

userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email: email });
};
const profileSchema = new mongoose.Schema({
  avatar: String,
  coverImage: String,
});
const User = mongoose.model("User", userSchema);
const Profile = mongoose.model("Profile", profileSchema);
export default User;
