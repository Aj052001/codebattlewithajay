export type MockQuestion = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
};

export type MockTest = {
  id: string;
  title: string;
  description: string;
  slug: string;
  topic: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  publishedAt: string; // ISO date — daily drop at 9 PM
  duration: string;
  questions: MockQuestion[];
};

export const MOCK_TEST_PASS_PERCENT = 60;
export const MOCK_TEST_DAILY_TIME = '9:00 PM';

export const mockTests: MockTest[] = [
  {
    id: '1',
    title: 'Docker Basics Mock Test',
    description:
      '5 MCQs on Docker images, containers, and first commands. Score 60% or higher to pass.',
    slug: 'docker-basics',
    topic: 'Docker',
    difficulty: 'Beginner',
    publishedAt: '2026-08-09T21:00:00+05:30',
    duration: '10 min',
    questions: [
      {
        id: 1,
        question: 'What is Docker mainly used for?',
        options: [
          'Writing HTML pages',
          'Packaging and running applications in containers',
          'Designing UI mockups',
          'Managing Excel sheets',
        ],
        correctIndex: 1,
      },
      {
        id: 2,
        question: 'Which command runs a container from an image?',
        options: ['docker build', 'docker images', 'docker run', 'docker ps'],
        correctIndex: 2,
      },
      {
        id: 3,
        question: 'What is the difference between an image and a container?',
        options: [
          'They are the same thing',
          'An image is a running process; a container is a template',
          'An image is a read-only template; a container is a running instance',
          'A container can only run on Windows',
        ],
        correctIndex: 2,
      },
      {
        id: 4,
        question: 'Which file is commonly used to define a Docker image build?',
        options: [
          'package.json',
          'Dockerfile',
          'docker-compose.yml only',
          'README.md',
        ],
        correctIndex: 1,
      },
      {
        id: 5,
        question: 'Where are public Docker images commonly pulled from?',
        options: ['npm registry', 'Docker Hub', 'GitHub Issues', 'Google Drive'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: '2',
    title: 'Linux Fundamentals Mock Test',
    description:
      '5 MCQs on filesystem, navigation, and everyday Linux commands for DevOps beginners.',
    slug: 'linux-fundamentals',
    topic: 'Linux',
    difficulty: 'Beginner',
    publishedAt: '2026-08-10T21:00:00+05:30',
    duration: '10 min',
    questions: [
      {
        id: 1,
        question: 'In Linux, which command shows your current directory?',
        options: ['ls', 'cd', 'pwd', 'mkdir'],
        correctIndex: 2,
      },
      {
        id: 2,
        question: 'Which command lists files in a directory?',
        options: ['pwd', 'ls', 'touch', 'rm'],
        correctIndex: 1,
      },
      {
        id: 3,
        question: 'What does `cd ..` do?',
        options: [
          'Goes to home directory',
          'Creates a new folder',
          'Moves one level up to the parent directory',
          'Deletes the current directory',
        ],
        correctIndex: 2,
      },
      {
        id: 4,
        question: 'Which symbol represents the root of the Linux filesystem?',
        options: ['~', '/', '.', '..'],
        correctIndex: 1,
      },
      {
        id: 5,
        question: 'Which command creates a new directory?',
        options: ['touch', 'mkdir', 'rmdir', 'cat'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: '3',
    title: 'HTML Basics Mock Test',
    description:
      '5 MCQs on HTML structure, tags, and building your first webpage. Score 60% or higher to pass.',
    slug: 'html-basics',
    topic: 'HTML',
    difficulty: 'Beginner',
    publishedAt: '2026-08-11T21:00:00+05:30',
    duration: '10 min',
    questions: [
      {
        id: 1,
        question: 'What does HTML stand for?',
        options: [
          'HyperText Markup Language',
          'HighText Machine Language',
          'HyperTool Multi Language',
          'Home Tool Markup Language',
        ],
        correctIndex: 0,
      },
      {
        id: 2,
        question: 'Which tag is used for the largest heading?',
        options: ['<heading>', '<h6>', '<h1>', '<head>'],
        correctIndex: 2,
      },
      {
        id: 3,
        question: 'Which tag creates a paragraph?',
        options: ['<para>', '<p>', '<paragraph>', '<text>'],
        correctIndex: 1,
      },
      {
        id: 4,
        question: 'What is the correct HTML element for a line break?',
        options: ['<lb>', '<break>', '<br>', '<newline>'],
        correctIndex: 2,
      },
      {
        id: 5,
        question: 'Which attribute is used to provide an alternate text for an image?',
        options: ['title', 'alt', 'src', 'name'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: '4',
    title: 'JavaScript Basics Mock Test',
    description:
      '5 MCQs on JS variables, data types, and core concepts for beginners. Score 60% or higher to pass.',
    slug: 'javascript-basics',
    topic: 'JavaScript',
    difficulty: 'Beginner',
    publishedAt: '2026-08-12T21:00:00+05:30',
    duration: '10 min',
    questions: [
      {
        id: 1,
        question: 'Which keyword declares a block-scoped variable in modern JavaScript?',
        options: ['var', 'let', 'int', 'define'],
        correctIndex: 1,
      },
      {
        id: 2,
        question: 'What is the output type of typeof null in JavaScript?',
        options: ['null', 'undefined', 'object', 'number'],
        correctIndex: 2,
      },
      {
        id: 3,
        question: 'Which operator checks both value and type equality?',
        options: ['==', '=', '===', '!='],
        correctIndex: 2,
      },
      {
        id: 4,
        question: 'How do you write a single-line comment in JavaScript?',
        options: ['<!-- comment -->', '// comment', '# comment', '/* comment'],
        correctIndex: 1,
      },
      {
        id: 5,
        question: 'Which method adds an element to the end of an array?',
        options: ['push()', 'pop()', 'shift()', 'concat()'],
        correctIndex: 0,
      },
    ],
  },
];

export function getMockTestBySlug(slug: string): MockTest | undefined {
  return mockTests.find((test) => test.slug === slug);
}

export function getAllMockTestSlugs(): string[] {
  return mockTests.map((test) => test.slug);
}
