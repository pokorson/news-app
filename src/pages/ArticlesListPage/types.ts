interface ArticleSource {
  id: number;
  name: string;
}

export interface Article {
  source: ArticleSource;
  author: string;
  content: string;
  title: string;
  urlToImage: string;
  description: string;
  publishedAt: string;
}
