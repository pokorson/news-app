import React, { useEffect, useState } from "react";
import { fetchArticles } from "../../articles/api";
import ArticlesListPage from "./ArticlesListPage";

const ArticlesListPageContainer = () => {
  const [articles, updateArticles] = useState([]);

  const [filters, updateFilters] = useState({
    topic: { value: "tech", label: "Tech" }
  });

  useEffect(() => {
    fetchArticles(filters).then(updateArticles);
  }, [filters]);

  const updateArticleFilters = (filterValue: any) => {
    updateArticles([]);
    updateFilters({ ...filters, ...filterValue });
  };

  return (
    <ArticlesListPage
      articles={articles}
      filters={filters}
      updateFilters={updateArticleFilters}
      clearFilters={() =>
        updateFilters({ topic: { value: "tech", label: "Tech" } })
      }
    />
  );
};

export default ArticlesListPageContainer;
