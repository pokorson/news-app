import React from "react";
import { Link } from "react-router-dom";

import Button from "../../ui/Button";
import { Article } from "../../articles/types"; // TODO: Refactor to use articles/index.js

import styles from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  article: Article;
}

const defaultImageUrl =
  "https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg";

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { article } = props;

  return (
    <div className={styles["ArticleDetailsPage"]}>
      <h1 className={styles["PageTitle"]}>{article.title}</h1>
      <Link to="/">Return to articles list</Link>
      <div className={styles["ArticleImageContainer"]}>
        <img
          className={styles["ArticleImage"]}
          src={article.urlToImage || defaultImageUrl}
          alt="article"
        />
      </div>
      <div className={styles["ArticleDetailsContainer"]}>
        <div className={styles["ArticleMeta"]}>
          <span>{article.publishedAt}</span>
          <span>{article.author}</span>
          <span className={styles["ArticleSource"]}>{article.source.name}</span>
        </div>
        <h3 className={styles["ArticleTitle"]}>{article.title}</h3>
        <p className={styles["ArticleContent"]}>{article.content}</p>
        <a href={article.url} target="_blank">
          <Button
            className={styles["ArticleSourceButton"]}
            label="Go To Source"
          />
        </a>
      </div>
    </div>
  );
};

export default ArticleDetailsPage;
