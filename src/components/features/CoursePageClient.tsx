'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  ArrowLeft,
  ChevronRight,
  Menu,
  X,
  ChevronLeft,
} from 'lucide-react';
import { Course, Tutorial } from '@/types';
import HtmlContent from '@/components/ui/HtmlContent';

interface CoursePageClientProps {
  course: Course;
  courseTutorials: Tutorial[];
}

export default function CoursePageClient({ course, courseTutorials }: CoursePageClientProps) {
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(
    courseTutorials[0] || null
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentIndex = useMemo(() => {
    if (!selectedTutorial) return -1;
    return courseTutorials.findIndex((t) => t.id === selectedTutorial.id);
  }, [courseTutorials, selectedTutorial]);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  const selectTutorial = (tutorial: Tutorial) => {
    setSelectedTutorial(tutorial);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!courseTutorials.length) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Tutorials Available</h2>
          <p className="text-gray-600 mb-6">
            {course.title} is still being prepared. Check back soon!
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Mobile lessons button */}
      <button
        type="button"
        className="lg:hidden fixed bottom-20 right-4 z-30 inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg px-4 py-3 text-sm font-medium cursor-pointer"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open lessons menu"
      >
        <Menu className="w-5 h-5 mr-1.5" />
        Lessons
      </button>

      <div className="flex flex-col lg:flex-row lg:items-start w-full">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            aria-label="Close lessons menu"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
            fixed lg:sticky inset-y-0 left-0 z-50 lg:z-20
            w-[min(100vw-3rem,20rem)] lg:w-72 xl:w-80
            bg-white border-r shadow-xl lg:shadow-none
            transform transition-transform duration-300 ease-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            top-0 lg:top-16
            flex flex-col
            h-[100dvh] lg:h-[calc(100dvh-4rem)]
            shrink-0
          `}
        >
          <div className="flex items-center justify-end px-3 py-2 border-b lg:hidden">
            <button
              type="button"
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 cursor-pointer"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close lessons"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto overscroll-contain px-2 py-3 pb-4" aria-label="Lessons">
            <ul className="space-y-1.5">
              {courseTutorials.map((tutorial, index) => {
                const isActive = selectedTutorial?.id === tutorial.id;
                return (
                  <li key={tutorial.id}>
                    <button
                      type="button"
                      onClick={() => selectTutorial(tutorial)}
                      className={`
                        w-full text-left p-3 rounded-xl transition-colors duration-200 cursor-pointer
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                        ${
                          isActive
                            ? 'bg-blue-50 text-blue-900 border border-blue-200'
                            : 'hover:bg-gray-50 text-gray-900 border border-transparent'
                        }
                      `}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`
                            w-8 h-8 rounded-full flex items-center justify-center text-base font-semibold shrink-0 mt-0.5
                            ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}
                          `}
                        >
                          {index + 1}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-base sm:text-lg leading-snug break-words">
                            {tutorial.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">{tutorial.duration}</p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Right content — flush after sidebar, no centered empty gap */}
        <div className="flex-1 min-w-0 w-full">
          <div className="p-3 sm:p-5 lg:p-6 xl:p-8 w-full max-w-6xl pb-16">
            {selectedTutorial ? (
              <div>
                <div className="mb-4 sm:mb-6">
                  <div className="hidden lg:flex items-center gap-2 text-base text-gray-500 mb-2">
                    <span className="font-medium text-blue-600">{course.title}</span>
                    <span>•</span>
                    <span>
                      Tutorial {currentIndex + 1} of {courseTutorials.length}
                    </span>
                    <span>•</span>
                    <span>{selectedTutorial.duration}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                    {selectedTutorial.title}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                    {selectedTutorial.description}
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <HtmlContent
                    className="tutorial-content p-4 sm:p-6 lg:p-8"
                    html={selectedTutorial.content}
                  />

                  <div className="px-4 sm:px-6 lg:px-8 pb-5 sm:pb-6">
                    <div className="pt-4 sm:pt-6 border-t border-gray-200 flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        {currentIndex > 0 ? (
                          <button
                            type="button"
                            onClick={() => selectTutorial(courseTutorials[currentIndex - 1])}
                            className="inline-flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium px-4 sm:px-5 py-2.5 rounded-lg transition-colors duration-200 text-base"
                          >
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            Prev
                          </button>
                        ) : (
                          <span />
                        )}
                      </div>

                      <p className="text-sm sm:text-base text-gray-500 tabular-nums shrink-0">
                        {currentIndex + 1}/{courseTutorials.length}
                      </p>

                      <div className="min-w-0">
                        {currentIndex < courseTutorials.length - 1 ? (
                          <button
                            type="button"
                            onClick={() => selectTutorial(courseTutorials[currentIndex + 1])}
                            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 sm:px-5 py-2.5 rounded-lg transition-colors duration-200 text-base"
                          >
                            Next
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </button>
                        ) : (
                          <span />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 px-4">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Select a Tutorial</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Choose a lesson from the outline to start learning.
                </p>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-lg text-base"
                >
                  <Menu className="w-4 h-4 mr-2" />
                  Open lessons
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
