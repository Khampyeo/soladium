/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const processImage = (file: File, userId: string) => {
  const formData = new FormData();
  formData.append("image", file);

  return axios.post(
    process.env.BASE_URL + `/api/process-image?userId=${userId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    }
  );
};
export const processVideo = (file: File, userId: string) => {
  const formData = new FormData();
  formData.append("video", file);

  return axios.post(
    process.env.BASE_URL + `/api/process-video?userId=${userId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    }
  );
};
