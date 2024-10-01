import axiosBase from "axios";
import { CLOUDINARY_API } from "../config";

const axios = axiosBase.create({
  baseURL: `${CLOUDINARY_API}/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}`,
});

export default axios;
