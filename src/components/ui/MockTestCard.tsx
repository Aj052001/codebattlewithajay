import Link from 'next/link';
import { Clock, HelpCircle, ArrowRight, CalendarClock } from 'lucide-react';
import { MockTest, MOCK_TEST_PASS_PERCENT } from '@/data/mockTest';

interface MockTestCardProps {
  test: MockTest;
}

const difficultyColors = {
  Beginner: 'bg-green-100 text-green-800',
  Intermediate: 'bg-yellow-100 text-yellow-800',
  Advanced: 'bg-red-100 text-red-800',
};

export default function MockTestCard({ test }: MockTestCardProps) {
  const publishedLabel = new Date(test.publishedAt).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <Link
      href={`/mock-test/${test.slug}`}
      className="group block bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${difficultyColors[test.difficulty]}`}
          >
            {test.difficulty}
          </span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
            {test.topic}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {test.title}
        </h3>

        <p className="text-gray-600 text-base mb-4 line-clamp-3 leading-relaxed">
          {test.description}
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-5">
          <span className="inline-flex items-center">
            <HelpCircle className="w-4 h-4 mr-1.5" />
            {test.questions.length} Questions
          </span>
          <span className="inline-flex items-center">
            <Clock className="w-4 h-4 mr-1.5" />
            {test.duration}
          </span>
          <span className="inline-flex items-center">
            <CalendarClock className="w-4 h-4 mr-1.5" />
            {publishedLabel} · 9 PM
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Pass: {MOCK_TEST_PASS_PERCENT}%</span>
          <span className="inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
            Start Test
            <ArrowRight className="w-4 h-4 ml-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
