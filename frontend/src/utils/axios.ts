import axios from "axios"

export const AxiosInstance = axios.create({
    baseURL: `https://santoshapi.onrender.com/api`,
    withCredentials: true
})
