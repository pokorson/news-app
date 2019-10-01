import React from "react";
import { Article } from "./types";
import styles from "./ArticleListItem.module.scss";

interface ArticleListItemProps {
  article: Article;
}

const ArticleListItem = (props: ArticleListItemProps) => {
  const { article } = props;

  return (
    <div className={styles["ArticleListItem"]}>
      <img
        className={styles["ArticleImage"]}
        src={article.urlToImage}
        alt="article"
        width="100px"
      />
      <div className={styles["ArticleMeta"]}>
        <span>{article.publishedAt}</span>
        <span>{article.author}</span>
        <span className={styles["ArticleSource"]}>{article.source.name}</span>
      </div>
      <h3 className={styles["ArticleTitle"]}>{article.title}</h3>
      <p className={styles["ArticleDescription"]}>{article.description}</p>
      <button>read more</button>
    </div>
  );
};

export default ArticleListItem;
