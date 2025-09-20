import { SEOProps } from '@/types';

// SEO utility functions
export const generateSEO = (
  title: string,
  description: string,
  path?: string,
  image?: string
): SEOProps => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codebattlewithajay.vercel.com';
  const canonical = path ? `${baseUrl}${path}` : baseUrl;
  const defaultImage = `${baseUrl}/images/og-default.jpg`;

  return {
    title: `${title} | CodeBattle Learning`,
    description,
    canonical,
    openGraph: {
      title: `${title} | CodeBattle Learning`,
      description,
      image: image || defaultImage,
      url: canonical,
    },
  };
};

// Generate structured data for courses
export const generateCourseStructuredData = (course: { title: string; description: string; difficulty: string; duration: string; topics: string[]; isPaid: boolean }) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: 'CodeBattle Learning',
      url: 'https://codebattlewithajay.vercel.com',
    },
    courseMode: 'online',
    educationalLevel: course.difficulty,
    timeRequired: course.duration,
    teaches: course.topics,
    isAccessibleForFree: !course.isPaid,
  };
};

// Generate structured data for blog posts
export const generateBlogStructuredData = (blog: { title: string; description: string; author: string; publishedAt: string; slug: string }) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.description,
    author: {
      '@type': 'Person',
      name: blog.author,
    },
    datePublished: blog.publishedAt,
    publisher: {
      '@type': 'Organization',
      name: 'CodeBattle Learning',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://codebattlewithajay.vercel.com/blog/${blog.slug}`,
    },
  };
};

// Format date utility
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Generate slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// YouTube utilities
export const getYouTubeEmbedUrl = (videoId: string): string => {
  return `https://www.youtube.com/embed/${videoId}`;
};

export const getYouTubeThumbnail = (videoId: string, quality: 'default' | 'high' | 'maxres' = 'high'): string => {
  const qualityMap = {
    default: 'default.jpg',
    high: 'hqdefault.jpg',
    maxres: 'maxresdefault.jpg',
  };
  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}`;
};

// Search and filter utilities
export const searchCourses = (courses: { title: string; description: string; topics: string[]; category: string }[], query: string) => {
  if (!query.trim()) return courses;
  
  const lowerQuery = query.toLowerCase();
  return courses.filter(course => 
    course.title.toLowerCase().includes(lowerQuery) ||
    course.description.toLowerCase().includes(lowerQuery) ||
    course.topics.some((topic: string) => topic.toLowerCase().includes(lowerQuery)) ||
    course.category.toLowerCase().includes(lowerQuery)
  );
};

export const filterCoursesByCategory = (courses: { category: string }[], category: string) => {
  if (!category || category === 'all') return courses;
  return courses.filter(course => course.category.toLowerCase() === category.toLowerCase());
};

export const filterCoursesByDifficulty = (courses: { difficulty: string }[], difficulty: string) => {
  if (!difficulty || difficulty === 'all') return courses;
  return courses.filter(course => course.difficulty.toLowerCase() === difficulty.toLowerCase());
};

// Performance optimization utilities
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// URL and navigation utilities
export const getRelativeUrl = (path: string): string => {
  return path.startsWith('/') ? path : `/${path}`;
};

export const getAbsoluteUrl = (path: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codebattlewithajay.vercel.app';
  return `${baseUrl}${getRelativeUrl(path)}`;
};