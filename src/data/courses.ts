import { Course, Category, BlogPost, Tutorial } from '@/types';
import { htmlTutorials } from '../tutorials/html'
import { reactTutorials } from '../tutorials/reactjs'
import { backendTutorials } from '@/tutorials/backend';
import { cssTutorials } from '@/tutorials/css';
import { jsTutorials } from '@/tutorials/js';
import { linuxTutorials } from '@/tutorials/linux';
import { dockerTutorials } from '@/tutorials/docker';

export const categories: Category[] = [
  {
    id: '1',
    name: 'DSA',
    slug: 'dsa',
    description: 'Master Data Structures and Algorithms to ace coding interviews.',
    icon: '🧠',
    color: 'from-yellow-400 via-yellow-500 to-yellow-600',
    courseCount: 20
  },
  {
    id: '2',
    name: 'Fullstack Development',
    slug: 'fullstack-development',
    description: 'Learn to build complete web applications using Python, Node.js, and more.',
    icon: '🌐',
    color: 'from-cyan-400 via-blue-400 to-blue-600',
    courseCount: 15
  },
  {
    id: '3',
    name: 'Python',
    slug: 'python',
    description: 'Learn Python for web, data science, automation, and more.',
    icon: '🐍',
    color: 'from-green-400 via-green-500 to-green-600',
    courseCount: 18
  },
  {
    id: '4',
    name: 'Java',
    slug: 'java',
    description: 'Master Java programming for backend and mobile applications.',
    icon: '☕',
    color: 'from-red-400 via-red-500 to-red-600',
    courseCount: 14
  },
    {
    id: '5',
    name: 'DevOps & Automation',
    slug: 'devops-automation',
    description: 'Master DevOps tools and automation practices',
    icon: '⚙️',
    color: 'from-blue-500 to-purple-600',
    courseCount: 6
  },
];









export const featuredBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with DevOps: A Beginner\'s Roadmap',
    description: 'Learn the essential DevOps practices and tools every developer should know in 2024.',
    slug: 'getting-started-devops-beginners-roadmap',
    content: '',
    author: 'CodeBattle Team',
    publishedAt: '2024-01-15',
    thumbnail: '/images/blog/devops-roadmap.jpg',
    tags: ['DevOps', 'Career', 'Beginner'],
    readTime: '8 min read',
    featured: true
  },
  {
    id: '2',
    title: 'Docker vs Kubernetes: Which Should You Learn First?',
    description: 'Understanding the relationship between Docker and Kubernetes and which technology to prioritize.',
    slug: 'docker-vs-kubernetes-learn-first',
    content: '',
    author: 'CodeBattle Team',
    publishedAt: '2024-01-10',
    thumbnail: '/images/blog/docker-vs-kubernetes.jpg',
    tags: ['Docker', 'Kubernetes', 'Containers'],
    readTime: '6 min read',
    featured: true
  },
  {
    id: '3',
    title: 'AWS Free Tier: Maximum Learning with Zero Cost',
    description: 'How to maximize your learning experience using AWS Free Tier without unexpected charges.',
    slug: 'aws-free-tier-maximum-learning',
    content: '',
    author: 'CodeBattle Team',
    publishedAt: '2024-01-05',
    thumbnail: '/images/blog/aws-free-tier.jpg',
    tags: ['AWS', 'Cloud', 'Cost Optimization'],
    readTime: '10 min read',
    featured: true
  }
];






export const tutorials: Tutorial[] = [
  ...htmlTutorials,
  ...cssTutorials,
  ...jsTutorials,
  ...reactTutorials,
  ...backendTutorials,
  ...linuxTutorials,
  ...dockerTutorials
];

// console.log(tutorials.length)





export const youtubeChannelData = {
  channelName: 'CodeBattle with ajay',
  channelId: 'UCxxxxxx', // Replace with your channel ID
  channelUrl: 'https://www.youtube.com/@codebattlewithajay',
  subscriberCount: '540+',
  videoCount: '80+',
  description: 'Learn Dsa, Fullstack Developement, and Devops through practical tutorials and real-world projects.'
};
