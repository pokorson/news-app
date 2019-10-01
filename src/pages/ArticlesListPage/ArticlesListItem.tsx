import React from "react";
import Button from "../../ui/Button";
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
      />
      <div className={styles["ArticleMeta"]}>
        <span>{article.publishedAt}</span>
        <span>{article.author}</span>
        <span className={styles["ArticleSource"]}>{article.source.name}</span>
      </div>
      <h3 className={styles["ArticleTitle"]}>{article.title}</h3>
      <p className={styles["ArticleDescription"]}>{article.description}</p>
      <Button label="Read more" onClick={() => {}} />
    </div>
  );
};

export default ArticleListItem;
