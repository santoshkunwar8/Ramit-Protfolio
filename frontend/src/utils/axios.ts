import axios from "axios"

export const AxiosInstance = axios.create({
    baseURL: `https://codewithmama.onrender.com/api`,
    withCredentials:true
})

// http://localhost:8000/api  
// https://codewithmama.onrender.com/api  
