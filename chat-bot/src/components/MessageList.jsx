import React from 'react';
import Message from './Message';
import LoadingBubble from './LoadingBubble';

const MessageList = ({ messages, isLoading }) => {
  const messagesEndRef = React.useRef(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      {isLoading && <LoadingBubble />}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
