import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';
import Button from '../ui/Button';

interface Message {
  content: string;
  sender: 'user' | 'caviar';
  timestamp: Date;
}

const CaviarChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hello! I'm Caviar, your AI restaurant analyst. How can I help you today?",
      sender: 'caviar',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  
  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = getCaviarResponse(input);
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  // Simple rule-based responses
  const getCaviarResponse = (query: string): Message => {
    const lowerQuery = query.toLowerCase();
    let response = '';
    
    if (lowerQuery.includes('most common complaint') || lowerQuery.includes('top complaint')) {
      response = "Based on my analysis, the most common complaint this month is about wait times during dinner rush (7-9pm). Customers are mentioning an average wait of 25-30 minutes. Would you like some suggestions to address this?";
    } else if (lowerQuery.includes('competitor') || lowerQuery.includes('competition')) {
      response = "Flavor Fusion is gaining traction with a 12% increase in positive reviews over the last 30 days. Their new seasonal menu appears to be resonating well with customers. Would you like me to analyze their most popular dishes?";
    } else if (lowerQuery.includes('improve') || lowerQuery.includes('better')) {
      response = "Based on review analysis, three areas that could improve customer satisfaction are: 1) Faster service during peak hours, 2) More vegetarian options, and 3) Better lighting in the evening. Addressing these could lift your overall rating by approximately 0.4 stars.";
    } else if (lowerQuery.includes('positive') || lowerQuery.includes('praise') || lowerQuery.includes('good')) {
      response = "Your most praised aspects are your signature Butter Chicken dish (94% positive), friendly staff (88% positive), and the new weekend dessert special (92% positive). Your service quality has shown a 7% improvement over the past two months!";
    } else if (lowerQuery.includes('thank') || lowerQuery.includes('thanks')) {
      response = "You're welcome! I'm here to help you get the most out of your customer feedback. Is there anything else you'd like to know?";
    } else {
      response = "I understand you're asking about that. Would you like me to analyze recent customer feedback related to this topic, or would you prefer general trends from the past month?";
    }
    
    return {
      content: response,
      sender: 'caviar',
      timestamp: new Date(),
    };
  };
  
  return (
    <div className="w-full h-[600px] bg-white rounded-xl shadow-medium flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-surface-200 flex items-center space-x-3">
        <div className="p-2 rounded-full bg-primary-100 text-primary-600">
          <Bot size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-surface-800">Caviar AI Assistant</h3>
          <p className="text-xs text-surface-500">Ask me anything about your restaurant data</p>
        </div>
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-primary-500 text-white rounded-tr-none'
                  : 'bg-surface-100 text-surface-800 rounded-tl-none'
              }`}
            >
              <p>{message.content}</p>
              <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-primary-100' : 'text-surface-500'}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Input Area */}
      <div className="p-4 border-t border-surface-200">
        <div className="flex space-x-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask Caviar for insights..."
            className="flex-1 p-3 border border-surface-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
            rows={2}
          />
          <Button
            onClick={handleSendMessage}
            disabled={input.trim() === ''}
            icon={<Send size={18} />}
            className="self-end"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaviarChatbot;