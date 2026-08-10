'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, XCircle, RotateCcw, ArrowRight, ClipboardList } from 'lucide-react';
import { MockTest, MOCK_TEST_PASS_PERCENT } from '@/data/mockTest';
import { submitMockTest } from '@/lib/api';

type Phase = 'intro' | 'quiz' | 'result';

type ReviewItem = {
  id: number;
  question: string;
  selectedIndex: number | null;
  correctIndex: number;
  isCorrect: boolean;
  explanation?: string;
};

type MockTestClientProps = {
  test: MockTest & { passPercent?: number };
  useApi?: boolean;
};

export default function MockTestClient({ test, useApi = true }: MockTestClientProps) {
  const questions = test.questions;
  const passMark = test.passPercent ?? MOCK_TEST_PASS_PERCENT;
  const [phase, setPhase] = useState<Phase>('intro');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => Array(questions.length).fill(null)
  );
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{
    score: number;
    total: number;
    percent: number;
    passPercent: number;
    passed: boolean;
    review: ReviewItem[];
  } | null>(null);
  const [error, setError] = useState('');

  const total = questions.length;
  const selected = answers[current];
  const question = questions[current];

  const selectOption = (optionIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[current] = optionIndex;
      return next;
    });
  };

  const finishLocal = () => {
    let score = 0;
    const review = questions.map((q, index) => {
      const selectedIndex = answers[index];
      const isCorrect =
        selectedIndex !== null &&
        q.correctIndex >= 0 &&
        selectedIndex === q.correctIndex;
      if (isCorrect) score += 1;
      return {
        id: q.id,
        question: q.question,
        selectedIndex,
        correctIndex: q.correctIndex,
        isCorrect,
      };
    });
    const percent = Math.round((score / total) * 100);
    setResult({
      score,
      total,
      percent,
      passPercent: passMark,
      passed: percent >= passMark,
      review,
    });
    setPhase('result');
  };

  const finishApi = async () => {
    setSubmitting(true);
    setError('');
    try {
      const data = await submitMockTest(test.slug, answers);
      setResult(data);
      setPhase('result');
    } catch (err) {
      // Fallback to local scoring if API fails and answers exist locally
      if (questions.some((q) => q.correctIndex >= 0)) {
        finishLocal();
      } else {
        setError(err instanceof Error ? err.message : 'Failed to submit test');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const goNext = async () => {
    if (selected === null) return;
    if (current < total - 1) {
      setCurrent((c) => c + 1);
      return;
    }
    if (useApi) await finishApi();
    else finishLocal();
  };

  const goPrev = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };

  const restart = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrent(0);
    setResult(null);
    setError('');
    setPhase('intro');
  };

  if (phase === 'intro') {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 mb-6">
          <ClipboardList className="w-8 h-8" />
        </div>
        <p className="text-sm font-medium text-blue-600 mb-2">{test.topic}</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{test.title}</h1>
        <p className="text-gray-600 mb-6 text-base sm:text-lg">{test.description}</p>
        <ul className="text-left bg-gray-50 rounded-xl p-5 mb-8 space-y-2 text-gray-700">
          <li>• {total} MCQ questions</li>
          <li>
            • Pass mark: <strong>{passMark}%</strong> ({Math.ceil((passMark / 100) * total)}/
            {total} correct)
          </li>
          <li>• You can go back and change answers</li>
          <li>• Result appears after the last question</li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={() => setPhase('quiz')}
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            Start Test
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <Link
            href="/mock-test"
            className="inline-flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            All Tests
          </Link>
        </div>
      </div>
    );
  }

  if (phase === 'result' && result) {
    const { score, percent, passed, passPercent, review } = result;
    return (
      <div className="max-w-2xl mx-auto">
        <div
          className={`rounded-2xl p-8 sm:p-10 text-center border ${
            passed ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          }`}
        >
          {passed ? (
            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
          ) : (
            <XCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          )}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {passed ? 'Passed!' : 'Not Passed'}
          </h2>
          <p className="text-lg text-gray-700 mb-1">
            You scored <strong>{score}</strong> out of <strong>{result.total}</strong>
          </p>
          <p className="text-2xl font-bold mb-4 text-gray-900">{percent}%</p>
          <p className="text-gray-600 mb-8">
            Pass mark: {passPercent}% —{' '}
            {passed ? 'Great job! Keep learning.' : 'Review the topics and try again.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={restart}
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Test
            </button>
            <Link
              href="/mock-test"
              className="inline-flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              All Tests
            </Link>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Answer review</h3>
          {review.map((item, index) => {
            const q = questions.find((x) => x.id === item.id) || questions[index];
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-4 ${
                  item.isCorrect ? 'border-green-200 bg-green-50/50' : 'border-red-200 bg-red-50/50'
                }`}
              >
                <p className="font-medium text-gray-900 mb-2">
                  Q{index + 1}. {item.question}
                </p>
                <p className="text-sm text-gray-700">
                  Your answer:{' '}
                  <span className={item.isCorrect ? 'text-green-700' : 'text-red-700'}>
                    {item.selectedIndex === null || item.selectedIndex === undefined
                      ? 'Not answered'
                      : q?.options[item.selectedIndex]}
                  </span>
                </p>
                {!item.isCorrect && item.correctIndex >= 0 && (
                  <p className="text-sm text-green-700 mt-1">
                    Correct: {q?.options[item.correctIndex]}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const progress = ((current + 1) / total) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>
            Question {current + 1} of {total}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selected === index;
            return (
              <button
                key={option}
                type="button"
                onClick={() => selectOption(index)}
                className={`w-full text-left px-4 py-3.5 rounded-xl border transition-colors ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 text-gray-800'
                }`}
              >
                <span className="font-medium mr-2">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            );
          })}
        </div>

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

        <div className="mt-8 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={goPrev}
            disabled={current === 0 || submitting}
            className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={selected === null || submitting}
            className="inline-flex items-center px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {submitting ? 'Submitting...' : current === total - 1 ? 'Submit' : 'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
