import React from "react";

import ArticlesListItem from "./ArticlesListItem";
import { Article } from "./types";
import styles from "./ArticleListPage.module.scss";

interface ArticlesListPageProps {
  articles: Article[];
}

const ArticlesListPage = (props: ArticlesListPageProps) => {
  return (
    <div className={styles["ArticlesListPage"]}>
      <h1 className={styles["AritclesListPageTitle"]}>Articles</h1>
      <div className={styles["ArticlesListContainer"]}>
        {props.articles.map(article => (
          <ArticlesListItem article={article} />
        ))}
      </div>
    </div>
  );
};

ArticlesListPage.defaultProps = {
  articles: []
};

export default ArticlesListPage;
