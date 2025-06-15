import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_ROOT_URL as string;
export const AxiosInstance = axios.create({
  //   baseURL: `https://backend.ramitneupane.com.np/api`,
  // baseURL: `https://codewithmama.onrender.com/api`,
  baseURL: `${baseURL}/api`,
  withCredentials: true,
});

// http://localhost:8000/api
// https://codewithmama.onrender.com/api
