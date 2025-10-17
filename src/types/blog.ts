export interface Blog {
  id: number;
  title: string;
  summary: string;
  content: string;
  slug: string;
  image_url?: string;
  created_at?: string;
}