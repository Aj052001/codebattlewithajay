import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, BookOpen, Youtube, Clock, ClipboardList } from 'lucide-react';
import { courses as staticCourses, youtubeChannelData } from '@/data/courses';
import {
  mockTests as staticMockTests,
  MOCK_TEST_DAILY_TIME,
  MOCK_TEST_PASS_PERCENT,
} from '@/data/mockTest';
import { fetchCourses, fetchMockTests } from '@/lib/api';
import CourseCard from '@/components/ui/CourseCard';
import MockTestCard from '@/components/ui/MockTestCard';

async function getHomeData() {
  try {
    const [apiCourses, apiTests] = await Promise.all([fetchCourses(), fetchMockTests()]);
    return {
      courses: apiCourses.length ? apiCourses : staticCourses,
      mockTests: apiTests.length ? apiTests : staticMockTests,
      fromApi: apiCourses.length > 0 || apiTests.length > 0,
    };
  } catch {
    return {
      courses: staticCourses,
      mockTests: staticMockTests,
      fromApi: false,
    };
  }
}

export default async function Home() {
  const { courses, mockTests } = await getHomeData();

  const featuredCourses = courses.filter((course) => course.featured).slice(0, 3);
  const latestMockTests = [...mockTests]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-blue-50 to-white py-12 sm:py-16 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(37,99,235,0.12), transparent 40%), radial-gradient(circle at 80% 10%, rgba(14,165,233,0.14), transparent 35%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Image
              src="/logo-256.png"
              alt="CodeBattle With Ajay"
              width={112}
              height={112}
              className="mx-auto mb-5 sm:mb-6 w-20 h-20 sm:w-28 sm:h-28 rounded-full shadow-md ring-4 ring-white"
              priority
            />

            <div className="inline-flex items-center bg-white text-blue-700 border border-blue-100 text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-full mb-5 sm:mb-6 max-w-full shadow-sm">
              <Youtube className="w-4 h-4 mr-2 shrink-0 text-blue-600" />
              <span className="truncate">
                Join {youtubeChannelData.subscriberCount} learners on YouTube
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-5 sm:mb-6 leading-tight px-1">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">
                CodeBattle with Ajay
              </span>
            </h1>

            <p className="text-base sm:text-xl lg:text-2xl text-slate-600 mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed px-1">
              Learn <strong className="text-slate-800">DSA</strong>, build{' '}
              <strong className="text-slate-800">projects</strong>, and grow as a{' '}
              <strong className="text-slate-800">full-stack developer</strong>
            </p>

            <p className="text-sm sm:text-lg text-slate-500 mb-8 sm:mb-10 max-w-2xl mx-auto px-1">
              Practical tutorials, daily mock tests, and real-world skills — free.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-1">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg transition-colors shadow-md hover:shadow-lg w-full sm:w-auto"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>

              <Link
                href="/mock-test"
                className="inline-flex items-center justify-center bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg transition-colors shadow-sm w-full sm:w-auto"
              >
                <ClipboardList className="w-5 h-5 mr-2" />
                Take Mock Test
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>

              <Link
                href={youtubeChannelData.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg transition-colors shadow-sm w-full sm:w-auto"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Free Videos
                <Youtube className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">
                Featured Courses
              </h2>
              <p className="text-base sm:text-xl text-slate-600">
                Start your learning journey with our most popular courses
              </p>
            </div>
            <Link
              href="/courses"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              View All Courses
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-blue-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">
                Daily Mock Tests
              </h2>
              <p className="text-base sm:text-xl text-slate-600 mb-3">
                Practice with 5 MCQs — pass with {MOCK_TEST_PASS_PERCENT}%
              </p>
              <div className="inline-flex items-center gap-2 bg-white text-blue-800 border border-blue-100 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
                <Clock className="w-4 h-4 shrink-0 text-blue-600" />
                New test every day at {MOCK_TEST_DAILY_TIME}
              </div>
            </div>
            <Link
              href="/mock-test"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              View All Tests
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {latestMockTests.map((test) => (
              <MockTestCard key={test.id} test={test} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 px-6 py-12 sm:px-10 sm:py-16 text-center text-white shadow-lg">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 15% 20%, rgba(255,255,255,0.25), transparent 35%), radial-gradient(circle at 85% 80%, rgba(14,165,233,0.45), transparent 40%)',
              }}
            />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 mb-5 sm:mb-6">
                <Youtube className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                Learn with CodeBattle on YouTube
              </h2>
              <p className="text-base sm:text-xl mb-6 sm:mb-8 text-blue-50 max-w-2xl mx-auto">
                Free video tutorials, live coding sessions, and practical projects for DSA,
                fullstack, and DevOps.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center mb-6 sm:mb-8">
                <div className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                  <div className="text-2xl font-bold">{youtubeChannelData.subscriberCount}</div>
                  <div className="text-blue-100 text-sm">Subscribers</div>
                </div>
                <div className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                  <div className="text-2xl font-bold">{youtubeChannelData.videoCount}</div>
                  <div className="text-blue-100 text-sm">Videos</div>
                </div>
              </div>

              <Link
                href={youtubeChannelData.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg transition-colors shadow-md w-full sm:w-auto max-w-sm"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Subscribe Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-base sm:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Courses, daily mock tests, and free YouTube lessons — pick a path and start today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg transition-colors shadow-md"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Browse Courses
            </Link>
            <Link
              href="/mock-test"
              className="inline-flex items-center justify-center bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg transition-colors"
            >
              <ClipboardList className="w-5 h-5 mr-2" />
              Take Mock Test
            </Link>
            <Link
              href={youtubeChannelData.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg transition-colors"
            >
              <Youtube className="w-5 h-5 mr-2" />
              Watch on YouTube
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
