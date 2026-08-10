import type { Course, BlogPost, Tutorial } from '@/types';
import type { MockTest, MockQuestion } from '@/data/mockTest';

const API_URL = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000').replace(/\/$/, '');

type ApiResponse<T> = {
  success: boolean;
  message?: string;
  count?: number;
  data?: T;
  token?: string;
  admin?: { id: string; name: string; email: string; role: string };
};

async function request<T>(
  path: string,
  options: RequestInit = {},
  token?: string | null
): Promise<ApiResponse<T>> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  if (token) {
    (headers as Record<string, string>).Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
    cache: 'no-store',
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json.message || `Request failed (${res.status})`);
  }
  return json as ApiResponse<T>;
}

export function getApiBaseUrl() {
  return API_URL;
}

// ---------- Mappers ----------

export function mapCourse(raw: any): Course {
  return {
    id: String(raw.id || raw._id),
    title: raw.title,
    description: raw.description,
    slug: raw.slug,
    category: raw.category,
    difficulty: raw.difficulty,
    duration: raw.duration || '',
    thumbnail: raw.thumbnail || '',
    youtubePlaylistId: raw.youtubePlaylistId || '',
    topics: raw.topics || [],
    isPaid: Boolean(raw.isPaid),
    isNew: Boolean(raw.isNew),
    featured: Boolean(raw.featured),
  };
}

export function mapBlog(raw: any): BlogPost {
  return {
    id: String(raw.id || raw._id),
    title: raw.title,
    description: raw.description,
    slug: raw.slug,
    content: raw.content || '',
    author: raw.author || 'CodeBattle Team',
    publishedAt: raw.publishedAt
      ? new Date(raw.publishedAt).toISOString().slice(0, 10)
      : new Date().toISOString().slice(0, 10),
    thumbnail: raw.thumbnail || '',
    tags: raw.tags || [],
    readTime: raw.readTime || '5 min read',
    featured: Boolean(raw.featured),
  };
}

export function mapMockTest(raw: any): MockTest & { passPercent?: number; _id?: string } {
  const questions: MockQuestion[] = (raw.questions || []).map((q: any, index: number) => ({
    id: q.id ?? index + 1,
    question: q.question,
    options: q.options || [],
    correctIndex: typeof q.correctIndex === 'number' ? q.correctIndex : -1,
  }));

  return {
    id: String(raw.id || raw._id),
    title: raw.title,
    description: raw.description,
    slug: raw.slug,
    topic: raw.topic,
    difficulty: raw.difficulty,
    publishedAt: raw.publishedAt || new Date().toISOString(),
    duration: raw.duration || '10 min',
    questions,
    passPercent: raw.passPercent ?? 60,
    _id: raw._id,
  };
}

// ---------- Public API ----------

export async function fetchCourses(): Promise<Course[]> {
  const res = await request<any[]>('/api/courses');
  return (res.data || []).map(mapCourse);
}

export async function fetchCourse(slug: string): Promise<Course | null> {
  try {
    const res = await request<any>(`/api/courses/${slug}`);
    return res.data ? mapCourse(res.data) : null;
  } catch {
    return null;
  }
}

export async function fetchBlogs(): Promise<BlogPost[]> {
  const res = await request<any[]>('/api/blogs');
  return (res.data || []).map(mapBlog);
}

export async function fetchBlog(slug: string): Promise<BlogPost | null> {
  try {
    const res = await request<any>(`/api/blogs/${slug}`);
    return res.data ? mapBlog(res.data) : null;
  } catch {
    return null;
  }
}

export async function fetchMockTests(): Promise<(MockTest & { passPercent?: number })[]> {
  const res = await request<any[]>('/api/mock-tests');
  return (res.data || []).map(mapMockTest);
}

export async function fetchMockTest(slug: string): Promise<(MockTest & { passPercent?: number }) | null> {
  try {
    const res = await request<any>(`/api/mock-tests/${slug}`);
    return res.data ? mapMockTest(res.data) : null;
  } catch {
    return null;
  }
}

export async function submitMockTest(
  slug: string,
  answers: (number | null)[]
): Promise<{
  score: number;
  total: number;
  percent: number;
  passPercent: number;
  passed: boolean;
  review: Array<{
    id: number;
    question: string;
    selectedIndex: number | null;
    correctIndex: number;
    isCorrect: boolean;
    explanation?: string;
  }>;
}> {
  const res = await request<any>(`/api/mock-tests/${slug}/submit`, {
    method: 'POST',
    body: JSON.stringify({ answers }),
  });
  return res.data;
}

// ---------- Admin API ----------

export async function adminLogin(email: string, password: string) {
  return request('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export async function adminCreateCourse(token: string, payload: Record<string, unknown>) {
  return request('/api/courses', { method: 'POST', body: JSON.stringify(payload) }, token);
}

export async function adminUpdateCourse(token: string, id: string, payload: Record<string, unknown>) {
  return request(`/api/courses/${id}`, { method: 'PUT', body: JSON.stringify(payload) }, token);
}

export async function adminDeleteCourse(token: string, id: string) {
  return request(`/api/courses/${id}`, { method: 'DELETE' }, token);
}

export async function adminCreateBlog(token: string, payload: Record<string, unknown>) {
  return request('/api/blogs', { method: 'POST', body: JSON.stringify(payload) }, token);
}

export async function adminUpdateBlog(token: string, id: string, payload: Record<string, unknown>) {
  return request(`/api/blogs/${id}`, { method: 'PUT', body: JSON.stringify(payload) }, token);
}

export async function adminDeleteBlog(token: string, id: string) {
  return request(`/api/blogs/${id}`, { method: 'DELETE' }, token);
}

export async function adminCreateMockTest(token: string, payload: Record<string, unknown>) {
  return request('/api/mock-tests', { method: 'POST', body: JSON.stringify(payload) }, token);
}

export async function adminUpdateMockTest(token: string, id: string, payload: Record<string, unknown>) {
  return request(`/api/mock-tests/${id}`, { method: 'PUT', body: JSON.stringify(payload) }, token);
}

export async function adminDeleteMockTest(token: string, id: string) {
  return request(`/api/mock-tests/${id}`, { method: 'DELETE' }, token);
}

export async function adminFetchCourses(token: string) {
  const res = await request<any[]>('/api/courses', {}, token);
  return res.data || [];
}

export async function adminFetchBlogs(token: string) {
  const res = await request<any[]>('/api/blogs', {}, token);
  return res.data || [];
}

export async function adminFetchMockTests(token: string) {
  const res = await request<any[]>('/api/mock-tests', {}, token);
  return res.data || [];
}

export function mapTutorial(raw: any): Tutorial {
  return {
    id: String(raw.id || raw._id),
    title: raw.title,
    description: raw.description,
    slug: raw.slug,
    courseId: raw.courseId || raw.courseSlug || '',
    content: raw.content || '',
    duration: raw.duration || '20 min',
    order: raw.order ?? 1,
    tags: raw.tags || [],
  };
}

export async function fetchTutorialsByCourseSlug(courseSlug: string): Promise<Tutorial[]> {
  const res = await request<any[]>(`/api/tutorials?courseSlug=${encodeURIComponent(courseSlug)}`);
  return (res.data || []).map(mapTutorial);
}

export async function adminFetchTutorials(token: string, courseSlug?: string) {
  const q = courseSlug ? `?courseSlug=${encodeURIComponent(courseSlug)}` : '';
  const res = await request<any[]>(`/api/tutorials${q}`, {}, token);
  return res.data || [];
}

export async function adminCreateTutorial(token: string, payload: Record<string, unknown>) {
  return request('/api/tutorials', { method: 'POST', body: JSON.stringify(payload) }, token);
}

export async function adminUpdateTutorial(token: string, id: string, payload: Record<string, unknown>) {
  return request(`/api/tutorials/${id}`, { method: 'PUT', body: JSON.stringify(payload) }, token);
}

export async function adminDeleteTutorial(token: string, id: string) {
  return request(`/api/tutorials/${id}`, { method: 'DELETE' }, token);
}
