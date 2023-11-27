import axios from "axios"

export const AxiosInstance = axios.create({
    baseURL: `https://codewithmama.onrender.app/api`,
    withCredentials:true
})
