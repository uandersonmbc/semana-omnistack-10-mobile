import axios from "axios";

// import { getAccessKey } from "./auth";

const api = axios.create({
    baseURL: 'http://192.168.100.91:3333'
});

// api.interceptors.request.use(async config => {
//     const token = getAccessKey();
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

export default api;
