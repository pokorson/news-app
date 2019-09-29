import React from "react";

import { Article } from "./types";

interface ArticlesListPageProps {
  articles: Article[];
}

const ArticlesListPage = (props: ArticlesListPageProps) => {
  return (
    <div>
      <h1>Articles</h1>
      {props.articles.map(art => (
        <div>{art.title}</div>
      ))}
    </div>
  );
};

ArticlesListPage.defaultProps = {
  articles: []
};

export default ArticlesListPage;
