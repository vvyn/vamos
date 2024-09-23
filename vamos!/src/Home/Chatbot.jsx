import React, { useState } from 'react';

export function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const userMessage = {
      text: input,
      sender: 'user',
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const botResponse = {
      text: `You said: ${input}`,
      sender: 'bot',
    };

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="bg-[#FAFCFC] w-full rounded-[34px] overflow-hidden shadow-lg flex flex-col max-h-[70vh]">
      {/* Chat Header */}
      <div className="bg-[#FAFCFC] opacity-90 p-3 flex items-center justify-between">
        <div className='px-4'>
            <div className="bg-gradient-to-br from-[#2C3E50] to-[#BDC3C7] w-8 h-8 rounded-full"></div>
        </div>
        <span className="text-black text-center flex-1 font-semibold text-5xl">Chat</span>
        <div className='px-4'>
            <div className="bg-gradient-to-br from-[#2C3E50] to-[#BDC3C7] w-8 h-8 rounded-full"></div>
        </div>
      </div>

      {/* Chat Messages & Box */}
      <div className="flex-1 overflow-y-auto p-4 bg-[#AEB2B5] max-h-[25vh]">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`
                ${message.sender === 'user' ? 'bg-[#737373]' : 'bg-[#314254]'}
                text-white p-3 rounded-lg max-w-xs
              `}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
    
       {/* Message Sending Box */}
      <div className="bg-[#AEB2B5] p-3 flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg bg-[#D9D9D9] text-[#636262] focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type your message..."
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSendMessage} 
        >
          Send
        </button>
      </div> 
    </div>
  );
}
