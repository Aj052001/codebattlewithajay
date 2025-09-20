# CodeBattle With Ajay Platform

A modern, responsive learning platform built with Next.js 15, TypeScript, and Tailwind CSS. Perfect for creating educational content with course management, YouTube integration, and blog functionality.

## 🚀 Features

- **Course Management**: Organized courses with tutorials and sidebar navigation
- **YouTube Integration**: Embedded videos and playlist links
- **Blog System**: Article management with categories and search
- **SEO Optimized**: Complete meta tags, structured data, and sitemap
- **Responsive Design**: Mobile-first design that works on all devices
- **Performance Optimized**: Built for 100% performance and SEO scores

## 📁 Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable components
│   │   ├── features/     # Feature-specific components
│   │   ├── layout/       # Header, Footer, etc.
│   │   └── ui/           # UI components
│   ├── data/             # Course data and content
│   ├── types/            # TypeScript definitions
│   └── utils/            # Utility functions
```

## 🛠️ Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your YouTube channel details and other configurations.

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## 🎯 Customization Guide

### Adding New Courses

1. **Update course data** in `src/data/courses.ts`:
   ```typescript
   {
     id: 'new-id',
     title: 'Your Course Title',
     description: 'Course description',
     slug: 'your-course-slug',
     category: 'Your Category',
     // ... other fields
   }
   ```

2. **Add tutorials** for the course:
   ```typescript
   {
     id: 'tutorial-id',
     title: 'Tutorial Title',
     courseId: 'new-id', // Match the course ID
     content: '<h1>Your HTML content</h1>',
     // ... other fields
   }
   ```

### YouTube Integration

- Replace `youtubePlaylistId` in course data with your actual playlist IDs
- Update `youtubeChannelData` with your channel information
- Video IDs in tutorials should be the YouTube video ID (after `v=` in URL)

### Customizing Appearance

- **Colors**: Edit Tailwind classes in components
- **Fonts**: Change font imports in `src/app/layout.tsx`
- **Logo**: Replace the BookOpen icon in Header component
- **Branding**: Update all references to "CodeBattle" with your brand name

### SEO Configuration

- Update metadata in `src/app/layout.tsx`
- Modify sitemap generation in `src/app/sitemap.ts`
- Configure robots.txt in `src/app/robots.ts`

## 📄 Pages Overview

- **Homepage** (`/`): Hero section, featured courses, categories
- **Courses** (`/courses`): Course listing with filtering
- **Course Detail** (`/courses/[slug]`): Tutorial sidebar with content area
- **Blog** (`/blog`): Blog posts with search and categories
- **About** (`/about`): About page with team info

## 🔧 Key Components

- **CourseCard**: Displays course information and preview
- **CoursePageClient**: Main course learning interface
- **Header/Footer**: Navigation and branding
- **YouTubeEmbed**: Video embedding component

## 📱 Features in Action

- ✅ Course boxes display on homepage and courses page
- ✅ Clicking course opens tutorial sidebar
- ✅ Left sidebar shows course content/topics
- ✅ Right side shows selected tutorial with video and HTML content
- ✅ Navigation between tutorials with Previous/Next buttons
- ✅ YouTube videos embedded and functional
- ✅ Responsive design works on all screen sizes

## 🚀 Deployment

The project is ready for deployment to platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting provider

## 📞 Support

For customization or issues, refer to:
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs
- TypeScript documentation: https://www.typescriptlang.org/docs

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
