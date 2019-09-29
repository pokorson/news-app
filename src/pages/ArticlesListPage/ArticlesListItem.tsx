import React from "react";
import { Article } from "./types";

interface ArticleListItemProps {
  article: Article;
}

const ArticleListItem = (props: ArticleListItemProps) => {
  const { article } = props;

  return <div>{article.title}</div>;
};

export default ArticleListItem;
