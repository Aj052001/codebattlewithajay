import Link from 'next/link';
import { Youtube, Twitter, Github, Linkedin, BookOpen } from 'lucide-react';
import { youtubeChannelData } from '@/data/courses';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  const categories = [
    { name: 'DevOps & Automation', href: '/courses?category=devops-automation' },
    { name: 'Cloud Computing', href: '/courses?category=cloud-computing' },
    { name: 'Containerization', href: '/courses?category=containerization' },
    { name: 'Programming', href: '/courses?category=programming-scripting' },
  ];

  const socialLinks = [
    {
      name: 'YouTube',
      href: youtubeChannelData.channelUrl,
      icon: Youtube,
      color: 'hover:text-red-600',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/codebattle', // Replace with your Twitter
      icon: Twitter,
      color: 'hover:text-blue-400',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/codebattle', // Replace with your GitHub
      icon: Github,
      color: 'hover:text-gray-900',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/codebattle', // Replace with your LinkedIn
      icon: Linkedin,
      color: 'hover:text-blue-600',
    },
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">CodeBattle Learning</h3>
                  <p className="text-sm text-gray-600">Your Gateway to Programming Mastery</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                Learn DevOps, Cloud Computing, and Programming through practical tutorials and 
                real-world projects. Master the skills that matter in today&apos;s tech industry.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={category.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-sm text-gray-600">
                © {currentYear} CodeBattle Learning. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/disclaimer"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;