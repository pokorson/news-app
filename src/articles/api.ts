import apiClient from "../apiClient";

export const fetchArticles = () => {
  return apiClient
    .get("/everything?q=tech")
    .then(response => response.data.articles);
};
