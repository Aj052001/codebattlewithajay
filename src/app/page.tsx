import Link from 'next/link';
import { ArrowRight, Play, BookOpen, Youtube } from 'lucide-react';
import { courses, categories, featuredBlogs, youtubeChannelData } from '@/data/courses';
import CourseCard from '@/components/ui/CourseCard';

export default function Home() {
  const featuredCourses = courses.filter(course => course.featured).slice(0, 6);
  const latestBlogs = featuredBlogs.slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Hero Badge */}
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Youtube className="w-4 h-4 mr-2" />
              Join {youtubeChannelData.subscriberCount} learners on YouTube
            </div>

            {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
  Welcome to{' '}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
    CodeBattle with Ajay 
  </span>

</h1>


            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn <strong>DSA</strong>, Build  <strong>Projects</strong>, and Grow as a  <strong>Full-Stack Developer</strong>
            </p>

            {/* Description */}
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              Code smarter. Build faster. Master technologies with practical tutorials and real-world projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/courses"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                href={youtubeChannelData.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Free Videos
                <Youtube className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Stats */}
            {/* <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{youtubeChannelData.videoCount}</div>
                <div className="text-gray-600">Free Tutorials</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-gray-600">Students Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-blue-200 opacity-20">
          <div className="text-8xl">⚙️</div>
        </div>
        <div className="absolute bottom-20 right-10 text-purple-200 opacity-20">
          <div className="text-6xl">☁️</div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Level Up Your Coding Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ick from our practical courses and become confident in programming languages and tools            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/courses?category=${category.slug}`}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.courseCount} courses</span>
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Featured Courses
              </h2>
              <p className="text-xl text-gray-600">
                Start your learning journey with our most popular courses
              </p>
            </div>
            <Link
              href="/courses"
              className="mt-6 lg:mt-0 inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
            >
              View All Courses
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Channel Promotion */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Youtube className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Subscribe to codebattle with ajay on YouTube
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get access to free video tutorials, live coding sessions, and behind-the-scenes content. 
              Join our growing community of developers!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="bg-red-700 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold">{youtubeChannelData.subscriberCount}</div>
                <div className="text-red-200">Subscribers</div>
              </div>
              <div className="bg-red-700 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold">{youtubeChannelData.videoCount}</div>
                <div className="text-red-200">Videos</div>
              </div>
            </div>
            
            <Link
              href={youtubeChannelData.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Youtube className="w-5 h-5 mr-2" />
              Subscribe Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Latest from Our Blog
              </h2>
              <p className="text-xl text-gray-600">
                Stay updated with the latest trends and insights in tech
              </p>
            </div>
            <Link
              href="/blog"
              className="mt-6 lg:mt-0 inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
            >
              View All Posts
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 overflow-hidden group">
                <Link href={`/blog/${blog.slug}`}>
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-blue-600 opacity-50" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {blog.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {blog.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{blog.readTime}</span>
                      <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already mastering the skills of tomorrow. 
            Start with our free courses today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Browse Courses
            </Link>
            <Link
              href={youtubeChannelData.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
