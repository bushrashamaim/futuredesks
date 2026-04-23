import React, { useState } from 'react';

const AIChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'ai', text: '👋 Hello! Ask me about pricing, timelines, services!' }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMsg }]);
    setInput('');
    
    setTimeout(() => {
      const q = userMsg.toLowerCase();
      let reply = '';
      if (q.includes('price') || q.includes('cost')) {
        reply = '💰 Website: ₹30k-1.5L, App: ₹50k-2L, SaaS Prebuilt: ₹50,000 only!';
      } else if (q.includes('time') || q.includes('day')) {
        reply = '⏰ Prebuilt: 7-14 days, Custom: 3-6 weeks, App: 4-8 weeks.';
      } else if (q.includes('service')) {
        reply = '🛠️ Website Dev, Mobile Apps, SaaS Products, Custom Software.';
      } else {
        reply = '🤝 Email partnerships@futuredesks.in for details!';
      }
      setMessages(prev => [...prev, { type: 'ai', text: reply }]);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      <div className="ai-chat-button" onClick={toggleChat}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      </div>
      
      <div className="ai-chat-window" style={{ display: isOpen ? 'flex' : 'none' }}>
        <div className="ai-chat-header">
          <span>🤖 Aindexc AI</span>
          <button onClick={toggleChat}>✕</button>
        </div>
        <div className="ai-chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={msg.type === 'ai' ? 'ai-message' : 'user-message'}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="ai-chat-input">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your question..." 
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  );
};

export default AIChatButton;