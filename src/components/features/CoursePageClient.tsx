// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { Clock, Youtube, BookOpen, ArrowLeft, ChevronRight } from 'lucide-react';
// import { Course, Tutorial } from '@/types';
// import { youtubeChannelData } from '@/data/courses';

// interface CoursePageClientProps {
//   course: Course;
//   courseTutorials: Tutorial[];
// }

// export default function CoursePageClient({ course, courseTutorials }: CoursePageClientProps) {
//   // State for selected tutorial
//   const [selectedTutorial, setSelectedTutorial] = useState(courseTutorials[0] || null);

//   const difficultyColors = {
//     Beginner: 'bg-green-100 text-green-800',
//     Intermediate: 'bg-yellow-100 text-yellow-800',
//     Advanced: 'bg-red-100 text-red-800',
//   };

//   if (!courseTutorials.length) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">No Tutorials Available</h2>
//           <p className="text-gray-600 mb-6">This course is still being prepared. Check back soon!</p>
//           <Link
//             href="/courses"
//             className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back to Courses
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white ">
//         <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <Link
//                 href="/courses"
//                 className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
//               >
//                 <ArrowLeft className="w-4 h-4 mr-2" />
//                 Back to Courses
//               </Link>
//               <div className="text-gray-300">|</div>
//               <h1 className="text-xl font-bold text-gray-900">{course.title}</h1>
//             </div>
            
//             <div className="flex items-center space-x-4">
//               <span className={`text-sm font-medium px-3 py-1 rounded-full ${difficultyColors[course.difficulty]}`}>
//                 {course.difficulty}
//               </span>
//               {course.youtubePlaylistId && (
//                 <Link
//                   href={`https://www.youtube.com/playlist?list=${course.youtubePlaylistId}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors duration-200"
//                 >
//                   <Youtube className="w-4 h-4 mr-2" />
//                   Watch on YouTube
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex h-[calc(100vh-73px)]">
//         {/* Left Sidebar - Topics */}
//         <div className="w-80 bg-white border-r overflow-y-auto">
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-gray-900 mb-4">
//               Course Content
//             </h2>
//             <div className="space-y-2">
//               {courseTutorials.map((tutorial, index) => (
//                 <button
//                   key={tutorial.id}
//                   onClick={() => setSelectedTutorial(tutorial)}
//                   className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
//                     selectedTutorial?.id === tutorial.id
//                       ? 'bg-blue-100 text-blue-900 border border-blue-200'
//                       : 'hover:bg-gray-50 border border-gray-200'
//                   }`}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
//                         selectedTutorial?.id === tutorial.id ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'
//                       }`}>
//                         {index + 1}
//                       </div>
//                       <div>
//                         <h3 className="font-medium text-sm mb-1 line-clamp-2">
//                           {tutorial.title}
//                         </h3>
//                         <div className="flex items-center text-xs text-gray-500">
//                           <Clock className="w-3 h-3 mr-1" />
//                           {tutorial.duration}
//                         </div>
//                       </div>
//                     </div>
//                     <ChevronRight className={`w-4 h-4 ${
//                       selectedTutorial?.id === tutorial.id ? 'text-blue-600' : 'text-gray-400'
//                     }`} />
//                   </div>
//                 </button>
//               ))}
//             </div>
            
//             {/* YouTube Channel Promo in Sidebar */}
//             <div className="mt-8 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg p-4">
//               <div className="text-center">
//                 <Youtube className="w-8 h-8 mx-auto mb-2 opacity-90" />
//                 <h3 className="font-bold text-sm mb-1">Subscribe to CodeBattle with ajay</h3>
//                 <p className="text-xs opacity-90 mb-3">
//                   Get more free tutorials
//                 </p>
//                 <Link
//                   href={youtubeChannelData.channelUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-white text-red-600 hover:bg-gray-100 font-medium px-3 py-1 rounded text-xs transition-colors duration-200"
//                 >
//                   Subscribe
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Content Area */}
//         <div className="flex-1 overflow-y-auto">
//           <div className="p-8">
//             {selectedTutorial ? (
//               <div>
//                 {/* Tutorial Header */}
//                 <div className="mb-6">
//                   <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
//                     <span>Tutorial {courseTutorials.findIndex(t => t.id === selectedTutorial.id) + 1}</span>
//                     <span>•</span>
//                     <span>{selectedTutorial.duration}</span>
//                   </div>
//                   <h1 className="text-3xl font-bold text-gray-900 mb-2">
//                     {selectedTutorial.title}
//                   </h1>
//                   <p className="text-lg text-gray-600">
//                     {selectedTutorial.description}
//                   </p>
//                 </div>

             

//                 {/* Tutorial Content */}
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
//                   <div 
//                     className="prose prose-lg max-w-none"
//                     dangerouslySetInnerHTML={{ __html: selectedTutorial.content }}
//                   />
                  
//                   {/* Tutorial Navigation */}
//                   <div className="mt-8 pt-8 border-t border-gray-200 flex justify-between items-center">
//                     <div>
//                       {courseTutorials.findIndex(t => t.id === selectedTutorial.id) > 0 && (
//                         <button
//                           onClick={() => {
//                             const currentIndex = courseTutorials.findIndex(t => t.id === selectedTutorial.id);
//                             setSelectedTutorial(courseTutorials[currentIndex - 1]);
//                           }}
//                           className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
//                         >
//                           <ArrowLeft className="w-4 h-4 mr-2" />
//                           Previous Tutorial
//                         </button>
//                       )}
//                     </div>
                    
//                     <div>
//                       {courseTutorials.findIndex(t => t.id === selectedTutorial.id) < courseTutorials.length - 1 && (
//                         <button
//                           onClick={() => {
//                             const currentIndex = courseTutorials.findIndex(t => t.id === selectedTutorial.id);
//                             setSelectedTutorial(courseTutorials[currentIndex + 1]);
//                           }}
//                           className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
//                         >
//                           Next Tutorial
//                           <ChevronRight className="w-4 h-4 ml-2" />
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="text-center py-16">
//                 <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//                 <h2 className="text-2xl font-bold text-gray-900 mb-2">Select a Tutorial</h2>
//                 <p className="text-gray-600">Choose a tutorial from the sidebar to start learning.</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, Youtube, BookOpen, ArrowLeft, ChevronRight, Menu, X, ChevronLeft } from 'lucide-react';
import { Course, Tutorial } from '@/types';
import { youtubeChannelData } from '@/data/courses';

interface CoursePageClientProps {
  course: Course;
  courseTutorials: Tutorial[];
}

export default function CoursePageClient({ course, courseTutorials }: CoursePageClientProps) {
  const [selectedTutorial, setSelectedTutorial] = useState(courseTutorials[0] || null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800',
  };

  if (!courseTutorials.length) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Tutorials Available</h2>
          <p className="text-gray-600 mb-6">This course is still being prepared. Check back soon!</p>
          <Link
            href="/courses"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Left side */}
            <div className="flex items-center space-x-4">
              <button
                className="sm:hidden inline-flex items-center text-gray-700 hover:text-blue-600"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-6 h-6 mr-2" />
                Menu
              </button>
              <Link
                href="/courses"
                className="hidden sm:inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Courses
              </Link>
              <div className="hidden sm:block text-gray-300">|</div>
              <h1 className="text-xl font-bold text-gray-900">{course.title}</h1>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${difficultyColors[course.difficulty]}`}
              >
                {course.difficulty}
              </span>
              {course.youtubePlaylistId && (
                <Link
                  href={`https://www.youtube.com/playlist?list=${course.youtubePlaylistId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-medium px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors duration-200"
                >
                  <Youtube className="w-4 h-4 mr-2" />
                  Watch on YouTube
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-73px)]">


{/* Sidebar */}
<div
  className={`fixed left-0 top-[64px] bottom-0 w-72 bg-white border-r transform transition-transform duration-300 ease-in-out z-40 sm:static sm:translate-x-0 ${
    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
  <div className="p-4 h-full flex flex-col">
    {/* Close button for mobile */}
    <div className="flex items-center justify-between sm:hidden mb-4">
      <h2 className="text-lg font-bold text-gray-900">Course Content</h2>
      <button
        className="text-gray-600 hover:text-red-500"
        onClick={() => setSidebarOpen(false)}
      >
        <X className="w-6 h-6" />
      </button>
    </div>

    {/* Tutorials list */}
    <ul className="space-y-2 flex-1 overflow-y-auto">
      {courseTutorials.map((tutorial, index) => (
        <li key={tutorial.id}>
          <Link
            href={`#tutorial-${tutorial.id}`} // anchor id yaa alag route use karna hai to change kar sakte ho
            onClick={() => {
              setSelectedTutorial(tutorial);
              setSidebarOpen(false); // mobile auto close
            }}
            className={`block p-3 rounded-lg transition-colors duration-200 ${
              selectedTutorial?.id === tutorial.id
                ? 'bg-blue-100 text-blue-900 border border-blue-200'
                : 'hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    selectedTutorial?.id === tutorial.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-300 text-gray-700'
                  }`}
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-medium text-sm mb-1 line-clamp-2">{tutorial.title}</h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {tutorial.duration}
                  </div>
                </div>
              </div>
              <ChevronRight
                className={`w-4 h-4 ${
                  selectedTutorial?.id === tutorial.id ? 'text-blue-600' : 'text-gray-400'
                }`}
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>

  
  </div>
</div>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 sm:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Right Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-8">
            {selectedTutorial ? (
              <div>
                {/* Tutorial Header */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-2">
                    <span>
                      Tutorial {courseTutorials.findIndex((t) => t.id === selectedTutorial.id) + 1}
                    </span>
                    <span>•</span>
                    <span>{selectedTutorial.duration}</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {selectedTutorial.title}
                  </h1>
                  <p className="text-base sm:text-lg text-gray-600">{selectedTutorial.description}</p>
                </div>

                {/* Tutorial Content */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8">
                  <div
  className="prose prose-sm sm:prose-lg max-w-none break-words whitespace-pre-wrap overflow-x-auto"
  dangerouslySetInnerHTML={{ __html: selectedTutorial.content }}
/>

                  {/* Tutorial Navigation */}
                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 flex flex-row justify-between gap-4">
                  
                     <div>
                      {courseTutorials.findIndex((t) => t.id === selectedTutorial.id) > 0 &&(
                        <button
                          onClick={() => {
                            const currentIndex = courseTutorials.findIndex(
                              (t) => t.id === selectedTutorial.id
                            );
                            setSelectedTutorial(courseTutorials[currentIndex - 1]);
                          }}
                          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                        >
                          <ChevronLeft className="w-4 h-4 ml-2" />
                          Previous
                          
                        </button>
                      )}
                    </div>

                    <div>
                      {courseTutorials.findIndex((t) => t.id === selectedTutorial.id) <
                        courseTutorials.length - 1 && (
                        <button
                          onClick={() => {
                            const currentIndex = courseTutorials.findIndex(
                              (t) => t.id === selectedTutorial.id
                            );
                            setSelectedTutorial(courseTutorials[currentIndex + 1]);
                          }}
                          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                        >
                          Next 
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Select a Tutorial</h2>
                <p className="text-gray-600">Choose a tutorial from the sidebar to start learning.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
