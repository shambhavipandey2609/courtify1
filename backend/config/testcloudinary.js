import { v2 as cloudinary } from "cloudinary";
import "dotenv/config"; // Load environment variables from .env
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

(async () => {
  try {
    const result = await cloudinary.uploader.upload("C:/Users/pande/OneDrive/Desktop/courtify/frontend/src/assets/Corporate_Lawyer.png", {
      resource_type: "image",
    });
    console.log("Image uploaded successfully:", result.secure_url);
  } catch (error) {
    console.error("Cloudinary upload error:", error);
  }
})();
