import { Course, Category, BlogPost, Tutorial } from '@/types';
import { htmlTutorials } from '../tutorials/html'
import { reactTutorials } from '../tutorials/reactjs'
import { backendTutorials } from '@/tutorials/backend';

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






export const courses: Course[] = [
    {
    id: '1',
    title: 'HTML Fundamentals',
    description: 'Learn the building blocks of the web with HTML. Create structured web pages and understand semantic tags.',
    slug: 'html-fundamentals',
    category: 'Fullstack Development',
    difficulty: 'Beginner',
    duration: '5 hours',
    thumbnail: '/images/courses/html.jpg',
    youtubePlaylistId: 'PLxxxxxx',
    topics: ['HTML Basics', 'Elements & Tags', 'Forms', 'Tables', 'Semantic HTML'],
    isPaid: false,
    featured: true
  },
  {
    id: '2',
    title: 'CSS Styling Mastery',
    description: 'Master CSS to make beautiful and responsive web pages. Learn layouts, animations, and advanced styling techniques.',
    slug: 'css-styling-mastery',
    category: 'Fullstack Development',
    difficulty: 'Beginner',
    duration: '15 hours',
    thumbnail: '/images/courses/css.jpg',
    youtubePlaylistId: 'PL49awUNfft2JXjskBOK3KVqUf4HsxyT_q',
    topics: ['CSS Basics', 'Selectors', 'Flexbox', 'Grid', 'Animations', 'Responsive Design'],
    isPaid: false,
    featured: true
  },
  {
    id: '3',
    title: 'JavaScript Essentials',
    description: 'Learn JavaScript programming from scratch. Build interactive web applications and understand core JS concepts.',
    slug: 'javascript-essentials',
    category: 'Fullstack Development',
    difficulty: 'Intermediate',
    duration: '30 hours',
    thumbnail: '/images/courses/javascript.jpg',
    youtubePlaylistId: 'PLxxxxxx',
    topics: ['JS Basics', 'Variables & Data Types', 'Functions', 'DOM Manipulation', 'Events', 'ES6+ Features'],
    isPaid: false,
    featured: true
  }, {
  id: '4',
  title: 'React.js',
  description:
    'Master React.js — the powerful JavaScript library for building modern, dynamic, and responsive user interfaces. Learn components, props, state, hooks, and routing from scratch.',
  slug: 'reactjs-fundamentals',
  category: 'Frontend Development',
  difficulty: 'Intermediate',
  duration: '20 hours',
  thumbnail: '/images/courses/reactjs.jpg',
  youtubePlaylistId: 'PLxxxxxx', // replace with your actual React playlist ID
  topics: [
    'Introduction to React.js',
    'JSX & Components',
    'Props and State',
    'Handling Events',
    'React Hooks (useState, useEffect)',
    'React Router DOM',
    'Project: Build a React App'
  ],
  isPaid: false,
  featured: true
},
{
  id: '5',
  title: 'Complete Backend Development',
  description:
    'Master full-stack backend development from scratch. Learn Node.js, databases (SQL & NoSQL), API design, authentication, security, testing, deployment, and build production-ready scalable backend systems.',
  slug: 'complete-backend-development',
  category: 'Backend Development',
  difficulty: 'Advanced',
  duration: '50 hours',
  thumbnail: '/images/courses/backend.jpg',
  youtubePlaylistId: 'PLxxxxxx', // replace with your actual Backend playlist ID
  topics: [
    'Introduction to Backend Development',
    'Node.js & Express Fundamentals',
    'RESTful API Design & Best Practices',
    'SQL Databases (PostgreSQL/MySQL)',
    'NoSQL Databases (MongoDB)',
    'Authentication & Authorization (JWT, OAuth)',
    'API Security & Validation',
    'File Handling & Cloud Storage',
    'Testing (Unit & Integration)',
    'Deployment & DevOps Basics',
    'Project: Full Backend Application'
  ],
  isPaid: false,
  featured: true
}

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
  ...reactTutorials,
  ...backendTutorials

];

// console.log(tutorials.length)





export const youtubeChannelData = {
  channelName: 'CodeBattle with ajay',
  channelId: 'UCxxxxxx', // Replace with your channel ID
  channelUrl: 'https://www.youtube.com/@codebattlewithajay',
  subscriberCount: '350+',
  videoCount: '80+',
  description: 'Learn Dsa, Fullstack Developement, and Devops through practical tutorials and real-world projects.'
};
