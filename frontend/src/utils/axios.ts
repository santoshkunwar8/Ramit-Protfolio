import axios from "axios"

export const AxiosInstance = axios.create({
    baseURL: `https://backend.ramitneupane.com.np/api`,
    withCredentials:true
})

// http://localhost:8000/api  
// https://codewithmama.onrender.com/api  
