import { Clock } from 'lucide-react';
import { generateSEO } from '@/utils';
import {
  mockTests as staticMockTests,
  MOCK_TEST_DAILY_TIME,
  MOCK_TEST_PASS_PERCENT,
} from '@/data/mockTest';
import { fetchMockTests } from '@/lib/api';
import MockTestCard from '@/components/ui/MockTestCard';

export const metadata = generateSEO(
  'Mock Tests',
  `Practice daily mock tests with MCQs. New test every day at ${MOCK_TEST_DAILY_TIME}. Pass with ${MOCK_TEST_PASS_PERCENT}%.`,
  '/mock-test'
);

async function getTests() {
  try {
    const apiTests = await fetchMockTests();
    return apiTests.length ? apiTests : staticMockTests;
  } catch {
    return staticMockTests;
  }
}

export default async function MockTestPage() {
  const tests = [...(await getTests())].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/60 to-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Mock Tests</h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-4">
            Practice with short MCQ tests. Score at least {MOCK_TEST_PASS_PERCENT}% to pass.
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-200 px-4 py-2 rounded-full text-sm font-medium">
            <Clock className="w-4 h-4 shrink-0" />
            New mock test added every day at {MOCK_TEST_DAILY_TIME}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {tests.map((test) => (
            <MockTestCard key={test.id} test={test} />
          ))}
        </div>
      </div>
    </div>
  );
}
