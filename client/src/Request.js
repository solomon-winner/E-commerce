import axios from "axios"

export const Request = axios.create({
    baseURL: "http://localhost:8800/api",
    withCredentials: true,
})