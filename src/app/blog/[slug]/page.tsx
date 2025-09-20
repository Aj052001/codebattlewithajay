import { notFound } from 'next/navigation';
import { featuredBlogs } from '@/data/courses';
import { generateSEO } from '@/utils';
import BlogPostClient from '@/components/features/BlogPostClient';

// Extended blog data (same as in your blog page)
const allBlogs = [
  ...featuredBlogs,
  {
    id: '4',
    title: 'Microservices Architecture with Docker and Kubernetes',
    description: 'Learn how to design, build, and deploy microservices using modern container technologies.',
    slug: 'microservices-architecture-docker-kubernetes',
    content: `
      <h2>Introduction to Microservices</h2>
      <p>Microservices architecture has become a popular approach for building scalable and maintainable applications. In this comprehensive guide, we'll explore how to implement microservices using Docker and Kubernetes.</p>
      
      <h2>What are Microservices?</h2>
      <p>Microservices is an architectural style that structures an application as a collection of small, loosely coupled services. Each service is:</p>
      <ul>
        <li>Independently deployable</li>
        <li>Focused on a specific business capability</li>
        <li>Owned by a small team</li>
        <li>Communicates via well-defined APIs</li>
      </ul>
      
      <h2>Benefits of Microservices</h2>
      <p>The microservices architecture offers several advantages:</p>
      <ul>
        <li><strong>Scalability:</strong> Scale individual services based on demand</li>
        <li><strong>Technology Diversity:</strong> Use different technologies for different services</li>
        <li><strong>Fault Isolation:</strong> Failures in one service don't bring down the entire system</li>
        <li><strong>Team Independence:</strong> Different teams can work on different services</li>
      </ul>
      
      <h2>Containerizing with Docker</h2>
      <p>Docker provides the perfect foundation for microservices by offering:</p>
      <ul>
        <li>Consistent environments across development and production</li>
        <li>Lightweight containers for efficient resource usage</li>
        <li>Easy service isolation and deployment</li>
      </ul>
      
      <h2>Orchestrating with Kubernetes</h2>
      <p>Kubernetes takes microservices deployment to the next level by providing:</p>
      <ul>
        <li>Automated deployment and scaling</li>
        <li>Service discovery and load balancing</li>
        <li>Rolling updates and rollbacks</li>
        <li>Health monitoring and self-healing</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>When implementing microservices with Docker and Kubernetes, follow these best practices:</p>
      <ul>
        <li>Keep services small and focused</li>
        <li>Use API versioning for backward compatibility</li>
        <li>Implement proper monitoring and logging</li>
        <li>Use configuration management for environment-specific settings</li>
      </ul>
    `,
    author: 'Ajay Singh',
    publishedAt: '2024-01-20',
    thumbnail: '/images/blog/microservices.jpg',
    tags: ['Microservices', 'Docker', 'Kubernetes', 'Architecture'],
    readTime: '12 min read',
    featured: false
  },
  {
    id: '5',
    title: 'Infrastructure as Code with Terraform: Best Practices',
    description: 'Discover the best practices for managing cloud infrastructure using Terraform and IaC principles.',
    slug: 'infrastructure-as-code-terraform-best-practices',
    content: `
      <h2>What is Infrastructure as Code?</h2>
      <p>Infrastructure as Code (IaC) is the practice of managing and provisioning computing infrastructure through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools.</p>
      
      <h2>Why Choose Terraform?</h2>
      <p>Terraform is one of the most popular IaC tools because it:</p>
      <ul>
        <li>Supports multiple cloud providers</li>
        <li>Uses declarative configuration language</li>
        <li>Provides state management</li>
        <li>Offers a rich ecosystem of providers</li>
      </ul>
      
      <h2>Best Practices for Terraform</h2>
      <h3>1. Use Version Control</h3>
      <p>Always store your Terraform configurations in version control systems like Git. This ensures:</p>
      <ul>
        <li>Change tracking and history</li>
        <li>Collaboration capabilities</li>
        <li>Rollback functionality</li>
      </ul>
      
      <h3>2. Organize Your Code</h3>
      <p>Structure your Terraform code using:</p>
      <ul>
        <li>Modules for reusable components</li>
        <li>Environment-specific configurations</li>
        <li>Clear naming conventions</li>
      </ul>
      
      <h3>3. Use Remote State</h3>
      <p>Store your Terraform state remotely to enable:</p>
      <ul>
        <li>Team collaboration</li>
        <li>State locking</li>
        <li>Backup and recovery</li>
      </ul>
      
      <h2>Security Considerations</h2>
      <p>When working with Terraform, always:</p>
      <ul>
        <li>Use secrets management for sensitive data</li>
        <li>Implement proper access controls</li>
        <li>Regularly audit your infrastructure</li>
        <li>Follow the principle of least privilege</li>
      </ul>
    `,
    author: 'Ajay Singh',
    publishedAt: '2024-01-18',
    thumbnail: '/images/blog/terraform-best-practices.jpg',
    tags: ['Terraform', 'IaC', 'Best Practices', 'Cloud'],
    readTime: '9 min read',
    featured: false
  },
  {
    id: '6',
    title: 'CI/CD Pipeline Security: Protecting Your Deployments',
    description: 'Essential security practices for building secure CI/CD pipelines and protecting your applications.',
    slug: 'cicd-pipeline-security-protecting-deployments',
    content: `
      <h2>The Importance of CI/CD Security</h2>
      <p>As CI/CD pipelines become the backbone of modern software delivery, securing these pipelines has become critical. A compromised pipeline can lead to:</p>
      <ul>
        <li>Malicious code injection</li>
        <li>Data breaches</li>
        <li>Service disruptions</li>
        <li>Compliance violations</li>
      </ul>
      
      <h2>Common CI/CD Security Threats</h2>
      <h3>1. Code Injection Attacks</h3>
      <p>Attackers may try to inject malicious code through:</p>
      <ul>
        <li>Compromised dependencies</li>
        <li>Malicious pull requests</li>
        <li>Insecure build scripts</li>
      </ul>
      
      <h3>2. Credential Theft</h3>
      <p>Sensitive credentials can be exposed through:</p>
      <ul>
        <li>Hardcoded secrets in code</li>
        <li>Unsecured environment variables</li>
        <li>Logging sensitive information</li>
      </ul>
      
      <h2>Security Best Practices</h2>
      <h3>1. Implement Secure Code Review</h3>
      <ul>
        <li>Use automated security scanning tools</li>
        <li>Require peer reviews for all changes</li>
        <li>Implement branch protection rules</li>
      </ul>
      
      <h3>2. Secure Secrets Management</h3>
      <ul>
        <li>Use dedicated secrets management tools</li>
        <li>Rotate secrets regularly</li>
        <li>Implement least privilege access</li>
      </ul>
      
      <h3>3. Container Security</h3>
      <ul>
        <li>Scan container images for vulnerabilities</li>
        <li>Use minimal base images</li>
        <li>Implement image signing and verification</li>
      </ul>
      
      <h2>Monitoring and Compliance</h2>
      <p>Maintain security through:</p>
      <ul>
        <li>Continuous monitoring of pipeline activities</li>
        <li>Regular security audits</li>
        <li>Compliance checks automation</li>
        <li>Incident response procedures</li>
      </ul>
    `,
    author: 'Ajay Singh',
    publishedAt: '2024-01-12',
    thumbnail: '/images/blog/cicd-security.jpg',
    tags: ['CI/CD', 'Security', 'DevSecOps', 'Jenkins'],
    readTime: '15 min read',
    featured: false
  }
];

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = allBlogs.find((b) => b.slug === slug);
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found | CodeBattle Learning',
    };
  }

  const seoData = generateSEO(
    blog.title,
    blog.description,
    `/blog/${blog.slug}`,
    blog.thumbnail
  );

  return {
    ...seoData,
    keywords: [
      ...blog.tags,
      'blog',
      'tutorial',
      'programming',
      'development'
    ],
  };
}

export default async function BlogPost({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = allBlogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Get related blogs (same tags, different post)
  const relatedBlogs = allBlogs
    .filter((b) => 
      b.id !== blog.id && 
      b.tags.some(tag => blog.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <BlogPostClient blog = {blog} relatedBlogs={relatedBlogs} />
  );
}