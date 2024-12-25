import React from 'react';
import { User, Bot } from 'lucide-react';

const Message = ({ message }) => {
  const { sender, text, timestamp } = message;
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[75%] rounded-lg p-4 ${isUser ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-100 text-gray-800 rounded-bl-none'} shadow-lg transition-all`}
      >
        <div className="flex items-center gap-2 mb-2">
          {isUser ? (
            <User className="w-4 h-4 text-white" />
          ) : (
            <Bot className="w-4 h-4 text-gray-600" />
          )}
          <span className="text-xs opacity-70">{timestamp}</span>
        </div>
        <p className="break-words">{text}</p>
      </div>
    </div>
  );
};

export default Message;
