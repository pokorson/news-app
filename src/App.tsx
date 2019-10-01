import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ArticlesListPage from "./pages/ArticlesListPage";
import ArticleDetailsPage from "./pages/ArticleDetailsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={ArticlesListPage} />
      <Route
        exact
        path="/article-details"
        render={props => {
          const {
            location: {
              state: { article }
            }
          } = props;
          return <ArticleDetailsPage {...props} article={article} />;
        }}
      />
    </Router>
  );
};

export default App;
