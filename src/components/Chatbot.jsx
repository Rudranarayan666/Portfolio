import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, ACHIEVEMENTS, SKILLS_CATEGORIES } from '../content';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi! I'm Rudra's AI assistant. Ask me about his projects, skills, hackathon wins, or how to connect with him.",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickChips = [
    { label: "Top Projects", query: "projects" },
    { label: "Hackathon Wins", query: "hackathons" },
    { label: "Tech Stack", query: "stack" },
    { label: "Contact Info", query: "contact" }
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const getBotResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes('project') || q.includes('build') || q.includes('work')) {
      const projs = PROJECTS.map(p => `• ${p.title}: ${p.description}`).join('\n\n');
      return `Here are Rudranarayan's key projects:\n\n${projs}\n\nCheck out the Featured Projects section for live code links!`;
    }

    if (q.includes('hackathon') || q.includes('win') || q.includes('achievement') || q.includes('ctf')) {
      const wins = ACHIEVEMENTS.map(w => `• ${w.title} (${w.organization})`).join('\n');
      return `Rudranarayan's key achievements:\n\n${wins}\n\nHe has 3× national wins and 4× finalist placements.`;
    }

    if (q.includes('stack') || q.includes('skill') || q.includes('language') || q.includes('tool')) {
      const skills = SKILLS_CATEGORIES.map(c => `• ${c.name}: ${c.skills.map(s => s.name).slice(0, 4).join(', ')}`).join('\n');
      return `Key technical skills:\n\n${skills}`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach')) {
      return `You can reach Rudranarayan directly at:\n\n📧 Email: ${PERSONAL_INFO.email}\n🔗 LinkedIn: ${PERSONAL_INFO.linkedin}\n🐙 GitHub: ${PERSONAL_INFO.github}\n\nHe is actively seeking SDE and AI/ML internship opportunities!`;
    }

    if (q.includes('about') || q.includes('who') || q.includes('study') || q.includes('college')) {
      return `Rudranarayan is a B.E. Information Technology student at APSIT, Thane (CGPA 9.22). He is also a USRF Research Fellow at Amity University and has mentored 100+ students.`;
    }

    return `I can help you with questions about Rudra's projects, technical stack, research fellowship, or contact information. Feel free to click one of the quick buttons below!`;
  };

  const handleSend = (textToSend = inputValue) => {
    const cleanText = textToSend.trim();
    if (!cleanText) return;

    const userMessage = {
      sender: 'user',
      text: cleanText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBotResponse(cleanText);
      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="neo-btn bg-[#fde047] text-black px-4 py-3 text-sm font-mono shadow-[4px_4px_0px_0px_#000]"
          aria-label="Open AI Assistant"
        >
          <Bot className="w-5 h-5 text-black" />
          <span>Ask Rudra AI</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[480px] rounded-2xl bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_#000] flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="p-3.5 bg-[#fde047] border-b-2 border-black flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-lg bg-white border-2 border-black shadow-[1px_1px_0px_0px_#000]">
                <Bot className="w-4 h-4 text-black" />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-sm text-black">Rudra AI</h4>
                <p className="font-mono text-[10px] font-bold text-zinc-700">Online • Assistant</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg bg-white border-2 border-black hover:bg-[#fca5a5] transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4 text-black" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#fbf9f4]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-xl border-2 border-black text-xs leading-relaxed font-medium whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-[#fde047] text-black shadow-[2px_2px_0px_0px_#000]'
                      : 'bg-white text-zinc-900 shadow-[2px_2px_0px_0px_#000]'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="font-mono text-[10px] text-zinc-400 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-1.5 bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_0px_#000] w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Chips */}
          <div className="p-2 bg-white border-t-2 border-black flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip.query)}
                className="px-2.5 py-1 rounded-md border border-black bg-zinc-50 hover:bg-[#86efac] font-mono text-[10px] font-bold text-black whitespace-nowrap shadow-[1px_1px_0px_0px_#000] transition-colors"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t-2 border-black flex gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 px-3 py-1.5 rounded-lg border-2 border-black text-xs font-mono focus:outline-none focus:bg-[#fef9c3]"
            />
            <button
              type="submit"
              className="neo-btn bg-[#fde047] text-black px-3 py-1.5 text-xs font-mono"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
