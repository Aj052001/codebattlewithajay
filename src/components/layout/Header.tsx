'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Youtube, BookOpen, User, Home, ClipboardList } from 'lucide-react';
import { youtubeChannelData } from '@/data/courses';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Mock Test', href: '/mock-test', icon: ClipboardList },
    { name: 'About', href: '/about', icon: User },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-white/95 backdrop-blur shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 min-w-0">
            <Image
              src="/logo-256.png"
              alt="CodeBattle With Ajay"
              width={40}
              height={40}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full shrink-0"
              priority
            />
            <div className="min-w-0">
              <h1 className="text-base sm:text-xl font-bold text-gray-900 truncate">
                <span className="sm:hidden">CodeBattle</span>
                <span className="hidden sm:inline">CodeBattle With Ajay</span>
              </h1>
              <p className="hidden sm:block text-xs text-gray-600">
                Learn coding with real challenges
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href={youtubeChannelData.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              <Youtube className="w-4 h-4" />
              <span>Subscribe</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 z-40 bg-black/30 md:hidden"
            aria-label="Close menu overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="md:hidden absolute left-0 right-0 top-16 z-50 border-t bg-white shadow-lg">
            <div className="px-3 pt-2 pb-4 space-y-1 max-h-[calc(100dvh-4rem)] overflow-y-auto">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  <span>{item.name}</span>
                </Link>
              ))}

              <Link
                href={youtubeChannelData.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200"
              >
                <Youtube className="w-5 h-5 shrink-0" />
                <span>Subscribe to Channel</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
