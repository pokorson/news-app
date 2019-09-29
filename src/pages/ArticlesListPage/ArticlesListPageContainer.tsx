import React from "react";
import ArticlesListPage from "./ArticlesListPage";
import articlesData from "./data.json";

const ArticlesListPageContainer = () => {
  return <ArticlesListPage articles={articlesData.articles} />;
};

export default ArticlesListPageContainer;
