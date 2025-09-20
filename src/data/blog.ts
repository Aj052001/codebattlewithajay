import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "Getting Started with DevOps: A Beginner's Roadmap",
    description:
      'Learn the essential DevOps practices and tools every developer should know in 2024.',
    slug: 'getting-started-devops-beginners-roadmap',
    content: `
      <h1>Getting Started with DevOps</h1>
      <p>DevOps brings development and operations together to improve collaboration and accelerate delivery. In this guide, you'll learn the core concepts and the tools to start your journey.</p>
      <h2>Core Principles</h2>
      <ul>
        <li>Collaboration and Communication</li>
        <li>Automation Everywhere</li>
        <li>Continuous Integration & Continuous Delivery (CI/CD)</li>
        <li>Monitoring and Feedback</li>
      </ul>
      <h2>Starter Toolbelt</h2>
      <p>Begin with <strong>Git</strong> for version control, <strong>Docker</strong> for containerization, <strong>Jenkins/GitHub Actions</strong> for automation, and <strong>Kubernetes</strong> for orchestration.</p>
      <p>Practice by building a small CI pipeline that runs tests on every push and builds a Docker image.</p>
    `,
    author: 'CodeBattle Team',
    publishedAt: '2024-01-15',
    thumbnail: '/images/blog/devops-roadmap.jpg',
    tags: ['DevOps', 'Career', 'Beginner'],
    readTime: '8 min read',
    featured: true,
  },
  {
    id: '2',
    title: 'Docker vs Kubernetes: Which Should You Learn First?',
    description:
      'Understanding the relationship between Docker and Kubernetes and which technology to prioritize.',
    slug: 'docker-vs-kubernetes-learn-first',
    content: `
      <h1>Docker vs Kubernetes</h1>
      <p>Docker helps you build and run containers; Kubernetes orchestrates containers at scale. Learn Docker fundamentals first, then Kubernetes.</p>
      <h2>Quick Comparison</h2>
      <table>
        <tr><th>Docker</th><th>Kubernetes</th></tr>
        <tr><td>Builds and runs containers</td><td>Schedules and manages containers across nodes</td></tr>
        <tr><td>Simple to start</td><td>More complex but powerful</td></tr>
      </table>
    `,
    author: 'CodeBattle Team',
    publishedAt: '2024-01-10',
    thumbnail: '/images/blog/docker-vs-kubernetes.jpg',
    tags: ['Docker', 'Kubernetes', 'Containers'],
    readTime: '6 min read',
    featured: true,
  },
  {
    id: '3',
    title: 'AWS Free Tier: Maximum Learning with Zero Cost',
    description:
      'How to maximize your learning experience using AWS Free Tier without unexpected charges.',
    slug: 'aws-free-tier-maximum-learning',
    content: `
      <h1>AWS Free Tier Guide</h1>
      <p>The AWS Free Tier lets you explore popular services for free within monthly limits. Learn how to stay within limits and avoid costs.</p>
      <h2>Safe Services</h2>
      <ul>
        <li>EC2 t2.micro / t3.micro (750 hours)</li>
        <li>S3 storage (5GB)</li>
        <li>Lambda (1M requests)</li>
      </ul>
    `,
    author: 'CodeBattle Team',
    publishedAt: '2024-01-05',
    thumbnail: '/images/blog/aws-free-tier.jpg',
    tags: ['AWS', 'Cloud', 'Cost Optimization'],
    readTime: '10 min read',
    featured: true,
  },
  {
    id: '4',
    title: 'Microservices Architecture with Docker and Kubernetes',
    description:
      'Learn how to design, build, and deploy microservices using modern container technologies.',
    slug: 'microservices-architecture-docker-kubernetes',
    content: `
      <h1>Microservices with Docker & K8s</h1>
      <p>Break large applications into smaller, independently deployable services and deploy them with Kubernetes.</p>
    `,
    author: 'CodeBattle Team',
    publishedAt: '2024-01-20',
    thumbnail: '/images/blog/microservices.jpg',
    tags: ['Microservices', 'Docker', 'Kubernetes', 'Architecture'],
    readTime: '12 min read',
    featured: false,
  },
  {
    id: '5',
    title: 'Infrastructure as Code with Terraform: Best Practices',
    description:
      'Discover the best practices for managing cloud infrastructure using Terraform and IaC principles.',
    slug: 'infrastructure-as-code-terraform-best-practices',
    content: `
      <h1>Terraform Best Practices</h1>
      <p>Use modules, remote state, and CI integration. Keep your state secure and version-controlled.</p>
    `,
    author: 'CodeBattle Team',
    publishedAt: '2024-01-18',
    thumbnail: '/images/blog/terraform-best-practices.jpg',
    tags: ['Terraform', 'IaC', 'Best Practices', 'Cloud'],
    readTime: '9 min read',
    featured: false,
  },
  {
    id: '6',
    title: 'CI/CD Pipeline Security: Protecting Your Deployments',
    description:
      'Essential security practices for building secure CI/CD pipelines and protecting your applications.',
    slug: 'cicd-pipeline-security-protecting-deployments',
    content: `
      <h1>CI/CD Security</h1>
      <p>Scan dependencies, use secrets securely, enforce code reviews, and sign your artifacts.</p>
    `,
    author: 'CodeBattle Team',
    publishedAt: '2024-01-12',
    thumbnail: '/images/blog/cicd-security.jpg',
    tags: ['CI/CD', 'Security', 'DevSecOps', 'Jenkins'],
    readTime: '15 min read',
    featured: false,
  },
];
