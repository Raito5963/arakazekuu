export type NewsContentBlock =
  | { type: 'h1'; value: string; position?: 'left' | 'center' | 'right' }
  | { type: 'h2'; value: string; position?: 'left' | 'center' | 'right' }
  | { type: 'h3'; value: string; position?: 'left' | 'center' | 'right' }
  | { type: 'h4'; value: string; position?: 'left' | 'center' | 'right' }
  | { type: 'text'; value: string; position?: 'left' | 'center' | 'right' }
  | { type: 'image'; value: string }
  | { type: 'link'; value: string; position?: 'left' | 'center' | 'right' };

export interface NewsData {
  id: number;
  title: string;
  date: string;
  content: NewsContentBlock[];
  publishAt?: string; // ISO8601形式の公開日時（未指定ならdateと同じタイミングで表示）
}
