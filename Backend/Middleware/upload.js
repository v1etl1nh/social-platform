import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../Config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folder = "Social-App";

    if (file.fieldname === "avatar") {
      folder = "Social-App/Avatars";
    } else if (file.fieldname === "banner") {
      folder = "Social-App/Banners";
    }
    return {
      folder,
      allowed_formats: ["jpg", "png", "jpeg"],
    };
  },
});

const upload = multer({ storage: storage });

export default upload;
