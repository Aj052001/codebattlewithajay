import Link from 'next/link';
import { Clock, Users, Star, Youtube, Crown } from 'lucide-react';
import { Course } from '@/types';

interface CourseCardProps {
  course: Course;
  className?: string;
}

const CourseCard = ({ course, className = '' }: CourseCardProps) => {
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800',
  };

  return (
    <div className={`group bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-blue-300 ${className}`}>
      <Link href={`/courses/${course.slug}`}>
        <div className="relative">
          {/* Course Thumbnail */}
          

          {/* Course Content */}
          <div className="p-6">
            {/* Difficulty Badge */}
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${difficultyColors[course.difficulty]}`}>
                {course.difficulty}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {course.duration}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
              {course.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {course.description}
            </p>

            {/* Topics */}
            <div className="flex flex-wrap gap-2 mb-4">
              {course.topics.slice(0, 3).map((topic, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                >
                  {topic}
                </span>
              ))}
              {course.topics.length > 3 && (
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                  +{course.topics.length - 3} more
                </span>
              )}
            </div>

          
          </div>
          
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;