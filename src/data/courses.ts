import { Course, Category, BlogPost, Tutorial } from '@/types';
import { htmlTutorials } from '../tutorials/html'
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
    duration: '2 hours',
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
    duration: '5 hours',
    thumbnail: '/images/courses/css.jpg',
    youtubePlaylistId: 'PLxxxxxx',
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
    difficulty: 'Beginner',
    duration: '6 hours',
    thumbnail: '/images/courses/javascript.jpg',
    youtubePlaylistId: 'PLxxxxxx',
    topics: ['JS Basics', 'Variables & Data Types', 'Functions', 'DOM Manipulation', 'Events', 'ES6+ Features'],
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

];

// console.log(tutorials.length)






// Tutorial content for each course
// export const tutorials: Tutorial[] = [
//   // Ansible Course Tutorials
//   {
//     id: '1',
//     title: 'Introduction to Ansible',
//     description: 'Learn the basics of Ansible automation platform',
//     slug: 'introduction-to-ansible',
//     courseId: '1',
//     youtubeVideoId: 'dQw4w9WgXcQ',
//     content: `
//       <h1>Introduction to Ansible</h1>
//       <p>Ansible is an open-source automation platform that simplifies complex configuration management, application deployment, intranet orchestration, and many other IT needs.</p>
      
//       <h2>What is Ansible?</h2>
//       <p>Ansible is a radically simple IT automation engine that automates cloud provisioning, configuration management, application deployment, intranet orchestration, and many other IT needs.</p>
      
//       <h2>Key Features</h2>
//       <ul>
//         <li><strong>Agentless:</strong> No need to install agents on managed nodes</li>
//         <li><strong>Simple:</strong> Uses YAML syntax for playbooks</li>
//         <li><strong>Powerful:</strong> Can manage complex deployments</li>
//         <li><strong>Flexible:</strong> Works with existing tools and processes</li>
//       </ul>
      
//       <h2>Installation</h2>
//       <pre><code># Install Ansible on Ubuntu/Debian
// sudo apt update
// sudo apt install ansible

// # Verify installation
// ansible --version</code></pre>
      
//       <h2>Next Steps</h2>
//       <p>In the next tutorial, we'll learn about Ansible inventory and how to manage hosts.</p>
//     `,
//     duration: '15 min',
//     order: 1,
//     tags: ['ansible', 'basics', 'introduction']
//   },
//   {
//     id: '2',
//     title: 'Ansible Inventory Management',
//     description: 'Understanding how to organize and manage your infrastructure with Ansible inventory',
//     slug: 'ansible-inventory-management',
//     courseId: '1',
//     youtubeVideoId: 'dQw4w9WgXcQ',
//     content: `
//       <h1>Ansible Inventory Management</h1>
//       <p>The inventory is where you define the hosts and groups of hosts upon which commands, modules, and tasks in a playbook operate.</p>
      
//       <h2>Static Inventory</h2>
//       <p>Create an inventory file (hosts.ini):</p>
//       <pre><code>[webservers]
// web1.example.com
// web2.example.com

// [databases]
// db1.example.com
// db2.example.com

// [production:children]
// webservers
// databases</code></pre>
      
//       <h2>Dynamic Inventory</h2>
//       <p>For cloud environments, you can use dynamic inventory scripts that pull host information from cloud providers.</p>
      
//       <h2>Inventory Variables</h2>
//       <pre><code>[webservers]
// web1.example.com http_port=80
// web2.example.com http_port=8080

// [webservers:vars]
// http_port=80
// max_clients=200</code></pre>
//     `,
//     duration: '20 min',
//     order: 2,
//     tags: ['ansible', 'inventory', 'hosts']
//   },
//   {
//     id: '3',
//     title: 'Writing Your First Playbook',
//     description: 'Learn to create and execute Ansible playbooks',
//     slug: 'writing-first-playbook',
//     courseId: '1',
//     youtubeVideoId: 'dQw4w9WgXcQ',
//     content: `
//       <h1>Writing Your First Playbook</h1>
//       <p>Playbooks are Ansible's configuration, deployment, and orchestration language.</p>
      
//       <h2>Basic Playbook Structure</h2>
//       <pre><code>---
// - name: Install and start Apache
//   hosts: webservers
//   become: yes
//   tasks:
//     - name: Install Apache
//       apt:
//         name: apache2
//         state: present
//         update_cache: yes
    
//     - name: Start Apache service
//       service:
//         name: apache2
//         state: started
//         enabled: yes</code></pre>
      
//       <h2>Running the Playbook</h2>
//       <pre><code># Run the playbook
// ansible-playbook -i hosts.ini playbook.yml

// # Check syntax
// ansible-playbook --syntax-check playbook.yml

// # Dry run
// ansible-playbook --check playbook.yml</code></pre>
//     `,
//     duration: '25 min',
//     order: 3,
//     tags: ['ansible', 'playbooks', 'automation']
//   },



  
//   // Docker Course Tutorials
//   {
//     id: '1',
//     title: 'Docker Fundamentals',
//     description: 'Understanding containers and Docker basics',
//     slug: 'docker-fundamentals',
//     courseId: '3',
//     youtubeVideoId: 'dQw4w9WgXcQ',
//     content: `
//       <h1>Docker Fundamentals</h1>
//       <p>Docker is a platform for developing, shipping, and running applications using containerization.</p>
      
//       <h2>What are Containers?</h2>
//       <p>Containers are lightweight, portable, and isolated environments that package applications with their dependencies.</p>
      
//       <h2>Docker vs Virtual Machines</h2>
//       <table border="1">
//         <tr><th>Docker</th><th>Virtual Machines</th></tr>
//         <tr><td>Shares OS kernel</td><td>Full OS for each VM</td></tr>
//         <tr><td>Lightweight</td><td>Resource intensive</td></tr>
//         <tr><td>Fast startup</td><td>Slow startup</td></tr>
//       </table>
      
//       <h2>Basic Commands</h2>
//       <pre><code># Check Docker version
// docker --version

// # Run a container
// docker run hello-world

// # List running containers
// docker ps

// # List all containers
// docker ps -a</code></pre>
//     `,
//     duration: '18 min',
//     order: 1,
//     tags: ['docker', 'containers', 'fundamentals']
//   },
//   {
//     id: '5',
//     title: 'Working with Docker Images',
//     description: 'Learn how to build, manage, and optimize Docker images',
//     slug: 'working-with-docker-images',
//     courseId: '3',
//     youtubeVideoId: 'dQw4w9WgXcQ',
//     content: `
//       <h1>Working with Docker Images</h1>
//       <p>Docker images are read-only templates used to create containers.</p>
      
//       <h2>Creating a Dockerfile</h2>
//       <pre><code># Use official Node.js image
// FROM node:16-alpine

// # Set working directory
// WORKDIR /app

// # Copy package files
// COPY package*.json ./

// # Install dependencies
// RUN npm install

// # Copy application code
// COPY . .

// # Expose port
// EXPOSE 3000

// # Start the application
// CMD ["npm", "start"]</code></pre>
      
//       <h2>Building and Managing Images</h2>
//       <pre><code># Build an image
// docker build -t my-app:latest .

// # List images
// docker images

// # Remove an image
// docker rmi my-app:latest

// # Pull from registry
// docker pull nginx:alpine</code></pre>
//     `,
//     duration: '22 min',
//     order: 2,
//     tags: ['docker', 'images', 'dockerfile']
//   },
  
//     {
//     id: '5',
//     title: 'Working with Docker Images',
//     description: 'Learn how to build, manage, and optimize Docker images',
//     slug: 'working-with-docker-images',
//     courseId: '3',
//     youtubeVideoId: 'dQw4w9WgXcQ',
//     content: `
//       <h1>Working with Docker Images</h1>
//       <p>Docker images are read-only templates used to create containers.</p>
      
//       <h2>Creating a Dockerfile</h2>
//       <pre><code># Use official Node.js image
// FROM node:16-alpine

// # Set working directory
// WORKDIR /app

// # Copy package files
// COPY package*.json ./

// # Install dependencies
// RUN npm install

// # Copy application code
// COPY . .

// # Expose port
// EXPOSE 3000

// # Start the application
// CMD ["npm", "start"]</code></pre>
      
//       <h2>Building and Managing Images</h2>
//       <pre><code># Build an image
// docker build -t my-app:latest .

// # List images
// docker images

// # Remove an image
// docker rmi my-app:latest

// # Pull from registry
// docker pull nginx:alpine</code></pre>
//     `,
//     duration: '22 min',
//     order: 2,
//     tags: ['docker', 'images', 'dockerfile']
//   },
//     {
//     id: '5',
//     title: 'Working with Docker Images',
//     description: 'Learn how to build, manage, and optimize Docker images',
//     slug: 'working-with-docker-images',
//     courseId: '3',
//     youtubeVideoId: 'dQw4w9WgXcQ',
//     content: `
//       <h1>Working with Docker Images</h1>
//       <p>Docker images are read-only templates used to create containers.</p>
      
//       <h2>Creating a Dockerfile</h2>
//       <pre><code># Use official Node.js image
// FROM node:16-alpine

// # Set working directory
// WORKDIR /app

// # Copy package files
// COPY package*.json ./

// # Install dependencies
// RUN npm install

// # Copy application code
// COPY . .

// # Expose port
// EXPOSE 3000

// # Start the application
// CMD ["npm", "start"]</code></pre>
      
//       <h2>Building and Managing Images</h2>
//       <pre><code># Build an image
// docker build -t my-app:latest .

// # List images
// docker images

// # Remove an image
// docker rmi my-app:latest

// # Pull from registry
// docker pull nginx:alpine</code></pre>
//     `,
//     duration: '22 min',
//     order: 2,
//     tags: ['docker', 'images', 'dockerfile']
//   },
//     {
//     id: '5',
//     title: 'Working with Docker Images',
//     description: 'Learn how to build, manage, and optimize Docker images',
//     slug: 'working-with-docker-images',
//     courseId: '3',
//     youtubeVideoId: 'dQw4w9WgXcQ',
//     content: `
//       <h1>Working with Docker Images</h1>
//       <p>Docker images are read-only templates used to create containers.</p>
      
//       <h2>Creating a Dockerfile</h2>
//       <pre><code># Use official Node.js image
// FROM node:16-alpine

// # Set working directory
// WORKDIR /app

// # Copy package files
// COPY package*.json ./

// # Install dependencies
// RUN npm install

// # Copy application code
// COPY . .

// # Expose port
// EXPOSE 3000

// # Start the application
// CMD ["npm", "start"]</code></pre>
      
//       <h2>Building and Managing Images</h2>
//       <pre><code># Build an image
// docker build -t my-app:latest .

// # List images
// docker images

// # Remove an image
// docker rmi my-app:latest

// # Pull from registry
// docker pull nginx:alpine</code></pre>
//     `,
//     duration: '22 min',
//     order: 2,
//     tags: ['docker', 'images', 'dockerfile']
//   },
//     {
//     id: '5',
//     title: 'Working with Docker Images',
//     description: 'Learn how to build, manage, and optimize Docker images',
//     slug: 'working-with-docker-images',
//     courseId: '3',
//     youtubeVideoId: 'dQw4w9WgXcQ',
//     content: `
//       <h1>Working with Docker Images</h1>
//       <p>Docker images are read-only templates used to create containers.</p>
      
//       <h2>Creating a Dockerfile</h2>
//       <pre><code># Use official Node.js image
// FROM node:16-alpine

// # Set working directory
// WORKDIR /app

// # Copy package files
// COPY package*.json ./

// # Install dependencies
// RUN npm install

// # Copy application code
// COPY . .

// # Expose port
// EXPOSE 3000

// # Start the application
// CMD ["npm", "start"]</code></pre>
      
//       <h2>Building and Managing Images</h2>
//       <pre><code># Build an image
// docker build -t my-app:latest .

// # List images
// docker images

// # Remove an image
// docker rmi my-app:latest

// # Pull from registry
// docker pull nginx:alpine</code></pre>
//     `,
//     duration: '22 min',
//     order: 2,
//     tags: ['docker', 'images', 'dockerfile']
//   },
//     {
//     id: '5',
//     title: 'Working with Docker Images',
//     description: 'Learn how to build, manage, and optimize Docker images',
//     slug: 'working-with-docker-images',
//     courseId: '3',
//     youtubeVideoId: 'dQw4w9WgXcQ',
//     content: `
//       <h1>Working with Docker Images</h1>
//       <p>Docker images are read-only templates used to create containers.</p>
      
//       <h2>Creating a Dockerfile</h2>
//       <pre><code># Use official Node.js image
// FROM node:16-alpine

// # Set working directory
// WORKDIR /app

// # Copy package files
// COPY package*.json ./

// # Install dependencies
// RUN npm install

// # Copy application code
// COPY . .

// # Expose port
// EXPOSE 3000

// # Start the application
// CMD ["npm", "start"]</code></pre>
      
//       <h2>Building and Managing Images</h2>
//       <pre><code># Build an image
// docker build -t my-app:latest .

// # List images
// docker images

// # Remove an image
// docker rmi my-app:latest

// # Pull from registry
// docker pull nginx:alpine</code></pre>
//     `,
//     duration: '22 min',
//     order: 2,
//     tags: ['docker', 'images', 'dockerfile']
//   },
//     {
//     id: '5',
//     title: 'Working with Docker Images',
//     description: 'Learn how to build, manage, and optimize Docker images',
//     slug: 'working-with-docker-images',
//     courseId: '3',
//     youtubeVideoId: 'dQw4w9WgXcQ',
//     content: `
//       <h1>Working with Docker Images</h1>
//       <p>Docker images are read-only templates used to create containers.</p>
      
//       <h2>Creating a Dockerfile</h2>
//       <pre><code># Use official Node.js image
// FROM node:16-alpine

// # Set working directory
// WORKDIR /app

// # Copy package files
// COPY package*.json ./

// # Install dependencies
// RUN npm install

// # Copy application code
// COPY . .

// # Expose port
// EXPOSE 3000

// # Start the application
// CMD ["npm", "start"]</code></pre>
      
//       <h2>Building and Managing Images</h2>
//       <pre><code># Build an image
// docker build -t my-app:latest .

// # List images
// docker images

// # Remove an image
// docker rmi my-app:latest

// # Pull from registry
// docker pull nginx:alpine</code></pre>
//     `,
//     duration: '22 min',
//     order: 2,
//     tags: ['docker', 'images', 'dockerfile']
//   },
//     {
//     id: '5',
//     title: 'Working with Docker Images',
//     description: 'Learn how to build, manage, and optimize Docker images',
//     slug: 'working-with-docker-images',
//     courseId: '3',
//     youtubeVideoId: 'dQw4w9WgXcQ',
//     content: `
//       <h1>Working with Docker Images</h1>
//       <p>Docker images are read-only templates used to create containers.</p>
      
//       <h2>Creating a Dockerfile</h2>
//       <pre><code># Use official Node.js image
// FROM node:16-alpine

// # Set working directory
// WORKDIR /app

// # Copy package files
// COPY package*.json ./

// # Install dependencies
// RUN npm install

// # Copy application code
// COPY . .

// # Expose port
// EXPOSE 3000

// # Start the application
// CMD ["npm", "start"]</code></pre>
      
//       <h2>Building and Managing Images</h2>
//       <pre><code># Build an image
// docker build -t my-app:latest .

// # List images
// docker images

// # Remove an image
// docker rmi my-app:latest

// # Pull from registry
// docker pull nginx:alpine</code></pre>
//     `,
//     duration: '22 min',
//     order: 2,
//     tags: ['docker', 'images', 'dockerfile']
//   },
//   // AWS Course Tutorials
//   {
//     id: '6',
//     title: 'AWS Account Setup and IAM',
//     description: 'Setting up your AWS account and understanding Identity and Access Management',
//     slug: 'aws-account-setup-iam',
//     courseId: '2',
//     youtubeVideoId: 'dQw4w9WgXcQ',
//     content: `
//       <h1>AWS Account Setup and IAM</h1>
//       <p>Learn how to set up your AWS account securely and manage user access with IAM.</p>
      
//       <h2>Creating an AWS Account</h2>
//       <ol>
//         <li>Go to aws.amazon.com</li>
//         <li>Click "Create an AWS Account"</li>
//         <li>Enter your email and choose account type</li>
//         <li>Complete billing information</li>
//         <li>Verify your phone number</li>
//         <li>Choose your support plan</li>
//       </ol>
      
//       <h2>IAM Best Practices</h2>
//       <ul>
//         <li><strong>Never use root account:</strong> Create IAM users for daily tasks</li>
//         <li><strong>Enable MFA:</strong> Add multi-factor authentication</li>
//         <li><strong>Principle of least privilege:</strong> Give minimal required permissions</li>
//         <li><strong>Use groups:</strong> Manage permissions through groups</li>
//         <li><strong>Regular rotation:</strong> Rotate access keys regularly</li>
//       </ul>
      
//       <h2>Creating an IAM User</h2>
//       <pre><code># Using AWS CLI
// aws iam create-user --user-name john-doe
// aws iam attach-user-policy --user-name john-doe --policy-arn arn:aws:iam::aws:policy/PowerUserAccess</code></pre>
//     `,
//     duration: '30 min',
//     order: 1,
//     tags: ['aws', 'iam', 'security', 'setup']
//   }
// ];





export const youtubeChannelData = {
  channelName: 'CodeBattle with ajay',
  channelId: 'UCxxxxxx', // Replace with your channel ID
  channelUrl: 'https://www.youtube.com/@codebattlewithajay',
  subscriberCount: '350+',
  videoCount: '80+',
  description: 'Learn Dsa, Fullstack Developement, and Devops through practical tutorials and real-world projects.'
};
