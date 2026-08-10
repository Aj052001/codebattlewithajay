import type { Course, BlogPost, Tutorial } from '@/types';
import type { MockTest, MockQuestion } from '@/data/mockTest';
import type {
  AdminBlog,
  AdminCourse,
  AdminLesson,
  AdminMockQuestion,
  AdminMockTest,
  ApiRecord,
  Difficulty,
} from '@/types/admin';

const API_URL = (
  process.env.NEXT_PUBLIC_API_URL || 'https://codebattlewithserver.vercel.app'
).replace(/\/$/, '');

type ApiResponse<T> = {
  success: boolean;
  message?: string;
  count?: number;
  data?: T;
  token?: string;
  admin?: { id: string; name: string; email: string; role: string };
};

type SubmitResult = {
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

  const json = (await res.json().catch(() => ({}))) as {
    message?: string;
  } & ApiResponse<T>;

  if (!res.ok) {
    throw new Error(json.message || `Request failed (${res.status})`);
  }
  return json;
}

export function getApiBaseUrl() {
  return API_URL;
}

function asDifficulty(value: unknown): Difficulty {
  if (value === 'Beginner' || value === 'Intermediate' || value === 'Advanced') {
    return value;
  }
  return 'Beginner';
}

// ---------- Mappers ----------

export function mapCourse(raw: ApiRecord): Course {
  return {
    id: String(raw.id || raw._id),
    title: String(raw.title || ''),
    description: String(raw.description || ''),
    slug: String(raw.slug || ''),
    category: String(raw.category || ''),
    difficulty: asDifficulty(raw.difficulty),
    duration: String(raw.duration || ''),
    thumbnail: String(raw.thumbnail || ''),
    youtubePlaylistId: String(raw.youtubePlaylistId || ''),
    topics: Array.isArray(raw.topics) ? raw.topics.map(String) : [],
    isPaid: Boolean(raw.isPaid),
    isNew: Boolean(raw.isNew),
    featured: Boolean(raw.featured),
  };
}

export function mapBlog(raw: ApiRecord): BlogPost {
  return {
    id: String(raw.id || raw._id),
    title: String(raw.title || ''),
    description: String(raw.description || ''),
    slug: String(raw.slug || ''),
    content: String(raw.content || ''),
    author: String(raw.author || 'CodeBattle Team'),
    publishedAt: raw.publishedAt
      ? new Date(String(raw.publishedAt)).toISOString().slice(0, 10)
      : new Date().toISOString().slice(0, 10),
    thumbnail: String(raw.thumbnail || ''),
    tags: Array.isArray(raw.tags) ? raw.tags.map(String) : [],
    readTime: String(raw.readTime || '5 min read'),
    featured: Boolean(raw.featured),
  };
}

export function mapMockTest(raw: ApiRecord): MockTest & { passPercent?: number; _id?: string } {
  const rawQuestions = Array.isArray(raw.questions) ? raw.questions : [];
  const questions: MockQuestion[] = rawQuestions.map((q: AdminMockQuestion, index: number) => ({
    id: q.id ?? index + 1,
    question: q.question,
    options: q.options || [],
    correctIndex: typeof q.correctIndex === 'number' ? q.correctIndex : -1,
    explanation: typeof q.explanation === 'string' ? q.explanation : undefined,
  }));

  return {
    id: String(raw.id || raw._id),
    title: String(raw.title || ''),
    description: String(raw.description || ''),
    slug: String(raw.slug || ''),
    topic: String(raw.topic || ''),
    difficulty: asDifficulty(raw.difficulty),
    publishedAt: String(raw.publishedAt || new Date().toISOString()),
    duration: String(raw.duration || '10 min'),
    questions,
    passPercent: typeof raw.passPercent === 'number' ? raw.passPercent : 60,
    _id: raw._id ? String(raw._id) : undefined,
  };
}

export function mapTutorial(raw: ApiRecord): Tutorial {
  return {
    id: String(raw.id || raw._id),
    title: String(raw.title || ''),
    description: String(raw.description || ''),
    slug: String(raw.slug || ''),
    courseId: String(raw.courseId || raw.courseSlug || ''),
    content: String(raw.content || ''),
    duration: String(raw.duration || '20 min'),
    order: typeof raw.order === 'number' ? raw.order : 1,
    tags: Array.isArray(raw.tags) ? raw.tags.map(String) : [],
  };
}

// ---------- Public API ----------

export async function fetchCourses(): Promise<Course[]> {
  const res = await request<ApiRecord[]>('/api/courses');
  return (res.data || []).map(mapCourse);
}

export async function fetchCourse(slug: string): Promise<Course | null> {
  try {
    const res = await request<ApiRecord>(`/api/courses/${slug}`);
    return res.data ? mapCourse(res.data) : null;
  } catch {
    return null;
  }
}

export async function fetchBlogs(): Promise<BlogPost[]> {
  const res = await request<ApiRecord[]>('/api/blogs');
  return (res.data || []).map(mapBlog);
}

export async function fetchBlog(slug: string): Promise<BlogPost | null> {
  try {
    const res = await request<ApiRecord>(`/api/blogs/${slug}`);
    return res.data ? mapBlog(res.data) : null;
  } catch {
    return null;
  }
}

export async function fetchMockTests(): Promise<(MockTest & { passPercent?: number })[]> {
  const res = await request<ApiRecord[]>('/api/mock-tests');
  return (res.data || []).map(mapMockTest);
}

export async function fetchMockTest(
  slug: string
): Promise<(MockTest & { passPercent?: number }) | null> {
  try {
    const res = await request<ApiRecord>(`/api/mock-tests/${slug}`);
    return res.data ? mapMockTest(res.data) : null;
  } catch {
    return null;
  }
}

export async function submitMockTest(
  slug: string,
  answers: (number | null)[]
): Promise<SubmitResult> {
  const res = await request<SubmitResult>(`/api/mock-tests/${slug}/submit`, {
    method: 'POST',
    body: JSON.stringify({ answers }),
  });
  if (!res.data) throw new Error('No result returned');
  return res.data;
}

export async function fetchTutorialsByCourseSlug(courseSlug: string): Promise<Tutorial[]> {
  const res = await request<ApiRecord[]>(
    `/api/tutorials?courseSlug=${encodeURIComponent(courseSlug)}`
  );
  return (res.data || []).map(mapTutorial);
}

// ---------- Admin API ----------

export async function adminLogin(email: string, password: string) {
  return request('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export async function adminCreateCourse(token: string, payload: Record<string, unknown>) {
  return request<AdminCourse>('/api/courses', { method: 'POST', body: JSON.stringify(payload) }, token);
}

export async function adminUpdateCourse(token: string, id: string, payload: Record<string, unknown>) {
  return request<AdminCourse>(`/api/courses/${id}`, { method: 'PUT', body: JSON.stringify(payload) }, token);
}

export async function adminDeleteCourse(token: string, id: string) {
  return request(`/api/courses/${id}`, { method: 'DELETE' }, token);
}

export async function adminCreateBlog(token: string, payload: Record<string, unknown>) {
  return request<AdminBlog>('/api/blogs', { method: 'POST', body: JSON.stringify(payload) }, token);
}

export async function adminUpdateBlog(token: string, id: string, payload: Record<string, unknown>) {
  return request<AdminBlog>(`/api/blogs/${id}`, { method: 'PUT', body: JSON.stringify(payload) }, token);
}

export async function adminDeleteBlog(token: string, id: string) {
  return request(`/api/blogs/${id}`, { method: 'DELETE' }, token);
}

export async function adminCreateMockTest(token: string, payload: Record<string, unknown>) {
  return request<AdminMockTest>('/api/mock-tests', { method: 'POST', body: JSON.stringify(payload) }, token);
}

export async function adminUpdateMockTest(token: string, id: string, payload: Record<string, unknown>) {
  return request<AdminMockTest>(`/api/mock-tests/${id}`, { method: 'PUT', body: JSON.stringify(payload) }, token);
}

export async function adminDeleteMockTest(token: string, id: string) {
  return request(`/api/mock-tests/${id}`, { method: 'DELETE' }, token);
}

export async function adminFetchCourses(token: string): Promise<AdminCourse[]> {
  const res = await request<AdminCourse[]>('/api/courses', {}, token);
  return res.data || [];
}

export async function adminFetchBlogs(token: string): Promise<AdminBlog[]> {
  const res = await request<AdminBlog[]>('/api/blogs', {}, token);
  return res.data || [];
}

export async function adminFetchMockTests(token: string): Promise<AdminMockTest[]> {
  const res = await request<AdminMockTest[]>('/api/mock-tests', {}, token);
  return res.data || [];
}

export async function adminFetchTutorials(token: string, courseSlug?: string): Promise<AdminLesson[]> {
  const q = courseSlug ? `?courseSlug=${encodeURIComponent(courseSlug)}` : '';
  const res = await request<AdminLesson[]>(`/api/tutorials${q}`, {}, token);
  return res.data || [];
}

export async function adminCreateTutorial(token: string, payload: Record<string, unknown>) {
  return request<AdminLesson>('/api/tutorials', { method: 'POST', body: JSON.stringify(payload) }, token);
}

export async function adminUpdateTutorial(token: string, id: string, payload: Record<string, unknown>) {
  return request<AdminLesson>(`/api/tutorials/${id}`, { method: 'PUT', body: JSON.stringify(payload) }, token);
}

export async function adminDeleteTutorial(token: string, id: string) {
  return request(`/api/tutorials/${id}`, { method: 'DELETE' }, token);
}
