"use client";
import React, { useState, useEffect, useRef } from "react";
import MIcon from "./MIcon";
import FadeUp from "./FadeUp";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SEED_MESSAGES: Message[] = [
  { role: "assistant", content: "Welcome to the Vibe Design course! I'll guide you through building stunning websites with AI. What would you like to learn first?" },
  { role: "user", content: "I want to learn how to build a hero section with a cinematic video background using AI." },
  { role: "assistant", content: "Great choice! In this course, you'll learn how to create full-screen looping videos, liquid glass nav bars, email signups, and manifesto buttons — all with AI assistance. Let's dive in!" },
];

interface ChatPanelProps {
  initialScroll?: "top" | "bottom";
  animateMessagesIn?: boolean;
}

export default function ChatPanel({ initialScroll = "top", animateMessagesIn = false }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>(SEED_MESSAGES);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      if (initialScroll === "bottom") {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      } else {
        scrollRef.current.scrollTop = 0;
      }
    }
  }, [initialScroll]);

  useEffect(() => {
    if (messages.length > SEED_MESSAGES.length && scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: "I can definitely help with that! Let's explore the UI Rocket modules to see how we can implement this feature step by step." }]);
    }, 600);
  };

  return (
    <div className="flex flex-col h-full rounded-2xl border border-white/10 overflow-hidden" style={{ background: "rgba(8,8,10,0.6)", backdropFilter: "blur(24px)" }}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/5 flex items-center justify-center">
          <MIcon name="auto_awesome" size={14} className="text-white/80" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-white leading-tight">Vibe Design course</span>
          <span className="text-[11px] text-white/40 leading-tight">Learn how to build website with AI</span>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto scrollbar-hide px-4 py-5 space-y-4">
        {messages.map((msg, i) => {
          const isUser = msg.role === "user";
          const msgBubble = (
            <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
              <div className={cn("max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed", 
                isUser ? "bg-white/15 text-white/90 rounded-br-sm" : "bg-white/5 text-white/70 border border-white/5 rounded-bl-sm"
              )}>
                {msg.content}
              </div>
            </div>
          );

          if (animateMessagesIn) {
            return (
              <FadeUp key={i} delay={i * 0.12} y={16}>
                {msgBubble}
              </FadeUp>
            );
          }
          return <React.Fragment key={i}>{msgBubble}</React.Fragment>;
        })}
      </div>

      {/* Input */}
      <div className="p-3">
        <div className="liquid-glass rounded-2xl flex items-end p-1.5 pl-4 gap-2">
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask about the course..."
            className="flex-1 max-h-32 bg-transparent text-sm text-white placeholder:text-white/40 resize-none outline-none py-2.5"
            rows={1}
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim()}
            className="flex-shrink-0 w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            <MIcon name="arrow_upward" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
