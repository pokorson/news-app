import React from "react";
import { Article } from "./types";

interface ArticleListItemProps {
  article: Article;
}

const ArticleListItem = (props: ArticleListItemProps) => {
  const { article } = props;

  return (
    <div>
      <img src={article.urlToImage} alt="article-image" width="100px" />
      <div>
        <span>{article.publishedAt}</span>
        <span>{article.author}</span>
        <span>{article.source.name}</span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <button>read more</button>
    </div>
  );
};

export default ArticleListItem;
