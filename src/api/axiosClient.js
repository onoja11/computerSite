import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://api_x-lock.test/api",
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
