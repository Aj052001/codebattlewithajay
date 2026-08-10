'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  BookOpen,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check
} from 'lucide-react';
import { formatDate } from '@/utils';
import { BlogPost } from '@/types';

interface BlogPostClientProps {
  blog: BlogPost;
  relatedBlogs: BlogPost[];
}

export default function BlogPostClient({ blog, relatedBlogs }: BlogPostClientProps) {
  const [isSharing, setIsSharing] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out this article: ${blog.title}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsSharing(!isSharing)}
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
              
              {/* Share Dropdown */}
              {isSharing && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-10 min-w-[200px]">
                  <div className="space-y-2">
                    <a
                      href={shareLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      <Twitter className="w-4 h-4 mr-3 text-blue-400" />
                      Share on Twitter
                    </a>
                    <a
                      href={shareLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      <Facebook className="w-4 h-4 mr-3 text-blue-600" />
                      Share on Facebook
                    </a>
                    <a
                      href={shareLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4 mr-3 text-blue-700" />
                      Share on LinkedIn
                    </a>
                    <button
                      onClick={handleCopyLink}
                      className="flex items-center w-full p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 mr-3 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 mr-3 text-gray-500" />
                      )}
                      {copied ? 'Copied!' : 'Copy Link'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article>
          {/* Blog Header */}
          <header className="mb-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {blog.title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-xl text-gray-600 mb-6 leading-relaxed">
              {blog.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-6 border-b border-gray-200">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span className="font-medium text-gray-700">{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{formatDate(blog.publishedAt)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
              <div className="text-6xl opacity-30">📚</div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 overflow-hidden">
            <div 
              className="prose prose-base sm:prose-lg lg:prose-xl prose-blue max-w-none break-words leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

         
        </article>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <article key={relatedBlog.id}>
                  <Link href={`/blog/${relatedBlog.slug}`}>
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 overflow-hidden group">
                      <div className="h-40 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <div className="text-3xl opacity-30">📚</div>
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {relatedBlog.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                          {relatedBlog.title}
                        </h3>
                        
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {relatedBlog.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {relatedBlog.readTime}
                          </span>
                          <span className="flex items-center text-blue-600 group-hover:text-blue-700">
                            Read more
                            <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
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

     
      </div>
    </div>
  );
}