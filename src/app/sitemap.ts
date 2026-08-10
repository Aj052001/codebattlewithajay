import { MetadataRoute } from 'next';
import { courses, featuredBlogs } from '@/data/courses';
import { mockTests } from '@/data/mockTest';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codebattlewithajay.vercel.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/mock-test`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
  ];

  const coursePages = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const blogPages = featuredBlogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const mockTestPages = mockTests.map((test) => ({
    url: `${baseUrl}/mock-test/${test.slug}`,
    lastModified: new Date(test.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.65,
  }));

  return [...staticPages, ...coursePages, ...blogPages, ...mockTestPages];
}
