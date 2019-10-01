import React from "react";

import Button from "../../ui/Button";

import ArticlesListItem from "./ArticlesListItem";
import { Article } from "../../articles/types";
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
          <ArticlesListItem key={article.title} article={article} />
        ))}
      </div>
      <Button label="Show More" onClick={() => {}} btnType="secondary"></Button>
    </div>
  );
};

ArticlesListPage.defaultProps = {
  articles: []
};

export default ArticlesListPage;
