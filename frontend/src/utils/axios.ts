import axios from "axios"

export const AxiosInstance = axios.create({
    baseURL: `http://localhost:8000/api`,
    withCredentials:true
})

// http://localhost:8000/api  
// https://codewithmama.onrender.com/api  
