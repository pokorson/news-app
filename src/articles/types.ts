interface ArticleSource {
  id: number | string | null;
  name: string;
}

export interface Article {
  source: ArticleSource;
  author: string | null;
  content: string;
  title: string;
  url: string;
  urlToImage: string | null;
  description: string;
  publishedAt: string;
}
