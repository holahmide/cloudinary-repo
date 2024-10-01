import { CloudinaryImage } from "../types";
import axios from "./axios";

export const uploadImagesToCloudinary = async (
  files: File[]
): Promise<CloudinaryImage[]> => {
  const uploadedImages: CloudinaryImage[] = [];

  for (const file of files) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );

    try {
      const response = await axios.post("/image/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { public_id, secure_url } = response.data;
      uploadedImages.push({
        publicId: public_id,
        url: secure_url,
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error("Failed to upload image to Cloudinary");
    }
  }

  return uploadedImages;
};
