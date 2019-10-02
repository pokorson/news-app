import React, { useEffect, useState } from "react";
import { fetchArticles } from "../../articles/api";
import ArticlesListPage from "./ArticlesListPage";

const ArticlesListPageContainer = () => {
  const [articles, updateArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(updateArticles);
  }, []);

  return <ArticlesListPage articles={articles} />;
};

export default ArticlesListPageContainer;
