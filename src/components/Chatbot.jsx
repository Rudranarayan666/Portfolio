import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, ACHIEVEMENTS, EXPERIENCE, SKILLS_CATEGORIES } from '../content';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello World! I'm Rudra AI — Rudranarayan's personal assistant. Ask me anything about his projects, skills, achievements, or how to connect with him!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickChips = [
    { label: "What are his top projects?", query: "projects" },
    { label: "Tell me about his hackathon wins", query: "hackathons" },
    { label: "What is his tech stack?", query: "stack" },
    { label: "How can I connect with him?", query: "contact" }
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const getBotResponse = (query) => {
    const q = query.toLowerCase();

    // 1. Projects Query
    if (q.includes('project') || q.includes('build') || q.includes('work')) {
      const projs = PROJECTS.map(p => `• ${p.title} (${p.category}): ${p.tagline}`).join('\n');
      return `Here are some of Rudranarayan's featured projects:\n\n${projs}\n\nAll project codes are on his GitHub. Try clicking "View Projects" in the Hero section to learn more!`;
    }

    // 2. Hackathons / Achievements Query
    if (q.includes('hackathon') || q.includes('win') || q.includes('achievement') || q.includes('ctf')) {
      const wins = ACHIEVEMENTS.map(w => `• ${w.title} (${w.organization}) - ${w.description}`).join('\n\n');
      return `Rudranarayan has built a strong record in competitions:\n\n${wins}`;
    }

    // 3. Tech Stack / Skills Query
    if (q.includes('stack') || q.includes('skill') || q.includes('language') || q.includes('tool') || q.includes('framework')) {
      const skillsList = SKILLS_CATEGORIES.map(cat => `• *${cat.name}*: ${cat.skills.map(s => s.name).join(', ')}`).join('\n');
      return `Rudranarayan's technical toolkit includes:\n\n${skillsList}`;
    }

    // 4. Contact / Connect Query
    if (q.includes('contact') || q.includes('connect') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
      return `You can easily connect with Rudranarayan:\n\n📧 *Email*: ${PERSONAL_INFO.email}\n📞 *Phone*: ${PERSONAL_INFO.phone}\n🔗 *LinkedIn*: ${PERSONAL_INFO.linkedin}\n🐙 *GitHub*: ${PERSONAL_INFO.github}\n\nHe is currently open for SDE and AI/ML internships!`;
    }

    // 5. Bio / About / Education Query
    if (q.includes('about') || q.includes('who is') || q.includes('study') || q.includes('education') || q.includes('cgpa') || q.includes('college')) {
      return `Rudranarayan is a B.E. Information Technology student at A.P. Shah Institute of Technology, Thane (2023–2027 batch) with a *9.22 CGPA*.\n\nHe is also a USRF 2026 Research Fellow at Amity University conducting machine learning research, and has mentored 100+ students in Cybersecurity and development.`;
    }

    // 6. Experience / Internship Query
    if (q.includes('experience') || q.includes('intern') || q.includes('job') || q.includes('work history')) {
      const jobs = EXPERIENCE.map(j => `• *${j.role}* at ${j.company} (${j.period}) - ${j.badge}`).join('\n');
      return `Rudranarayan's industry and research experience includes:\n\n${jobs}\n\nFeel free to check out the "Journey" section for his complete interactive timeline!`;
    }

    // Default Fallback
    return `I'm Rudra's AI assistant, trained on his portfolio content. I can tell you about his projects, skills, achievements, or contact details. Feel free to ask or drop him an email directly at ${PERSONAL_INFO.email}!`;
  };

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMessage = {
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate natural typing delay
    setTimeout(() => {
      const botReply = getBotResponse(textToSend);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: botReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* 1. Floating Collapse Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-4 rounded-full btn-amber-gradient shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all group"
          aria-label="Open AI Assistant"
        >
          <MessageSquare className="w-6 h-6 text-[var(--bg-navy)]" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
          </span>
        </button>
      )}

      {/* 2. Expanded Chat Drawer Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-40 w-full max-w-sm sm:max-w-md h-[550px] rounded-3xl overflow-hidden border border-[var(--amber-light)]/30 bg-[rgba(9,12,22,0.92)] backdrop-blur-xl shadow-2xl flex flex-col justify-between animate-fadeIn text-[#f5f3ef]">
          
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="/photo.png"
                  alt="Rudra AI Avatar"
                  className="w-10 h-10 rounded-xl object-cover border border-[var(--amber-light)]/40 bg-white/5"
                  onError={(e) => {
                    // Fallback to bot icon if image fails
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `<div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"><bot class="w-5 h-5 text-[var(--amber-light)]" /></div>`;
                  }}
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#090c16]" />
              </div>
              <div>
                <div className="font-heading font-bold text-sm text-white flex items-center">
                  Rudra AI
                  <Sparkles className="w-3.5 h-3.5 text-[var(--amber-light)] ml-1" />
                </div>
                <div className="font-mono text-[10px] text-[#9aa3b2]">Rudra's Assistant &middot; Online</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-[var(--amber-light)] transition-colors text-[#9aa3b2]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages List Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
            {messages.map((msg, idx) => {
              const isBot = msg.sender === 'bot';
              return (
                <div key={idx} className={`flex items-start space-x-2.5 ${!isBot ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-2 rounded-xl border shrink-0 ${
                    isBot 
                      ? 'bg-white/5 border-white/10 text-[var(--amber-light)]' 
                      : 'bg-[var(--amber-light)]/10 border-[var(--amber-light)]/20 text-[var(--accent-blue)]'
                  }`}>
                    {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>
                  <div className={`max-w-[75%] rounded-2xl p-3 text-sm leading-relaxed whitespace-pre-line ${
                    isBot 
                      ? 'bg-white/5 border border-white/10 text-[#f5f3ef]' 
                      : 'btn-amber-gradient text-[var(--bg-navy)]'
                  }`}>
                    {msg.text}
                    <div className={`text-[9px] mt-1 text-right ${isBot ? 'text-[#9aa3b2]' : 'text-[var(--bg-navy)]/65 font-medium'}`}>
                      {msg.time}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start space-x-2.5">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[var(--amber-light)] shrink-0">
                  <Bot className="w-4 h-4 animate-bounce" />
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3 text-sm flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--amber-light)] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--amber-light)] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--amber-light)] animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Chips Bar */}
          <div className="px-4 py-2 flex flex-wrap gap-1.5 border-t border-white/5 bg-white/[0.01]">
            {quickChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip.label)}
                className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-[var(--amber-light)]/15 border border-white/10 hover:border-[var(--amber-light)]/40 text-[11px] font-mono text-[#9aa3b2] hover:text-[var(--amber-light)] transition-all cursor-pointer"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Footer Input Box */}
          <div className="p-4 border-t border-white/10 flex items-center space-x-2 bg-white/[0.02]">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage(inputValue);
              }}
              placeholder="Ask about projects, stack, CTF wins..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 focus:border-[var(--amber-light)] focus:ring-1 focus:ring-[var(--amber-light)] text-sm text-[#f5f3ef] placeholder-[#9aa3b2]/60 focus:outline-none transition-all"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              className="p-2.5 rounded-xl btn-amber-gradient shadow-lg flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-all"
            >
              <Send className="w-4 h-4 text-[var(--bg-navy)]" />
            </button>
          </div>

        </div>
      )}
    </>
  );
}
