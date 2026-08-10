export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type AdminCourse = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  difficulty: Difficulty;
  duration?: string;
  thumbnail?: string;
  youtubePlaylistId?: string;
  topics?: string[];
  isPaid?: boolean;
  isNew?: boolean;
  featured?: boolean;
  isPublished?: boolean;
};

export type AdminLesson = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  courseSlug: string;
  courseId?: string;
  content: string;
  duration?: string;
  order?: number;
  tags?: string[];
  isPublished?: boolean;
};

export type AdminBlog = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  content: string;
  author?: string;
  tags?: string[];
  readTime?: string;
  featured?: boolean;
  isPublished?: boolean;
  publishedAt?: string;
};

export type AdminMockQuestion = {
  id?: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
};

export type AdminMockTest = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  topic: string;
  difficulty: Difficulty;
  duration?: string;
  passPercent?: number;
  questions?: AdminMockQuestion[];
  isPublished?: boolean;
  publishedAt?: string;
};

export type ApiRecord = Record<string, unknown> & {
  _id?: string;
  id?: string;
  title?: string;
  description?: string;
  slug?: string;
  category?: string;
  difficulty?: string;
  duration?: string;
  thumbnail?: string;
  youtubePlaylistId?: string;
  topics?: string[];
  tags?: string[];
  content?: string;
  author?: string;
  readTime?: string;
  featured?: boolean;
  isPaid?: boolean;
  isNew?: boolean;
  isPublished?: boolean;
  publishedAt?: string;
  courseSlug?: string;
  courseId?: string;
  order?: number;
  topic?: string;
  passPercent?: number;
  questions?: AdminMockQuestion[];
};
