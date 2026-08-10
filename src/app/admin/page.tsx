'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  adminLogin,
  adminFetchCourses,
  adminFetchBlogs,
  adminFetchMockTests,
  adminFetchTutorials,
  adminCreateCourse,
  adminUpdateCourse,
  adminDeleteCourse,
  adminCreateBlog,
  adminUpdateBlog,
  adminDeleteBlog,
  adminCreateMockTest,
  adminUpdateMockTest,
  adminDeleteMockTest,
  adminCreateTutorial,
  adminUpdateTutorial,
  adminDeleteTutorial,
  getApiBaseUrl,
} from '@/lib/api';
import LessonContentEditor from '@/components/admin/LessonContentEditor';
import type { AdminBlog, AdminCourse, AdminLesson, AdminMockTest, Difficulty } from '@/types/admin';
import type { ReactNode } from 'react';

type MainTab = 'courses' | 'blogs' | 'tests';
type CourseSubTab = 'details' | 'lessons';

const TOKEN_KEY = 'cb_admin_token';

const emptyCourse = {
  title: '',
  description: '',
  slug: '',
  category: 'Fullstack Development',
  difficulty: 'Beginner' as Difficulty,
  duration: '',
  topics: '',
  youtubePlaylistId: '',
  featured: true,
  isNew: false,
  isPublished: true,
};

const emptyLesson = {
  title: '',
  description: '',
  slug: '',
  order: 1,
  duration: '20 min',
  tags: '',
  content: '',
  isPublished: true,
};

const emptyBlog = {
  title: '',
  description: '',
  slug: '',
  content: '',
  author: 'CodeBattle Team',
  tags: '',
  readTime: '5 min read',
  featured: false,
  isPublished: true,
};

const emptyTest = {
  title: '',
  description: '',
  slug: '',
  topic: '',
  difficulty: 'Beginner' as Difficulty,
  duration: '10 min',
  passPercent: 60,
  isPublished: true,
  questionsJson: '[]',
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tab, setTab] = useState<MainTab>('courses');
  const [courseSubTab, setCourseSubTab] = useState<CourseSubTab>('lessons');

  const [courses, setCourses] = useState<AdminCourse[]>([]);
  const [blogs, setBlogs] = useState<AdminBlog[]>([]);
  const [tests, setTests] = useState<AdminMockTest[]>([]);
  const [lessons, setLessons] = useState<AdminLesson[]>([]);

  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [isCreatingCourse, setIsCreatingCourse] = useState(false);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [selectedTestId, setSelectedTestId] = useState<string | null>(null);

  const [courseForm, setCourseForm] = useState({ ...emptyCourse });
  const [lessonForm, setLessonForm] = useState({ ...emptyLesson });
  const [blogForm, setBlogForm] = useState({ ...emptyBlog });
  const [testForm, setTestForm] = useState({ ...emptyTest });

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [courseSearch, setCourseSearch] = useState('');

  const selectedCourse = useMemo(
    () => courses.find((c) => c._id === selectedCourseId) || null,
    [courses, selectedCourseId]
  );

  useEffect(() => {
    const saved = localStorage.getItem(TOKEN_KEY);
    if (saved) setToken(saved);
  }, []);

  const flash = (msg: string, isError = false) => {
    if (isError) {
      setError(msg);
      setMessage('');
    } else {
      setMessage(msg);
      setError('');
    }
  };

  const loadAll = async (authToken: string) => {
    setLoading(true);
    setError('');
    try {
      const [c, b, t] = await Promise.all([
        adminFetchCourses(authToken),
        adminFetchBlogs(authToken),
        adminFetchMockTests(authToken),
      ]);
      setCourses(c);
      setBlogs(b);
      setTests(t);
    } catch (err) {
      flash(err instanceof Error ? err.message : 'Failed to load', true);
      if (String(err).toLowerCase().includes('token') || String(err).toLowerCase().includes('unauthorized')) {
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
      }
    } finally {
      setLoading(false);
    }
  };

  const loadLessons = async (authToken: string, courseSlug: string) => {
    try {
      const data = await adminFetchTutorials(authToken, courseSlug);
      setLessons([...data].sort((a, b) => (a.order || 0) - (b.order || 0)));
    } catch (err) {
      flash(err instanceof Error ? err.message : 'Failed to load lessons', true);
    }
  };

  useEffect(() => {
    if (token) loadAll(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    if (token && selectedCourse?.slug) {
      loadLessons(token, selectedCourse.slug);
      setSelectedLessonId(null);
      setLessonForm({ ...emptyLesson, order: 1 });
    } else {
      setLessons([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, selectedCourseId, selectedCourse?.slug]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await adminLogin(email, password);
      if (!res.token) throw new Error('No token received');
      localStorage.setItem(TOKEN_KEY, res.token);
      setToken(res.token);
      setPassword('');
      flash('Login successful');
    } catch (err) {
      flash(err instanceof Error ? err.message : 'Login failed', true);
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
  };

  const filteredCourses = useMemo(() => {
    const q = courseSearch.trim().toLowerCase();
    if (!q) return courses;
    return courses.filter(
      (c) =>
        c.title?.toLowerCase().includes(q) ||
        c.slug?.toLowerCase().includes(q) ||
        c.category?.toLowerCase().includes(q)
    );
  }, [courses, courseSearch]);

  const openCourse = (course: AdminCourse) => {
    setIsCreatingCourse(false);
    setSelectedCourseId(course._id);
    setCourseSubTab('lessons');
    setCourseForm({
      title: course.title || '',
      description: course.description || '',
      slug: course.slug || '',
      category: course.category || 'Fullstack Development',
      difficulty: course.difficulty || 'Beginner',
      duration: course.duration || '',
      topics: (course.topics || []).join(', '),
      youtubePlaylistId: course.youtubePlaylistId || '',
      featured: Boolean(course.featured),
      isNew: Boolean(course.isNew),
      isPublished: course.isPublished !== false,
    });
  };

  const startNewCourse = () => {
    setSelectedCourseId(null);
    setIsCreatingCourse(true);
    setCourseSubTab('details');
    setCourseForm({ ...emptyCourse });
    setLessons([]);
    setSelectedLessonId(null);
  };

  const openLesson = (lesson: AdminLesson) => {
    setSelectedLessonId(lesson._id);
    setLessonForm({
      title: lesson.title || '',
      description: lesson.description || '',
      slug: lesson.slug || '',
      order: lesson.order || 1,
      duration: lesson.duration || '20 min',
      tags: (lesson.tags || []).join(', '),
      content: lesson.content || '',
      isPublished: lesson.isPublished !== false,
    });
    setCourseSubTab('lessons');
  };

  const startNewLesson = () => {
    if (!selectedCourse) {
      flash('Pehle ek course select karo', true);
      return;
    }
    setSelectedLessonId(null);
    setLessonForm({
      ...emptyLesson,
      order: (lessons[lessons.length - 1]?.order || 0) + 1,
    });
  };

  const saveCourse = async () => {
    if (!token) return;
    setSaving(true);
    try {
      const payload = {
        title: courseForm.title.trim(),
        description: courseForm.description.trim(),
        slug: (courseForm.slug || slugify(courseForm.title)).trim(),
        category: courseForm.category.trim(),
        difficulty: courseForm.difficulty,
        duration: courseForm.duration.trim(),
        youtubePlaylistId: courseForm.youtubePlaylistId.trim(),
        topics: courseForm.topics
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean),
        featured: courseForm.featured,
        isNew: courseForm.isNew,
        isPublished: courseForm.isPublished,
      };

      if (!payload.title || !payload.description || !payload.slug) {
        throw new Error('Title, description aur slug required hain');
      }

      if (selectedCourseId) {
        await adminUpdateCourse(token, selectedCourseId, payload);
        flash('Course updated');
      } else {
        const res = await adminCreateCourse(token, payload);
        flash('Course created');
        setIsCreatingCourse(false);
        await loadAll(token);
        if (res.data?._id) openCourse(res.data);
        return;
      }
      await loadAll(token);
    } catch (err) {
      flash(err instanceof Error ? err.message : 'Save failed', true);
    } finally {
      setSaving(false);
    }
  };

  const deleteCourse = async () => {
    if (!token || !selectedCourseId) return;
    if (!confirm('Is course ko delete karna hai? Lessons alag se delete karne padenge.')) return;
    try {
      await adminDeleteCourse(token, selectedCourseId);
      flash('Course deleted');
      setSelectedCourseId(null);
      setIsCreatingCourse(false);
      setCourseForm({ ...emptyCourse });
      setLessons([]);
      await loadAll(token);
    } catch (err) {
      flash(err instanceof Error ? err.message : 'Delete failed', true);
    }
  };

  const saveLesson = async () => {
    if (!token || !selectedCourse) {
      flash('Course select karo pehle', true);
      return;
    }
    setSaving(true);
    try {
      const payload = {
        title: lessonForm.title.trim(),
        description: lessonForm.description.trim(),
        slug: (lessonForm.slug || slugify(lessonForm.title)).trim(),
        courseSlug: selectedCourse.slug,
        order: Number(lessonForm.order) || 1,
        duration: lessonForm.duration.trim() || '20 min',
        tags: lessonForm.tags
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean),
        content: lessonForm.content,
        isPublished: lessonForm.isPublished,
      };

      if (!payload.title || !payload.description || !payload.content) {
        throw new Error('Title, description aur content required hain');
      }

      if (selectedLessonId) {
        await adminUpdateTutorial(token, selectedLessonId, payload);
        flash('Lesson updated');
      } else {
        const res = await adminCreateTutorial(token, payload);
        flash('Lesson created');
        await loadLessons(token, selectedCourse.slug);
        if (res.data?._id) openLesson(res.data);
        return;
      }
      await loadLessons(token, selectedCourse.slug);
    } catch (err) {
      flash(err instanceof Error ? err.message : 'Save failed', true);
    } finally {
      setSaving(false);
    }
  };

  const deleteLesson = async (id: string) => {
    if (!token || !selectedCourse) return;
    if (!confirm('Is lesson ko delete karna hai?')) return;
    try {
      await adminDeleteTutorial(token, id);
      flash('Lesson deleted');
      if (selectedLessonId === id) {
        setSelectedLessonId(null);
        setLessonForm({ ...emptyLesson });
      }
      await loadLessons(token, selectedCourse.slug);
    } catch (err) {
      flash(err instanceof Error ? err.message : 'Delete failed', true);
    }
  };

  const openBlog = (blog: AdminBlog) => {
    setSelectedBlogId(blog._id);
    setBlogForm({
      title: blog.title || '',
      description: blog.description || '',
      slug: blog.slug || '',
      content: blog.content || '',
      author: blog.author || 'CodeBattle Team',
      tags: (blog.tags || []).join(', '),
      readTime: blog.readTime || '5 min read',
      featured: Boolean(blog.featured),
      isPublished: blog.isPublished !== false,
    });
  };

  const saveBlog = async () => {
    if (!token) return;
    setSaving(true);
    try {
      const payload = {
        title: blogForm.title.trim(),
        description: blogForm.description.trim(),
        slug: (blogForm.slug || slugify(blogForm.title)).trim(),
        content: blogForm.content,
        author: blogForm.author.trim(),
        tags: blogForm.tags
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean),
        readTime: blogForm.readTime.trim(),
        featured: blogForm.featured,
        isPublished: blogForm.isPublished,
      };
      if (selectedBlogId) await adminUpdateBlog(token, selectedBlogId, payload);
      else await adminCreateBlog(token, payload);
      flash(selectedBlogId ? 'Blog updated' : 'Blog created');
      setSelectedBlogId(null);
      setBlogForm({ ...emptyBlog });
      await loadAll(token);
    } catch (err) {
      flash(err instanceof Error ? err.message : 'Save failed', true);
    } finally {
      setSaving(false);
    }
  };

  const openTest = (test: AdminMockTest) => {
    setSelectedTestId(test._id);
    setTestForm({
      title: test.title || '',
      description: test.description || '',
      slug: test.slug || '',
      topic: test.topic || '',
      difficulty: test.difficulty || 'Beginner',
      duration: test.duration || '10 min',
      passPercent: test.passPercent || 60,
      isPublished: test.isPublished !== false,
      questionsJson: JSON.stringify(test.questions || [], null, 2),
    });
  };

  const saveTest = async () => {
    if (!token) return;
    setSaving(true);
    try {
      const questions = JSON.parse(testForm.questionsJson || '[]');
      const payload = {
        title: testForm.title.trim(),
        description: testForm.description.trim(),
        slug: (testForm.slug || slugify(testForm.title)).trim(),
        topic: testForm.topic.trim(),
        difficulty: testForm.difficulty,
        duration: testForm.duration.trim(),
        passPercent: Number(testForm.passPercent) || 60,
        isPublished: testForm.isPublished,
        questions,
      };
      if (selectedTestId) await adminUpdateMockTest(token, selectedTestId, payload);
      else await adminCreateMockTest(token, payload);
      flash(selectedTestId ? 'Mock test updated' : 'Mock test created');
      setSelectedTestId(null);
      setTestForm({ ...emptyTest });
      await loadAll(token);
    } catch (err) {
      flash(err instanceof Error ? err.message : 'Save failed', true);
    } finally {
      setSaving(false);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Admin Login</h1>
          <p className="text-sm text-slate-500 mb-6">API: {getApiBaseUrl()}</p>
          {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-3 py-2.5 border border-slate-300 rounded-xl"
            required
          />
          <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 px-3 py-2.5 border border-slate-300 rounded-xl"
            required
          />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Admin Panel</h1>
            <p className="text-sm text-slate-500">Course select karo → uski saari lessons manage karo</p>
          </div>
          <button
            type="button"
            onClick={logout}
            className="px-4 py-2 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
          >
            Logout
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {([
            ['courses', 'Courses + Lessons'],
            ['blogs', 'Blogs'],
            ['tests', 'Mock Tests'],
          ] as [MainTab, string][]).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`px-4 py-2 rounded-xl font-medium ${
                tab === key ? 'bg-blue-600 text-white' : 'bg-white border border-slate-200 text-slate-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {message && (
          <p className="mb-3 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
            {message}
          </p>
        )}
        {error && (
          <p className="mb-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        {tab === 'courses' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Course list */}
            <aside className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold text-slate-900">Courses</h2>
                <button
                  type="button"
                  onClick={startNewCourse}
                  className="text-sm bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg hover:bg-blue-100"
                >
                  + New
                </button>
              </div>
              <input
                value={courseSearch}
                onChange={(e) => setCourseSearch(e.target.value)}
                placeholder="Search course..."
                className="w-full mb-3 px-3 py-2 border border-slate-300 rounded-xl text-sm"
              />
              <div className="space-y-2 max-h-[70vh] overflow-y-auto">
                {loading && <p className="text-sm text-slate-500">Loading...</p>}
                {filteredCourses.map((course) => (
                  <button
                    key={course._id}
                    type="button"
                    onClick={() => openCourse(course)}
                    className={`w-full text-left rounded-xl border px-3 py-2.5 transition-colors ${
                      selectedCourseId === course._id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <p className="font-medium text-slate-900 text-sm line-clamp-2">{course.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{course.slug}</p>
                  </button>
                ))}
                {!loading && !filteredCourses.length && (
                  <p className="text-sm text-slate-500">No courses found</p>
                )}
              </div>
            </aside>

            {/* Course workspace */}
            <section className="lg:col-span-9 space-y-4">
              {!selectedCourseId && !isCreatingCourse ? (
                <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-10 text-center text-slate-500">
                  Left se koi course select karo (jaise React.js), phir uski lessons yahan edit hongi.
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={startNewCourse}
                      className="bg-blue-600 text-white px-4 py-2 rounded-xl"
                    >
                      Create New Course
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">
                          {isCreatingCourse ? 'Create New Course' : selectedCourse?.title || 'Course'}
                        </h2>
                        {selectedCourse && !isCreatingCourse && (
                          <p className="text-sm text-slate-500">{selectedCourse.slug}</p>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {!isCreatingCourse && selectedCourse && (
                          <button
                            type="button"
                            onClick={() => setCourseSubTab('lessons')}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                              courseSubTab === 'lessons'
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            Lessons ({lessons.length})
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => setCourseSubTab('details')}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                            courseSubTab === 'details' || isCreatingCourse
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          Course Details
                        </button>
                      </div>
                    </div>

                    {(courseSubTab === 'details' || isCreatingCourse) && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Field label="Title">
                          <input
                            className="input"
                            value={courseForm.title}
                            onChange={(e) =>
                              setCourseForm((f) => ({
                                ...f,
                                title: e.target.value,
                                slug: f.slug || slugify(e.target.value),
                              }))
                            }
                          />
                        </Field>
                        <Field label="Slug">
                          <input
                            className="input"
                            value={courseForm.slug}
                            onChange={(e) => setCourseForm((f) => ({ ...f, slug: e.target.value }))}
                          />
                        </Field>
                        <Field label="Category">
                          <input
                            className="input"
                            value={courseForm.category}
                            onChange={(e) => setCourseForm((f) => ({ ...f, category: e.target.value }))}
                          />
                        </Field>
                        <Field label="Difficulty">
                          <select
                            className="input"
                            value={courseForm.difficulty}
                            onChange={(e) =>
                              setCourseForm((f) => ({
                                ...f,
                                difficulty: e.target.value as Difficulty,
                              }))
                            }
                          >
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                          </select>
                        </Field>
                        <Field label="Duration">
                          <input
                            className="input"
                            value={courseForm.duration}
                            onChange={(e) => setCourseForm((f) => ({ ...f, duration: e.target.value }))}
                          />
                        </Field>
                        <Field label="YouTube Playlist ID">
                          <input
                            className="input"
                            value={courseForm.youtubePlaylistId}
                            onChange={(e) =>
                              setCourseForm((f) => ({ ...f, youtubePlaylistId: e.target.value }))
                            }
                          />
                        </Field>
                        <div className="sm:col-span-2">
                          <Field label="Description">
                            <textarea
                              className="input min-h-24"
                              value={courseForm.description}
                              onChange={(e) =>
                                setCourseForm((f) => ({ ...f, description: e.target.value }))
                              }
                            />
                          </Field>
                        </div>
                        <div className="sm:col-span-2">
                          <Field label="Topics (comma separated)">
                            <input
                              className="input"
                              value={courseForm.topics}
                              onChange={(e) => setCourseForm((f) => ({ ...f, topics: e.target.value }))}
                            />
                          </Field>
                        </div>
                        <label className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={courseForm.featured}
                            onChange={(e) => setCourseForm((f) => ({ ...f, featured: e.target.checked }))}
                          />
                          Featured
                        </label>
                        <label className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={courseForm.isPublished}
                            onChange={(e) =>
                              setCourseForm((f) => ({ ...f, isPublished: e.target.checked }))
                            }
                          />
                          Published
                        </label>
                        <div className="sm:col-span-2 flex flex-wrap gap-2 pt-2">
                          <button
                            type="button"
                            disabled={saving}
                            onClick={saveCourse}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2.5 rounded-xl disabled:opacity-50"
                          >
                            {saving ? 'Saving...' : selectedCourseId ? 'Update Course' : 'Create Course'}
                          </button>
                          {selectedCourseId && (
                            <button
                              type="button"
                              onClick={deleteCourse}
                              className="bg-red-50 text-red-700 px-4 py-2.5 rounded-xl hover:bg-red-100"
                            >
                              Delete Course
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    {courseSubTab === 'lessons' && selectedCourse && (
                      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
                        <div className="xl:col-span-2 border border-slate-200 rounded-xl p-3">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-slate-900">All Lessons</h3>
                            <button
                              type="button"
                              onClick={startNewLesson}
                              className="text-sm bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg"
                            >
                              + Add Lesson
                            </button>
                          </div>
                          <div className="space-y-2 max-h-[55vh] overflow-y-auto">
                            {lessons.map((lesson) => (
                              <div
                                key={lesson._id}
                                className={`rounded-xl border p-3 ${
                                  selectedLessonId === lesson._id
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-slate-200'
                                }`}
                              >
                                <button
                                  type="button"
                                  onClick={() => openLesson(lesson)}
                                  className="w-full text-left"
                                >
                                  <p className="text-xs text-blue-600 font-medium">#{lesson.order}</p>
                                  <p className="font-medium text-slate-900 text-sm">{lesson.title}</p>
                                  <p className="text-xs text-slate-500">{lesson.slug}</p>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => deleteLesson(lesson._id)}
                                  className="mt-2 text-xs text-red-600 hover:underline"
                                >
                                  Delete
                                </button>
                              </div>
                            ))}
                            {!lessons.length && (
                              <p className="text-sm text-slate-500 py-4 text-center">
                                Is course me abhi koi lesson nahi hai. + Add Lesson dabao.
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="xl:col-span-3 border border-slate-200 rounded-xl p-3 sm:p-4">
                          <h3 className="font-semibold text-slate-900 mb-3">
                            {selectedLessonId ? 'Edit Lesson' : 'New Lesson'}
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <Field label="Title">
                              <input
                                className="input"
                                value={lessonForm.title}
                                onChange={(e) =>
                                  setLessonForm((f) => ({
                                    ...f,
                                    title: e.target.value,
                                    slug: selectedLessonId ? f.slug : slugify(e.target.value),
                                  }))
                                }
                              />
                            </Field>
                            <Field label="Slug">
                              <input
                                className="input"
                                value={lessonForm.slug}
                                onChange={(e) => setLessonForm((f) => ({ ...f, slug: e.target.value }))}
                              />
                            </Field>
                            <Field label="Order">
                              <input
                                type="number"
                                className="input"
                                value={lessonForm.order}
                                onChange={(e) =>
                                  setLessonForm((f) => ({ ...f, order: Number(e.target.value) }))
                                }
                              />
                            </Field>
                            <Field label="Duration">
                              <input
                                className="input"
                                value={lessonForm.duration}
                                onChange={(e) =>
                                  setLessonForm((f) => ({ ...f, duration: e.target.value }))
                                }
                              />
                            </Field>
                            <div className="sm:col-span-2">
                              <Field label="Description">
                                <textarea
                                  className="input min-h-20"
                                  value={lessonForm.description}
                                  onChange={(e) =>
                                    setLessonForm((f) => ({ ...f, description: e.target.value }))
                                  }
                                />
                              </Field>
                            </div>
                            <div className="sm:col-span-2">
                              <Field label="Tags (comma separated)">
                                <input
                                  className="input"
                                  value={lessonForm.tags}
                                  onChange={(e) =>
                                    setLessonForm((f) => ({ ...f, tags: e.target.value }))
                                  }
                                />
                              </Field>
                            </div>
                            <div className="sm:col-span-2">
                              <LessonContentEditor
                                value={lessonForm.content}
                                onChange={(content) => setLessonForm((f) => ({ ...f, content }))}
                              />
                            </div>
                            <label className="flex items-center gap-2 text-sm sm:col-span-2">
                              <input
                                type="checkbox"
                                checked={lessonForm.isPublished}
                                onChange={(e) =>
                                  setLessonForm((f) => ({ ...f, isPublished: e.target.checked }))
                                }
                              />
                              Published
                            </label>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <button
                              type="button"
                              disabled={saving}
                              onClick={saveLesson}
                              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2.5 rounded-xl disabled:opacity-50"
                            >
                              {saving
                                ? 'Saving...'
                                : selectedLessonId
                                  ? 'Update Lesson'
                                  : 'Create Lesson'}
                            </button>
                            <button
                              type="button"
                              onClick={startNewLesson}
                              className="border border-slate-300 px-4 py-2.5 rounded-xl"
                            >
                              Clear / New
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {courseSubTab === 'lessons' && !selectedCourse && (
                      <p className="text-slate-500 text-sm">
                        Lessons manage karne ke liye pehle left se course select karo.
                      </p>
                    )}
                  </div>
                </>
              )}
            </section>
          </div>
        )}

        {tab === 'blogs' && (
          <SimpleCrud
            title="Blogs"
            items={blogs}
            selectedId={selectedBlogId}
            onSelect={openBlog}
            onNew={() => {
              setSelectedBlogId(null);
              setBlogForm({ ...emptyBlog });
            }}
            onDelete={async (id) => {
              if (!token || !confirm('Delete blog?')) return;
              await adminDeleteBlog(token, id);
              flash('Blog deleted');
              setSelectedBlogId(null);
              setBlogForm({ ...emptyBlog });
              await loadAll(token);
            }}
            form={
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="Title">
                  <input
                    className="input"
                    value={blogForm.title}
                    onChange={(e) =>
                      setBlogForm((f) => ({
                        ...f,
                        title: e.target.value,
                        slug: selectedBlogId ? f.slug : slugify(e.target.value),
                      }))
                    }
                  />
                </Field>
                <Field label="Slug">
                  <input
                    className="input"
                    value={blogForm.slug}
                    onChange={(e) => setBlogForm((f) => ({ ...f, slug: e.target.value }))}
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Description">
                    <textarea
                      className="input min-h-20"
                      value={blogForm.description}
                      onChange={(e) => setBlogForm((f) => ({ ...f, description: e.target.value }))}
                    />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Content HTML">
                    <textarea
                      className="input min-h-40 font-mono text-sm"
                      value={blogForm.content}
                      onChange={(e) => setBlogForm((f) => ({ ...f, content: e.target.value }))}
                    />
                  </Field>
                </div>
                <button
                  type="button"
                  disabled={saving}
                  onClick={saveBlog}
                  className="bg-blue-600 text-white px-4 py-2.5 rounded-xl sm:col-span-2"
                >
                  {selectedBlogId ? 'Update Blog' : 'Create Blog'}
                </button>
              </div>
            }
          />
        )}

        {tab === 'tests' && (
          <SimpleCrud
            title="Mock Tests"
            items={tests}
            selectedId={selectedTestId}
            onSelect={openTest}
            onNew={() => {
              setSelectedTestId(null);
              setTestForm({ ...emptyTest });
            }}
            onDelete={async (id) => {
              if (!token || !confirm('Delete mock test?')) return;
              await adminDeleteMockTest(token, id);
              flash('Mock test deleted');
              setSelectedTestId(null);
              setTestForm({ ...emptyTest });
              await loadAll(token);
            }}
            form={
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="Title">
                  <input
                    className="input"
                    value={testForm.title}
                    onChange={(e) =>
                      setTestForm((f) => ({
                        ...f,
                        title: e.target.value,
                        slug: selectedTestId ? f.slug : slugify(e.target.value),
                      }))
                    }
                  />
                </Field>
                <Field label="Slug">
                  <input
                    className="input"
                    value={testForm.slug}
                    onChange={(e) => setTestForm((f) => ({ ...f, slug: e.target.value }))}
                  />
                </Field>
                <Field label="Topic">
                  <input
                    className="input"
                    value={testForm.topic}
                    onChange={(e) => setTestForm((f) => ({ ...f, topic: e.target.value }))}
                  />
                </Field>
                <Field label="Pass %">
                  <input
                    type="number"
                    className="input"
                    value={testForm.passPercent}
                    onChange={(e) =>
                      setTestForm((f) => ({ ...f, passPercent: Number(e.target.value) }))
                    }
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Description">
                    <textarea
                      className="input min-h-20"
                      value={testForm.description}
                      onChange={(e) => setTestForm((f) => ({ ...f, description: e.target.value }))}
                    />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Questions JSON (array with correctIndex)">
                    <textarea
                      className="input min-h-56 font-mono text-xs"
                      value={testForm.questionsJson}
                      onChange={(e) => setTestForm((f) => ({ ...f, questionsJson: e.target.value }))}
                    />
                  </Field>
                </div>
                <button
                  type="button"
                  disabled={saving}
                  onClick={saveTest}
                  className="bg-blue-600 text-white px-4 py-2.5 rounded-xl sm:col-span-2"
                >
                  {selectedTestId ? 'Update Test' : 'Create Test'}
                </button>
              </div>
            }
          />
        )}
      </div>

      <style jsx global>{`
        .input {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 0.75rem;
          padding: 0.6rem 0.75rem;
          background: white;
        }
        .input:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 1px;
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block text-sm">
      <span className="block font-medium text-slate-700 mb-1">{label}</span>
      {children}
    </label>
  );
}

function SimpleCrud<T extends { _id: string; title: string; slug: string }>({
  title,
  items,
  selectedId,
  onSelect,
  onNew,
  onDelete,
  form,
}: {
  title: string;
  items: T[];
  selectedId: string | null;
  onSelect: (item: T) => void;
  onNew: () => void;
  onDelete: (id: string) => void;
  form: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <aside className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-slate-900">
            {title} ({items.length})
          </h2>
          <button type="button" onClick={onNew} className="text-sm bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg">
            + New
          </button>
        </div>
        <div className="space-y-2 max-h-[70vh] overflow-y-auto">
          {items.map((item) => (
            <div
              key={item._id}
              className={`rounded-xl border p-3 ${
                selectedId === item._id ? 'border-blue-500 bg-blue-50' : 'border-slate-200'
              }`}
            >
              <button type="button" onClick={() => onSelect(item)} className="w-full text-left">
                <p className="font-medium text-sm text-slate-900">{item.title}</p>
                <p className="text-xs text-slate-500">{item.slug}</p>
              </button>
              <button
                type="button"
                onClick={() => onDelete(item._id)}
                className="mt-2 text-xs text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </aside>
      <section className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5">
        <h3 className="font-semibold text-slate-900 mb-4">{selectedId ? 'Edit' : 'Create'}</h3>
        {form}
      </section>
    </div>
  );
}
