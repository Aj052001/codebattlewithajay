'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { courses, categories } from '@/data/courses';
import CourseCard from '@/components/ui/CourseCard';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCourses = useMemo(() => {
    let filtered = courses;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.topics.some(topic => topic.toLowerCase().includes(query)) ||
        course.category.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      const category = categories.find(cat => cat.slug === selectedCategory);
      if (category) {
        filtered = filtered.filter(course => course.category === category.name);
      }
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(course => 
        course.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Courses
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover comprehensive courses designed to take you from beginner to expert 
            in DSA, Fullstack Development, DevOps, Data Analytics.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Courses
                </label>
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    id="search"
                    placeholder="Search courses..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.slug}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div className="mb-6">
                <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty Level
                </label>
                <select
                  id="difficulty"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              {/* Course Categories */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Browse by Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                        selectedCategory === category.slug
                          ? 'bg-blue-100 text-blue-800'
                          : 'hover:bg-gray-100 text-gray-600'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center">
                          <span className="mr-2">{category.icon}</span>
                          {category.name}
                        </span>
                        <span className="text-xs">{category.courseCount}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'} Found
                </h2>
                {searchQuery && (
                  <p className="text-gray-600">
                  Showing results for &ldquo;{searchQuery}&rdquo;
                  </p>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1 mt-4 sm:mt-0">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'list'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Course Grid/List */}
            {filteredCourses.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 gap-8'
                  : 'space-y-6'
              }>
                {filteredCourses.map((course) => (
                  <CourseCard 
                    key={course.id} 
                    course={course}
                    className={viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No courses found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or browse our categories.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedDifficulty('all');
                  }}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}