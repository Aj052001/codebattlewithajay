import Image from 'next/image';
import Link from 'next/link';
import { Youtube, Twitter, Github, Linkedin } from 'lucide-react';
import { youtubeChannelData } from '@/data/courses';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Mock Test', href: '/mock-test' },
    { name: 'About', href: '/about' },
  ];

  const socialLinks = [
    {
      name: 'YouTube',
      href: youtubeChannelData.channelUrl,
      icon: Youtube,
      color: 'hover:text-blue-600',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/codebattlewithajay',
      icon: Twitter,
      color: 'hover:text-blue-500',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Aj052001/',
      icon: Github,
      color: 'hover:text-slate-900',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ajaysingh87/',
      icon: Linkedin,
      color: 'hover:text-blue-600',
    },
  ];

  return (
    <footer className="mt-auto shrink-0 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 py-6 sm:py-8">
          <div className="flex items-center gap-3 min-w-0">
            <Image
              src="/logo-128.png"
              alt="CodeBattle With Ajay"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full shrink-0"
            />
            <div className="min-w-0">
              <p className="text-base sm:text-lg font-semibold text-slate-800 truncate">
                CodeBattle with Ajay
              </p>
              <p className="text-sm text-slate-500">
                © {currentYear} All rights reserved
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-base">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-400 ${social.color} transition-colors duration-200`}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
