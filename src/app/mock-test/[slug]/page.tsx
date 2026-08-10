import { notFound } from 'next/navigation';
import { generateSEO } from '@/utils';
import { getMockTestBySlug } from '@/data/mockTest';
import { fetchMockTest } from '@/lib/api';
import MockTestClient from '@/components/features/MockTestClient';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const apiTest = await fetchMockTest(slug).catch(() => null);
  const test = apiTest || getMockTestBySlug(slug);
  if (!test) {
    return generateSEO('Mock Test Not Found', 'This mock test does not exist.', '/mock-test');
  }
  return generateSEO(test.title, test.description, `/mock-test/${test.slug}`);
}

export default async function MockTestDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const apiTest = await fetchMockTest(slug).catch(() => null);
  const test = apiTest || getMockTestBySlug(slug);

  if (!test) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/60 to-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MockTestClient test={test} useApi={!getMockTestBySlug(slug) || Boolean(apiTest)} />
      </div>
    </div>
  );
}
