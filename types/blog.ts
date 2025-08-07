export interface Blog {
  id: number;
  title: string;
  slug: string;
  image_url: string | null;
  excerpt: string;
  content: string;
  published_at: string;
}
