import Link from 'next/link';
import { BookOpen, Youtube, Users, Target, Award, Heart } from 'lucide-react';
import { youtubeChannelData } from '@/data/courses';
import { generateSEO } from '@/utils';

export const metadata = generateSEO(
  'About CodeBattle Learning',
  'Learn about CodeBattle Learning platform - your gateway to mastering DevOps, Cloud Computing, and Programming through practical tutorials and real-world projects.',
  '/about'
);

export default function AboutPage() {
  const stats = [
    { label: 'Students Worldwide', value: '50K+', icon: Users },
    { label: 'Free Courses', value: '25+', icon: BookOpen },
    { label: 'YouTube Subscribers', value: youtubeChannelData.subscriberCount, icon: Youtube },
    { label: 'Hours of Content', value: '200+', icon: Award },
  ];

  const values = [
    {
      icon: Target,
      title: 'Practical Learning',
      description: 'We focus on hands-on, real-world projects that you can apply immediately in your career.',
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'Building a supportive community where learners help each other grow and succeed.',
    },
    {
      icon: BookOpen,
      title: 'Quality Content',
      description: 'Every course is carefully crafted with industry best practices and up-to-date technologies.',
    },
    {
      icon: Award,
      title: 'Continuous Improvement',
      description: 'We constantly update our content based on industry trends and student feedback.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About CodeBattle Learning
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Empowering developers worldwide with practical skills in DevOps, Cloud Computing, 
            and Programming through comprehensive tutorials and real-world projects.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At CodeBattle Learning, we believe that technology education should be accessible, 
                practical, and engaging. Our mission is to bridge the gap between theoretical 
                knowledge and real-world application.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We&apos;re committed to creating a learning ecosystem where developers at all levels
                can master the tools and practices that drive modern software development and 
                infrastructure management.
              </p>
              <Link
                href="/courses"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
              >
                Explore Our Courses
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and help us create meaningful 
              learning experiences for our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  CodeBattle Learning was born from a simple observation: there&apos;s a significant
                  gap between what students learn in traditional educational settings and what 
                  they need to know to succeed in modern software development roles.
                </p>
                <p className="mb-6">
                  As experienced developers and DevOps engineers, we noticed that many talented 
                  individuals struggled to find practical, hands-on resources that would help 
                  them master the tools and practices used in real-world environments.
                </p>
                <p className="mb-6">
                  That&apos;s why we created CodeBattle Learning - to provide comprehensive, practical
                  education that prepares developers for the challenges they&apos;ll face in their careers.
                  Our courses are designed by practitioners who use these technologies daily in 
                  production environments.
                </p>
                <p>
                  Today, we&apos;re proud to serve thousands of learners worldwide through our free
                  courses and YouTube channel, helping them build the skills they need to advance 
                  their careers and create amazing software solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team consists of passionate educators and industry professionals 
              committed to your learning success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder team members - you can customize these */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                CB
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">CodeBattle Team</h3>
              <p className="text-gray-600 mb-4">Founder & Lead Instructor</p>
              <p className="text-sm text-gray-500">
                Passionate about making complex technologies accessible through practical, 
                hands-on learning experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                DX
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">DevOps Expert</h3>
              <p className="text-gray-600 mb-4">Senior DevOps Engineer</p>
              <p className="text-sm text-gray-500">
                Specializes in cloud infrastructure, automation, and helping teams 
                adopt DevOps best practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                CC
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Architect</h3>
              <p className="text-gray-600 mb-4">Cloud Solutions Architect</p>
              <p className="text-sm text-gray-500">
                Expert in designing and implementing scalable cloud solutions 
                across multiple platforms.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Join Our Learning Community
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Ready to start your journey? Explore our courses and join thousands 
              of developers who are already advancing their careers with CodeBattle Learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Courses
              </Link>
              <Link
                href={youtubeChannelData.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Subscribe on YouTube
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}