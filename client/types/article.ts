export interface Article {
  title: string;
  date: string;
  sourceUrl?: string;
  imageUrl: string;
  content: ArticleContent[];
}

export interface ArticleContent {
  type: "paragraph" | "quote" | "subtitle";
  text: string;
}
