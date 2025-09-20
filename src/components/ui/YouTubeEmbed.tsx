'use client';

import { useState } from 'react';
import { Play, Youtube } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId?: string;
  playlistId?: string;
  title: string;
  className?: string;
}

const YouTubeEmbed = ({ videoId, playlistId, title, className = '' }: YouTubeEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePlay = () => {
    setIsLoaded(true);
  };

  const getEmbedUrl = () => {
    const baseUrl = 'https://www.youtube.com/embed/';
    if (videoId) {
      return `${baseUrl}${videoId}?autoplay=1&rel=0`;
    }
    if (playlistId) {
      return `${baseUrl}videoseries?list=${playlistId}&autoplay=1&rel=0`;
    }
    return '';
  };

  const getThumbnailUrl = () => {
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    // For playlists, we'll use a default image
    return '/images/youtube-playlist-thumb.jpg';
  };

  const getYouTubeUrl = () => {
    if (videoId) {
      return `https://www.youtube.com/watch?v=${videoId}`;
    }
    if (playlistId) {
      return `https://www.youtube.com/playlist?list=${playlistId}`;
    }
    return '';
  };

  if (!videoId && !playlistId) {
    return null;
  }

  return (
    <div className={`youtube-container ${className}`}>
      {!isLoaded ? (
        <div className="relative w-full h-full bg-black rounded-lg overflow-hidden group cursor-pointer" onClick={handlePlay}>
          {/* Thumbnail */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: videoId ? `url(${getThumbnailUrl()})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 hover:bg-red-700 text-white p-6 rounded-full transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
              <Play className="w-12 h-12" />
            </div>
          </div>
          
          {/* YouTube Logo */}
          <div className="absolute top-4 right-4">
            <Youtube className="w-8 h-8 text-white opacity-80" />
          </div>
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-white font-semibold text-lg line-clamp-2">{title}</h3>
          </div>
        </div>
      ) : (
        <iframe
          src={getEmbedUrl()}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        />
      )}
      
      {/* View on YouTube Link */}
      <div className="mt-4 text-center">
        <a
          href={getYouTubeUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200"
        >
          <Youtube className="w-4 h-4 mr-2" />
          View on YouTube
        </a>
      </div>
    </div>
  );
};

export default YouTubeEmbed;