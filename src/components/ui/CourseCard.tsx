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
          <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <div className="text-6xl opacity-20">
                {course.category === 'DevOps & Automation' && '⚙️'}
                {course.category === 'Cloud Computing' && '☁️'}
                {course.category === 'Containerization' && '📦'}
                {course.category === 'Programming & Scripting' && '💻'}
              </div>
            </div>
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {course.isNew && (
                <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                  New
                </span>
              )}
              {course.featured && (
                <span className="bg-yellow-500 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Featured
                </span>
              )}
            </div>

            {/* Price/Free Badge */}
            <div className="absolute top-3 right-3">
              {course.isPaid ? (
                <span className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  Paid
                </span>
              ) : (
                <span className="bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                  Free
                </span>
              )}
            </div>

            {/* YouTube Play Button Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="bg-red-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                <Youtube className="w-6 h-6" />
              </div>
            </div>
          </div>

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

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center text-gray-500 text-sm">
                <Users className="w-4 h-4 mr-1" />
                <span>1K+ students</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">4.8</span>
                </div>
                <span className="text-blue-600 text-sm font-medium group-hover:underline">
                  Learn More →
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;