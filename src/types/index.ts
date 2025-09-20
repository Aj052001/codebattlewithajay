export interface Course {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  thumbnail: string;
  youtubePlaylistId?: string;
  topics: string[];
  isPaid: boolean;
  isNew?: boolean;
  featured?: boolean;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  slug: string;
  courseId: string;
  youtubeVideoId?: string;
  content: string;
  duration: string;
  order: number;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  content: string;
  author: string;
  publishedAt: string;
  thumbnail: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  courseCount: number;
}

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
}

export type AdPlacement = 'top' | 'sidebar' | 'inline';

export interface AdOffer {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  image?: string;
  badge?: string;
  placement: AdPlacement[];
  isEnabled: boolean;
}
