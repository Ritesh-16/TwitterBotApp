import React from 'react';

const LoadingBubble = () => (
  <div className="flex justify-start">
    <div className="bg-white text-gray-800 rounded-lg rounded-bl-none p-3 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  </div>
);

export default LoadingBubble;