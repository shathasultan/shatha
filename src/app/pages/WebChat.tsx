import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { Phone, MapPin, Clock, CheckCircle2, Send, Heart, Video, MoreVertical, Bell, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

export default function WebChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "companion",
      text: "السلام عليكم! أنا أحمد، رفيقك اليوم. أنا في الطريق لاستلامك.",
      textEn: "Hello! I'm Ahmed, your companion for today. I'm on my way to pick you up.",
      time: "10:15 AM",
      status: "delivered"
    },
    {
      id: 2,
      sender: "user",
      text: "شكراً أحمد. من فضلك اتصل بي عندما تصل.",
      textEn: "Thank you Ahmed. Please call me when you arrive.",
      time: "10:17 AM",
      status: "delivered"
    },
    {
      id: 3,
      sender: "companion",
      text: "بالتأكيد! سأكون هناك في حوالي 10 دقائق. حركة المرور خفيفة اليوم.",
      textEn: "Of course! I'll be there in about 10 minutes. The traffic is light today.",
      time: "10:18 AM",
      status: "delivered"
    },
    {
      id: 4,
      sender: "companion",
      text: "وصلت إلى المبنى الخاص بك. أنا عند المدخل الرئيسي.",
      textEn: "I've arrived at your building. I'm at the main entrance.",
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
        textEn: message,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        status: "delivered"
      };
      setMessages([...messages, newMessage]);
      setMessage("");

      setTimeout(() => {
        const autoReply = {
          id: messages.length + 2,
          sender: "companion",
          text: "تم استلام رسالتك. سأتأكد من اتباع هذه التعليمات.",
          textEn: "I've received your message. I'll make sure to follow those instructions.",
          time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          status: "delivered"
        };
        setMessages(prev => [...prev, autoReply]);
      }, 2000);
    }
  };

  const handleQuickAction = (actionAr: string, actionEn: string) => {
    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      text: actionAr,
      textEn: actionEn,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      status: "delivered"
    };
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      const autoReply = {
        id: messages.length + 2,
        sender: "companion",
        text: "مفهوم! شكراً لإعلامي.",
        textEn: "Understood! Thank you for letting me know.",
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        status: "delivered"
      };
      setMessages(prev => [...prev, autoReply]);
    }, 1500);
  };

  const companion = {
    name: "Ahmed Al-Mansour",
    nameAr: "أحمد المنصور",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    status: "Active Now",
    statusAr: "نشط الآن",
    phone: "+966 50 123 4567",
    rating: 4.9,
    trips: 347,
    car: "Toyota Camry 2021",
    plate: "ABC 1234"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F4F8] to-white">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Heart className="w-10 h-10 text-primary" />
            <div>
              <h1 className="text-3xl tracking-tight text-foreground">Rafiq</h1>
              <p className="text-sm text-muted-foreground">رفيق - محادثة مباشرة</p>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              <Shield className="w-5 h-5 mr-2" />
              محادثة آمنة ومشفرة
            </Badge>
            <Button variant="outline" asChild className="rounded-full text-lg px-6">
              <Link to="/dashboard/user">لوحة التحكم</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Companion Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-3 border-[#1E3A5F] shadow-xl sticky top-24">
              <CardHeader className="bg-gradient-to-br from-[#1E3A5F] to-[#2C5282] text-white pb-8">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <Avatar className="w-32 h-32 border-4 border-white shadow-2xl mx-auto">
                      <AvatarImage src={companion.photo} alt={companion.name} />
                      <AvatarFallback className="text-3xl">AM</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full"></div>
                  </div>
                  <h2 className="text-3xl mb-2">{companion.nameAr}</h2>
                  <p className="text-xl text-white/90">{companion.name}</p>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-lg">{companion.statusAr}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-lg">
                    <span className="text-muted-foreground">التقييم</span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">⭐</span>
                      <span className="text-xl">{companion.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-lg">
                    <span className="text-muted-foreground">عدد الرحلات</span>
                    <span className="text-xl">{companion.trips}</span>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <p className="text-base text-muted-foreground">معلومات السيارة</p>
                    <p className="text-lg">{companion.car}</p>
                    <p className="text-xl font-mono">{companion.plate}</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full h-16 text-xl rounded-2xl bg-green-600 hover:bg-green-700"
                    asChild
                  >
                    <a href={`tel:${companion.phone}`}>
                      <Phone className="w-6 h-6 mr-3" />
                      اتصال هاتفي
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full h-16 text-xl rounded-2xl border-3"
                  >
                    <Video className="w-6 h-6 mr-3" />
                    مكالمة فيديو
                  </Button>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-base mb-1">رفيق موثوق ومعتمد</p>
                      <p className="text-sm text-muted-foreground">تم التحقق من الهوية والشهادات</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="border-3 border-gray-300 shadow-xl h-[calc(100vh-12rem)] flex flex-col">
              {/* Chat Header */}
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b-3 border-gray-200 py-5">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">المحادثة المباشرة</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Bell className="w-6 h-6" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <MoreVertical className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Quick Actions */}
              <div className="bg-gradient-to-b from-blue-50 to-white px-6 py-5 border-b-2 border-gray-200">
                <p className="text-lg text-gray-700 mb-4">إجراءات سريعة</p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleQuickAction("أنا عند الباب", "I am at the door")}
                    className="flex items-center justify-center gap-3 bg-white border-3 border-[#1E3A5F] text-[#1E3A5F] px-6 py-5 rounded-2xl hover:bg-[#1E3A5F] hover:text-white transition-all duration-200 shadow-md text-xl"
                  >
                    <MapPin className="w-6 h-6" />
                    <span>أنا عند الباب</span>
                  </button>
                  <button
                    onClick={() => handleQuickAction("وصلت إلى الموقع", "Location arrived")}
                    className="flex items-center justify-center gap-3 bg-white border-3 border-[#1E3A5F] text-[#1E3A5F] px-6 py-5 rounded-2xl hover:bg-[#1E3A5F] hover:text-white transition-all duration-200 shadow-md text-xl"
                  >
                    <CheckCircle2 className="w-6 h-6" />
                    <span>وصلت</span>
                  </button>
                  <button
                    onClick={() => handleQuickAction("انتظر 5 دقائق من فضلك", "Please wait 5 minutes")}
                    className="flex items-center justify-center gap-3 bg-white border-3 border-[#1E3A5F] text-[#1E3A5F] px-6 py-5 rounded-2xl hover:bg-[#1E3A5F] hover:text-white transition-all duration-200 shadow-md text-xl"
                  >
                    <Clock className="w-6 h-6" />
                    <span>انتظر 5 دقائق</span>
                  </button>
                  <button
                    onClick={() => handleQuickAction("شكراً لمساعدتك", "Thank you for your help")}
                    className="flex items-center justify-center gap-3 bg-white border-3 border-[#1E3A5F] text-[#1E3A5F] px-6 py-5 rounded-2xl hover:bg-[#1E3A5F] hover:text-white transition-all duration-200 shadow-md text-xl"
                  >
                    <span className="text-2xl">👍</span>
                    <span>شكراً لك</span>
                  </button>
                </div>
              </div>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto py-8 px-6 bg-white">
                <div className="space-y-8">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[75%] ${msg.sender === "user" ? "order-2" : "order-1"}`}>
                        <div
                          className={`rounded-3xl px-8 py-6 shadow-lg border-2 ${
                            msg.sender === "user"
                              ? "bg-[#1E3A5F] text-white border-[#1E3A5F]"
                              : "bg-gray-50 text-gray-900 border-gray-300"
                          }`}
                        >
                          <p className="text-2xl leading-relaxed mb-2">{msg.text}</p>
                          {msg.textEn !== msg.text && (
                            <p className="text-lg opacity-80 leading-relaxed">{msg.textEn}</p>
                          )}
                        </div>
                        <div className={`flex items-center gap-3 mt-3 px-4 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                          <p className="text-lg text-gray-500">{msg.time}</p>
                          {msg.sender === "user" && (
                            <div className="flex gap-1">
                              <CheckCircle2 className="w-5 h-5 text-blue-500" />
                              <CheckCircle2 className="w-5 h-5 text-blue-500" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
              </CardContent>

              {/* Input Area */}
              <div className="bg-gradient-to-t from-gray-50 to-white border-t-3 border-gray-200 px-6 py-6">
                <div className="flex gap-4 items-center">
                  <Input
                    placeholder="اكتب رسالتك هنا..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1 h-20 text-2xl rounded-3xl border-3 border-gray-300 px-8 focus:border-[#1E3A5F] focus:ring-4 focus:ring-[#1E3A5F]/20"
                    dir="auto"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="lg"
                    className="h-20 w-20 rounded-full bg-[#1E3A5F] hover:bg-[#2C5282] shadow-lg"
                  >
                    <Send className="w-8 h-8" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
