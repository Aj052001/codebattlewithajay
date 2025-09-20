import { Course, Category, BlogPost, Tutorial } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'DevOps & Automation',
    slug: 'devops-automation',
    description: 'Master DevOps tools and automation practices',
    icon: '⚙️',
    color: 'from-blue-500 to-purple-600',
    courseCount: 6
  },
  {
    id: '2',
    name: 'Cloud Computing',
    slug: 'cloud-computing',
    description: 'Build and deploy scalable cloud solutions',
    icon: '☁️',
    color: 'from-green-500 to-blue-600',
    courseCount: 2
  },
  {
    id: '3',
    name: 'Containerization',
    slug: 'containerization',
    description: 'Master Docker and container orchestration',
    icon: '📦',
    color: 'from-purple-500 to-pink-600',
    courseCount: 3
  },
  {
    id: '4',
    name: 'Programming & Scripting',
    slug: 'programming-scripting',
    description: 'Learn programming languages and scripting',
    icon: '💻',
    color: 'from-orange-500 to-red-600',
    courseCount: 2
  }
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete Ansible Mastery',
    description: 'Automate IT configurations and deployments with Ansible. Learn playbooks, roles, and advanced automation techniques.',
    slug: 'complete-ansible-mastery',
    category: 'DevOps & Automation',
    difficulty: 'Intermediate',
    duration: '8 hours',
    thumbnail: '/images/courses/ansible.jpg',
    youtubePlaylistId: 'PLxxxxxx', // Replace with your playlist ID
    topics: ['Ansible Basics', 'Playbooks', 'Roles', 'Inventory Management', 'Advanced Automation'],
    isPaid: false,
    featured: true,
    isNew: true
  },
  {
    id: '2',
    title: 'AWS Cloud Solutions',
    description: 'Master AWS to build secure, scalable cloud solutions. From EC2 to Lambda and beyond.',
    slug: 'aws-cloud-solutions',
    category: 'Cloud Computing',
    difficulty: 'Beginner',
    duration: '12 hours',
    thumbnail: '/images/courses/aws.jpg',
    youtubePlaylistId: 'PLxxxxxx',
    topics: ['AWS Fundamentals', 'EC2', 'S3', 'Lambda', 'CloudFormation', 'Security Best Practices'],
    isPaid: false,
    featured: true
  },
  {
    id: '3',
    title: 'Docker Complete Guide',
    description: 'Build and deploy containerized applications with Docker. Master containers from basics to production.',
    slug: 'docker-complete-guide',
    category: 'Containerization',
    difficulty: 'Beginner',
    duration: '6 hours',
    thumbnail: '/images/courses/docker.jpg',
    youtubePlaylistId: 'PLxxxxxx',
    topics: ['Docker Basics', 'Images & Containers', 'Dockerfile', 'Networking', 'Volumes', 'Best Practices'],
    isPaid: false,
    featured: true
  },
  {
    id: '4',
    title: 'Docker Compose Mastery',
    description: 'Manage multi-container applications with Docker Compose. Orchestrate complex applications effortlessly.',
    slug: 'docker-compose-mastery',
    category: 'Containerization',
    difficulty: 'Intermediate',
    duration: '4 hours',
    thumbnail: '/images/courses/docker-compose.jpg',
    youtubePlaylistId: 'PLxxxxxx',
    topics: ['Compose Basics', 'Multi-service Apps', 'Networks', 'Volumes', 'Environment Variables'],
    isPaid: false
  },
  {
    id: '5',
    title: 'Docker Swarm Orchestration',
    description: 'Simplify container orchestration with Docker Swarm. Scale and manage distributed applications.',
    slug: 'docker-swarm-orchestration',
    category: 'Containerization',
    difficulty: 'Advanced',
    duration: '5 hours',
    thumbnail: '/images/courses/docker-swarm.jpg',
    youtubePlaylistId: 'PLxxxxxx',
    topics: ['Swarm Basics', 'Services', 'Stacks', 'Load Balancing', 'High Availability'],
    isPaid: false
  },
  {
    id: '6',
    title: 'Jenkins CI/CD Pipeline',
    description: 'Automate build, test, and deployment pipelines with Jenkins. Master continuous integration and delivery.',
    slug: 'jenkins-ci-cd-pipeline',
    category: 'DevOps & Automation',
    difficulty: 'Intermediate',
    duration: '7 hours',
    thumbnail: '/images/courses/jenkins.jpg',
    youtubePlaylistId: 'PLxxxxxx',
    topics: ['Jenkins Setup', 'Pipelines', 'Plugins', 'Integration', 'Best Practices'],
    isPaid: false
  },
  {
    id: '7',
    title: 'Kubernetes Complete Course',
    description: 'Orchestrate containerized workloads at scale with Kubernetes. From basics to advanced concepts.',
    slug: 'kubernetes-complete-course',
    category: 'Containerization',
    difficulty: 'Advanced',
    duration: '15 hours',
    thumbnail: '/images/courses/kubernetes.jpg',
    youtubePlaylistId: 'PLxxxxxx',
    topics: ['K8s Architecture', 'Pods', 'Services', 'Deployments', 'ConfigMaps', 'Secrets', 'Ingress'],
    isPaid: false,
    featured: true
  },
  {
    id: '8',
    title: 'Shell Scripting Mastery',
    description: 'Automate repetitive tasks with powerful shell scripts. Master Bash scripting from beginner to expert.',
    slug: 'shell-scripting-mastery',
    category: 'Programming & Scripting',
    difficulty: 'Beginner',
    duration: '5 hours',
    thumbnail: '/images/courses/shell-scripting.jpg',
    youtubePlaylistId: 'PLxxxxxx',
    topics: ['Bash Basics', 'Variables', 'Control Structures', 'Functions', 'File Operations', 'Advanced Techniques'],
    isPaid: true
  },
  {
    id: '9',
    title: 'Terraform Infrastructure as Code',
    description: 'Automate cloud provisioning with Terraform\'s Infrastructure as Code approach. Master cloud automation.',
    slug: 'terraform-infrastructure-as-code',
    category: 'DevOps & Automation',
    difficulty: 'Intermediate',
    duration: '10 hours',
    thumbnail: '/images/courses/terraform.jpg',
    youtubePlaylistId: 'PLxxxxxx',
    topics: ['Terraform Basics', 'Providers', 'Resources', 'Modules', 'State Management', 'Best Practices'],
    isPaid: true,
    isNew: true
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

// Tutorial content for each course
export const tutorials: Tutorial[] = [
  // Ansible Course Tutorials
  {
    id: '1',
    title: 'Introduction to Ansible',
    description: 'Learn the basics of Ansible automation platform',
    slug: 'introduction-to-ansible',
    courseId: '1',
    youtubeVideoId: 'dQw4w9WgXcQ',
    content: `
      <h1>Introduction to Ansible</h1>
      <p>Ansible is an open-source automation platform that simplifies complex configuration management, application deployment, intranet orchestration, and many other IT needs.</p>
      
      <h2>What is Ansible?</h2>
      <p>Ansible is a radically simple IT automation engine that automates cloud provisioning, configuration management, application deployment, intranet orchestration, and many other IT needs.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Agentless:</strong> No need to install agents on managed nodes</li>
        <li><strong>Simple:</strong> Uses YAML syntax for playbooks</li>
        <li><strong>Powerful:</strong> Can manage complex deployments</li>
        <li><strong>Flexible:</strong> Works with existing tools and processes</li>
      </ul>
      
      <h2>Installation</h2>
      <pre><code># Install Ansible on Ubuntu/Debian
sudo apt update
sudo apt install ansible

# Verify installation
ansible --version</code></pre>
      
      <h2>Next Steps</h2>
      <p>In the next tutorial, we'll learn about Ansible inventory and how to manage hosts.</p>
    `,
    duration: '15 min',
    order: 1,
    tags: ['ansible', 'basics', 'introduction']
  },
  {
    id: '2',
    title: 'Ansible Inventory Management',
    description: 'Understanding how to organize and manage your infrastructure with Ansible inventory',
    slug: 'ansible-inventory-management',
    courseId: '1',
    youtubeVideoId: 'dQw4w9WgXcQ',
    content: `
      <h1>Ansible Inventory Management</h1>
      <p>The inventory is where you define the hosts and groups of hosts upon which commands, modules, and tasks in a playbook operate.</p>
      
      <h2>Static Inventory</h2>
      <p>Create an inventory file (hosts.ini):</p>
      <pre><code>[webservers]
web1.example.com
web2.example.com

[databases]
db1.example.com
db2.example.com

[production:children]
webservers
databases</code></pre>
      
      <h2>Dynamic Inventory</h2>
      <p>For cloud environments, you can use dynamic inventory scripts that pull host information from cloud providers.</p>
      
      <h2>Inventory Variables</h2>
      <pre><code>[webservers]
web1.example.com http_port=80
web2.example.com http_port=8080

[webservers:vars]
http_port=80
max_clients=200</code></pre>
    `,
    duration: '20 min',
    order: 2,
    tags: ['ansible', 'inventory', 'hosts']
  },
  {
    id: '3',
    title: 'Writing Your First Playbook',
    description: 'Learn to create and execute Ansible playbooks',
    slug: 'writing-first-playbook',
    courseId: '1',
    youtubeVideoId: 'dQw4w9WgXcQ',
    content: `
      <h1>Writing Your First Playbook</h1>
      <p>Playbooks are Ansible's configuration, deployment, and orchestration language.</p>
      
      <h2>Basic Playbook Structure</h2>
      <pre><code>---
- name: Install and start Apache
  hosts: webservers
  become: yes
  tasks:
    - name: Install Apache
      apt:
        name: apache2
        state: present
        update_cache: yes
    
    - name: Start Apache service
      service:
        name: apache2
        state: started
        enabled: yes</code></pre>
      
      <h2>Running the Playbook</h2>
      <pre><code># Run the playbook
ansible-playbook -i hosts.ini playbook.yml

# Check syntax
ansible-playbook --syntax-check playbook.yml

# Dry run
ansible-playbook --check playbook.yml</code></pre>
    `,
    duration: '25 min',
    order: 3,
    tags: ['ansible', 'playbooks', 'automation']
  },
  
  // Docker Course Tutorials
  {
    id: '4',
    title: 'Docker Fundamentals',
    description: 'Understanding containers and Docker basics',
    slug: 'docker-fundamentals',
    courseId: '3',
    youtubeVideoId: 'dQw4w9WgXcQ',
    content: `
      <h1>Docker Fundamentals</h1>
      <p>Docker is a platform for developing, shipping, and running applications using containerization.</p>
      
      <h2>What are Containers?</h2>
      <p>Containers are lightweight, portable, and isolated environments that package applications with their dependencies.</p>
      
      <h2>Docker vs Virtual Machines</h2>
      <table border="1">
        <tr><th>Docker</th><th>Virtual Machines</th></tr>
        <tr><td>Shares OS kernel</td><td>Full OS for each VM</td></tr>
        <tr><td>Lightweight</td><td>Resource intensive</td></tr>
        <tr><td>Fast startup</td><td>Slow startup</td></tr>
      </table>
      
      <h2>Basic Commands</h2>
      <pre><code># Check Docker version
docker --version

# Run a container
docker run hello-world

# List running containers
docker ps

# List all containers
docker ps -a</code></pre>
    `,
    duration: '18 min',
    order: 1,
    tags: ['docker', 'containers', 'fundamentals']
  },
  {
    id: '5',
    title: 'Working with Docker Images',
    description: 'Learn how to build, manage, and optimize Docker images',
    slug: 'working-with-docker-images',
    courseId: '3',
    youtubeVideoId: 'dQw4w9WgXcQ',
    content: `
      <h1>Working with Docker Images</h1>
      <p>Docker images are read-only templates used to create containers.</p>
      
      <h2>Creating a Dockerfile</h2>
      <pre><code># Use official Node.js image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]</code></pre>
      
      <h2>Building and Managing Images</h2>
      <pre><code># Build an image
docker build -t my-app:latest .

# List images
docker images

# Remove an image
docker rmi my-app:latest

# Pull from registry
docker pull nginx:alpine</code></pre>
    `,
    duration: '22 min',
    order: 2,
    tags: ['docker', 'images', 'dockerfile']
  },
  
  // AWS Course Tutorials
  {
    id: '6',
    title: 'AWS Account Setup and IAM',
    description: 'Setting up your AWS account and understanding Identity and Access Management',
    slug: 'aws-account-setup-iam',
    courseId: '2',
    youtubeVideoId: 'dQw4w9WgXcQ',
    content: `
      <h1>AWS Account Setup and IAM</h1>
      <p>Learn how to set up your AWS account securely and manage user access with IAM.</p>
      
      <h2>Creating an AWS Account</h2>
      <ol>
        <li>Go to aws.amazon.com</li>
        <li>Click "Create an AWS Account"</li>
        <li>Enter your email and choose account type</li>
        <li>Complete billing information</li>
        <li>Verify your phone number</li>
        <li>Choose your support plan</li>
      </ol>
      
      <h2>IAM Best Practices</h2>
      <ul>
        <li><strong>Never use root account:</strong> Create IAM users for daily tasks</li>
        <li><strong>Enable MFA:</strong> Add multi-factor authentication</li>
        <li><strong>Principle of least privilege:</strong> Give minimal required permissions</li>
        <li><strong>Use groups:</strong> Manage permissions through groups</li>
        <li><strong>Regular rotation:</strong> Rotate access keys regularly</li>
      </ul>
      
      <h2>Creating an IAM User</h2>
      <pre><code># Using AWS CLI
aws iam create-user --user-name john-doe
aws iam attach-user-policy --user-name john-doe --policy-arn arn:aws:iam::aws:policy/PowerUserAccess</code></pre>
    `,
    duration: '30 min',
    order: 1,
    tags: ['aws', 'iam', 'security', 'setup']
  }
];

export const youtubeChannelData = {
  channelName: 'CodeBattle',
  channelId: 'UCxxxxxx', // Replace with your channel ID
  channelUrl: 'https://www.youtube.com/@codebattle',
  subscriberCount: '10K+',
  videoCount: '100+',
  description: 'Learn DevOps, Cloud Computing, and Programming through practical tutorials and real-world projects.'
};
