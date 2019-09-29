import React from "react";

import ArticlesListItem from "./ArticlesListItem";
import { Article } from "./types";

interface ArticlesListPageProps {
  articles: Article[];
}

const ArticlesListPage = (props: ArticlesListPageProps) => {
  return (
    <div>
      <h1>Articles</h1>
      {props.articles.map(article => (
        <ArticlesListItem article={article} />
      ))}
    </div>
  );
};

ArticlesListPage.defaultProps = {
  articles: []
};

export default ArticlesListPage;
