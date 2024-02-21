import axios, { AxiosInstance  } from 'axios';

// Define your API base URL
const BASE_URL =  process.env.REACT_APP_API_URL;

// Create a new Axios instance with a custom config.
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds timeout
});

export default axiosInstance