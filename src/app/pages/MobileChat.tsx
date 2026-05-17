import { useState, useEffect, useRef } from "react";
import { Phone, MapPin, Clock, CheckCircle2, Send, ChevronLeft, MoreVertical } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";

export default function MobileChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "companion",
      text: "Hello! I'm Ahmed, your companion for today. I'm on my way to pick you up.",
      time: "10:15 AM",
      status: "delivered"
    },
    {
      id: 2,
      sender: "user",
      text: "Thank you Ahmed. Please call me when you arrive.",
      time: "10:17 AM",
      status: "delivered"
    },
    {
      id: 3,
      sender: "companion",
      text: "Of course! I'll be there in about 10 minutes. The traffic is light today.",
      time: "10:18 AM",
      status: "delivered"
    },
    {
      id: 4,
      sender: "companion",
      text: "I've arrived at your building. I'm at the main entrance.",
      time: "10:28 AM",
      status: "delivered"
    }
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "user",
        text: message,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        status: "delivered"
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleQuickAction = (action: string) => {
    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      text: action,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      status: "delivered"
    };
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      const autoReply = {
        id: messages.length + 2,
        sender: "companion",
        text: "Understood! Thank you for letting me know.",
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        status: "delivered"
      };
      setMessages(prev => [...prev, autoReply]);
    }, 1500);
  };

  const companion = {
    name: "Ahmed Al-Mansour",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    status: "Active Now",
    phone: "+966 50 123 4567"
  };

  return (
    <div className="h-screen flex flex-col bg-white max-w-md mx-auto">
      {/* Header - Deep Blue */}
      <div className="bg-[#1E3A5F] text-white px-5 py-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ChevronLeft className="w-7 h-7" />
          </button>
          <h1 className="text-xl flex-1">Rafiq Chat</h1>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <MoreVertical className="w-7 h-7" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
              <AvatarImage src={companion.photo} alt={companion.name} />
              <AvatarFallback className="text-2xl">AM</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-[#1E3A5F] rounded-full"></div>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl mb-1">{companion.name}</h2>
            <div className="flex items-center gap-2 text-base text-white/90">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>{companion.status}</span>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white h-16 px-6 rounded-2xl shadow-lg text-lg"
            asChild
          >
            <a href={`tel:${companion.phone}`}>
              <Phone className="w-6 h-6 mr-2" />
              Call
            </a>
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-b from-[#F8F9FA] to-white px-5 py-4 border-b-2 border-gray-200">
        <p className="text-base text-gray-600 mb-3">Quick Actions</p>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleQuickAction("I am at the door")}
            className="flex items-center justify-center gap-2 bg-white border-3 border-[#1E3A5F] text-[#1E3A5F] px-5 py-4 rounded-2xl hover:bg-[#1E3A5F] hover:text-white transition-all duration-200 shadow-md text-lg"
          >
            <MapPin className="w-5 h-5" />
            <span>At the door</span>
          </button>
          <button
            onClick={() => handleQuickAction("Location arrived")}
            className="flex items-center justify-center gap-2 bg-white border-3 border-[#1E3A5F] text-[#1E3A5F] px-5 py-4 rounded-2xl hover:bg-[#1E3A5F] hover:text-white transition-all duration-200 shadow-md text-lg"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Arrived</span>
          </button>
          <button
            onClick={() => handleQuickAction("Please wait 5 minutes")}
            className="flex items-center justify-center gap-2 bg-white border-3 border-[#1E3A5F] text-[#1E3A5F] px-5 py-4 rounded-2xl hover:bg-[#1E3A5F] hover:text-white transition-all duration-200 shadow-md text-lg"
          >
            <Clock className="w-5 h-5" />
            <span>Wait 5 min</span>
          </button>
          <button
            onClick={() => handleQuickAction("Thank you for your help")}
            className="flex items-center justify-center gap-2 bg-white border-3 border-[#1E3A5F] text-[#1E3A5F] px-5 py-4 rounded-2xl hover:bg-[#1E3A5F] hover:text-white transition-all duration-200 shadow-md text-lg"
          >
            <span className="text-xl">👍</span>
            <span>Thank you</span>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-6 bg-white">
        <div className="space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[85%] ${msg.sender === "user" ? "order-2" : "order-1"}`}>
                <div
                  className={`rounded-3xl px-6 py-4 shadow-md ${
                    msg.sender === "user"
                      ? "bg-[#1E3A5F] text-white"
                      : "bg-[#F0F4F8] text-gray-900 border-2 border-gray-200"
                  }`}
                >
                  <p className="text-xl leading-relaxed">{msg.text}</p>
                </div>
                <div className={`flex items-center gap-2 mt-2 px-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <p className="text-base text-gray-500">{msg.time}</p>
                  {msg.sender === "user" && (
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t-3 border-gray-200 px-5 py-5 shadow-2xl">
        <div className="flex gap-3 items-center">
          <Input
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1 h-16 text-xl rounded-3xl border-3 border-gray-300 px-6 focus:border-[#1E3A5F] focus:ring-4 focus:ring-[#1E3A5F]/20"
          />
          <Button
            onClick={handleSendMessage}
            size="lg"
            className="h-16 w-16 rounded-full bg-[#1E3A5F] hover:bg-[#2C5282] shadow-lg"
          >
            <Send className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Safety Banner */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 px-5 py-4 border-t-2 border-green-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-base text-gray-900">Secure & Verified Chat</p>
            <p className="text-sm text-gray-600">All conversations are encrypted</p>
          </div>
        </div>
      </div>
    </div>
  );
}
