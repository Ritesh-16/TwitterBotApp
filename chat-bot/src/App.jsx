import React, { useState } from 'react';
import { Send, User, Bot } from 'lucide-react';
import MessageList from './components/MessageList';
import ChatInput from './components/ChatInput';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message) => {
    const userMessage = {
      text: message,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('https://twitterbotapp.onrender.com/api/generate-tweet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message })
      });

      const data = await response.json();
      
      const botMessage = {
        text: data.tweet,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      // Handle error appropriately
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto bg-gradient-to-b from-blue-50 via-white to-blue-100 rounded-xl overflow-hidden shadow-xl">
      <div className="flex-1 overflow-hidden">
        <MessageList messages={messages} isLoading={isLoading} />
      </div>
      <div className="p-4 bg-white shadow-md rounded-t-lg">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default App;
