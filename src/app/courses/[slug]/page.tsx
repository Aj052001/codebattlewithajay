import { notFound } from 'next/navigation';
import { courses as staticCourses, tutorials as staticTutorials } from '@/data/courses';
import { generateSEO, generateCourseStructuredData } from '@/utils';
import { fetchCourse, fetchTutorialsByCourseSlug } from '@/lib/api';
import CoursePageClient from '@/components/features/CoursePageClient';

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params;
  const apiCourse = await fetchCourse(slug).catch(() => null);
  const course = apiCourse || staticCourses.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: 'Course Not Found | CodeBattle Learning',
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
      'online learning',
    ],
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const apiCourse = await fetchCourse(slug).catch(() => null);
  const staticCourse = staticCourses.find((c) => c.slug === slug);
  const course = apiCourse || staticCourse;

  if (!course) {
    notFound();
  }

  let courseTutorials = await fetchTutorialsByCourseSlug(slug).catch(() => []);

  // Fallback to local tutorial files if API has no lessons yet
  if (!courseTutorials.length && staticCourse) {
    courseTutorials = staticTutorials
      .filter((t) => t.courseId === staticCourse.id)
      .sort((a, b) => a.order - b.order);
  }

  const structuredData = generateCourseStructuredData(course);

  return (
    <>
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
