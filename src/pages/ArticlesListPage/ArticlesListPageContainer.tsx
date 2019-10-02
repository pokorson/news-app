import React, { useEffect, useState } from "react";
import { fetchArticles } from "../../articles/api";
import ArticlesListPage from "./ArticlesListPage";
import { Article } from "../../articles/types";

const defaultFilters = {
  topic: { value: "tech", label: "Tech" }
};

const ArticlesListPageContainer = () => {
  const [articles, updateArticles] = useState([] as Article[]);
  const [page, updatePage] = useState(1);

  const [filters, updateFilters] = useState(defaultFilters);

  useEffect(() => {
    fetchArticles({ filters, page }).then((newArticles: Article[]) => {
      if (page > 1) {
        updateArticles([...articles, ...newArticles]);
      } else {
        updateArticles(newArticles);
      }
    });
  }, [articles, filters, page]);

  const updateArticleFilters = (filterValue: any) => {
    updateArticles([]);
    updateFilters({ ...filters, ...filterValue });
  };

  return (
    <ArticlesListPage
      articles={articles}
      filters={filters}
      updateFilters={updateArticleFilters}
      loadMoreArticles={() => updatePage(page + 1)}
      clearFilters={() => updateFilters(defaultFilters)}
    />
  );
};

export default ArticlesListPageContainer;
