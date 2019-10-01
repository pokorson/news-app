import React from "react";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";
import Button from "../../ui/Button";
import { Article } from "../../articles/types";
import styles from "./ArticleListItem.module.scss";

interface ArticleListItemProps {
  article: Article;
}

const defaultImageUrl =
  "https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg";

const ArticleListItem = (props: ArticleListItemProps) => {
  const { article } = props;
  const formattedDate = format(parseISO(article.publishedAt), "MMM d, yyyy");

  return (
    <div className={styles["ArticleListItem"]}>
      <img
        className={styles["ArticleImage"]}
        src={article.urlToImage || defaultImageUrl}
        alt="article"
      />
      <div className={styles["ArticleMeta"]}>
        <span>{formattedDate}</span>
        {article.author && <span>{article.author}</span>}
        <span className={styles["ArticleSource"]}>{article.source.name}</span>
      </div>
      <h3 className={styles["ArticleTitle"]}>{article.title}</h3>
      <p className={styles["ArticleDescription"]}>{article.description}</p>
      <Link to={{ pathname: "article-details", state: { article } }}>
        <Button label="Read more" />
      </Link>
    </div>
  );
};

export default ArticleListItem;
