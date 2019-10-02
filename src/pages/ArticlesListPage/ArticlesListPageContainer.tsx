import React, { useEffect, useState } from "react";
import { fetchArticles } from "../../articles/api";
import ArticlesListPage from "./ArticlesListPage";
import { Article, ArticleFilters } from "../../articles/types";

const defaultFilters: ArticleFilters = {
  topic: "tech"
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
  }, [filters, page]);

  const updateArticleFilters = (filterValue: ArticleFilters) => {
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
