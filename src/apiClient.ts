import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const apiClient = axios.create({
  baseURL: "https://newsapi.org/v2/"
});

apiClient.interceptors.request.use(config => {
  return {
    ...config,
    url: `${config.url}&apiKey=${API_KEY}`
  };
});

export default apiClient;
