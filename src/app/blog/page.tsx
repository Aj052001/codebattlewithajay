'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';
import { featuredBlogs } from '@/data/courses';
import { formatDate } from '@/utils';

// Extended blog data with more posts
const allBlogs = [
  ...featuredBlogs,
  {
    id: '4',
    title: 'Microservices Architecture with Docker and Kubernetes',
    description: 'Learn how to design, build, and deploy microservices using modern container technologies.',
    slug: 'microservices-architecture-docker-kubernetes',
    content: '',
    author: 'Ajay Singh',
    publishedAt: '2024-01-20',
    thumbnail: '/images/blog/microservices.jpg',
    tags: ['Microservices', 'Docker', 'Kubernetes', 'Architecture'],
    readTime: '12 min read',
    featured: false
  },
  {
    id: '5',
    title: 'Infrastructure as Code with Terraform: Best Practices',
    description: 'Discover the best practices for managing cloud infrastructure using Terraform and IaC principles.',
    slug: 'infrastructure-as-code-terraform-best-practices',
    content: '',
    author: 'Ajay Singh',
    publishedAt: '2024-01-18',
    thumbnail: '/images/blog/terraform-best-practices.jpg',
    tags: ['Terraform', 'IaC', 'Best Practices', 'Cloud'],
    readTime: '9 min read',
    featured: false
  },
  {
    id: '6',
    title: 'CI/CD Pipeline Security: Protecting Your Deployments',
    description: 'Essential security practices for building secure CI/CD pipelines and protecting your applications.',
    slug: 'cicd-pipeline-security-protecting-deployments',
    content: '',
    author: 'Ajay Singh',
    publishedAt: '2024-01-12',
    thumbnail: '/images/blog/cicd-security.jpg',
    tags: ['CI/CD', 'Security', 'DevSecOps', 'Jenkins'],
    readTime: '15 min read',
    featured: false
  }
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const filteredBlogs = useMemo(() => {
    let filtered = allBlogs;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(query) ||
        blog.description.toLowerCase().includes(query) ||
        blog.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Filter by tag
    if (selectedTag !== 'all') {
      filtered = filtered.filter(blog => 
        blog.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      );
    }

    // Sort by date (newest first)
    return filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }, [searchQuery, selectedTag]);

  const featuredPosts = allBlogs.filter(blog => blog.featured);
  const allTags = Array.from(new Set(allBlogs.flatMap(blog => blog.tags)));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Blog
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights in DevOps, 
            Cloud Computing, and Programming
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Posts */}
     
        {featuredPosts.length > 0 && (
  <section className="mb-16">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Posts</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {featuredPosts.map((post) => (
        <article key={post.id}>
          <Link href={`/blog/${post.slug}`}>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-48 flex items-center justify-center">
                <div className="text-6xl opacity-30">📚</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 text-xl">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(post.publishedAt)}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  </section>
)}


        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Search */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Search Posts</h3>
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Tag className="w-5 h-5 mr-2" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedTag('all')}
                    className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                      selectedTag === 'all'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All
                  </button>
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                        selectedTag === tag
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                <p className="text-sm opacity-90 mb-4">
                  Subscribe to our newsletter for the latest articles and tutorials.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-2 rounded-lg transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  All Posts ({filteredBlogs.length})
                </h2>
                {searchQuery && (
                  <p className="text-gray-600">
                    Showing results for &ldquo;{searchQuery}&rdquo;
                  </p>
                )}
              </div>
            </div>

            {/* Blog Posts */}
            {filteredBlogs.length > 0 ? (
              <div className="space-y-8">
                {filteredBlogs.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 overflow-hidden group">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <div className="h-48 md:h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                            <div className="text-4xl opacity-40">📚</div>
                          </div>
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center gap-2 mb-3">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {post.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <User className="w-4 h-4 mr-1" />
                                {post.author}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {formatDate(post.publishedAt)}
                              </span>
                            </div>
                            
                            <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
                              <span className="mr-2">Read more</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No posts found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or browse our tags.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedTag('all');
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