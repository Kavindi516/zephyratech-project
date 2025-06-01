import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Request Intercepted:", config);
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response Intercepted:", response);
    return response;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;