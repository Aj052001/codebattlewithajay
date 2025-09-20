import { notFound } from 'next/navigation';
import { courses, tutorials } from '@/data/courses';
import { generateSEO, generateCourseStructuredData } from '@/utils';
import CoursePageClient from '@/components/features/CoursePageClient';

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  
  if (!course) {
    return {
      title: 'Course Not Found | CodeBattle With Ajay',
    };
  }

  const seoData = generateSEO(
    course.title,
    course.description,
    `/courses/${course.slug}`,
    course.thumbnail
  );

  return {
    ...seoData,
    keywords: [
      ...course.topics,
      course.category,
      course.difficulty,
      'free course',
      'tutorial',
      'online learning'
    ],
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  // Get tutorials for this course
  const courseTutorials = tutorials
    .filter((t) => t.courseId === course.id)
    .sort((a, b) => a.order - b.order);

  const structuredData = generateCourseStructuredData(course);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <CoursePageClient course={course} courseTutorials={courseTutorials} />
    </>
  );
}