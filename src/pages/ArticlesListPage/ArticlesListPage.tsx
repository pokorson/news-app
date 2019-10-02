import React from "react";

import Button from "../../ui/Button";

import { Article, ArticleFilters } from "../../articles/types";
import ArticlesListFilters from "./ArticlesListFilters/ArticlesListFilters";
import ArticlesListItem from "./ArticlesListItem";

import styles from "./ArticleListPage.module.scss";

interface ArticlesListPageProps {
  articles: Article[];
  filters: ArticleFilters;
  clearFilters: any;
  updateFilters: any;
  loadMoreArticles: any;
}

const ArticlesListPage = (props: ArticlesListPageProps) => {
  return (
    <div className={styles["ArticlesListPage"]}>
      <h1 className={styles["AritclesListPageTitle"]}>Articles</h1>
      <ArticlesListFilters
        filters={props.filters}
        clearFilters={props.clearFilters}
        updateFilters={props.updateFilters}
      />
      <div className={styles["ArticlesListContainer"]}>
        {props.articles.map(article => (
          <ArticlesListItem key={article.title} article={article} />
        ))}
      </div>
      <Button
        label="Show More"
        onClick={props.loadMoreArticles}
        btnType="secondary"
      ></Button>
    </div>
  );
};

ArticlesListPage.defaultProps = {
  articles: []
};

export default ArticlesListPage;
