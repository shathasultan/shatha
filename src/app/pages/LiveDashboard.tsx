import { Link, useParams } from "react-router";
import { Heart, MapPin, Phone, MessageCircle, User, Car, Navigation, Clock, CheckCircle2, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { useState, useEffect, useRef } from "react";

export default function LiveDashboard() {
  const { sessionId } = useParams();
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "companion", text: "Hello! I'm on my way to the pickup location.", time: "10:30 AM" },
    { id: 2, sender: "user", text: "Great, thank you! How long until you arrive?", time: "10:32 AM" },
    { id: 3, sender: "companion", text: "I'll be there in about 5 minutes. Traffic is light.", time: "10:33 AM" },
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [companionLocation, setCompanionLocation] = useState({ lat: 24.7136, lng: 46.6753 });
  const [estimatedArrival, setEstimatedArrival] = useState("5 min");
  const [tripStatus, setTripStatus] = useState("En Route to Pickup");

  useEffect(() => {
    const interval = setInterval(() => {
      setCompanionLocation(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.001,
        lng: prev.lng + (Math.random() - 0.5) * 0.001
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "user",
        text: message,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage("");

      setTimeout(() => {
        const autoReply = {
          id: messages.length + 2,
          sender: "companion",
          text: "I've received your message. I'll make sure to follow those instructions.",
          time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, autoReply]);
      }, 2000);
    }
  };

  const companion = {
    name: "Ahmed Al-Mansour",
    age: 42,
    rating: 4.9,
    trips: 347,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    car: "Toyota Camry 2021",
    plate: "ABC 1234",
    phone: "+966 50 123 4567"
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Heart className="w-10 h-10 text-primary" />
            <div>
              <h1 className="text-3xl tracking-tight text-foreground">Rafiq</h1>
              <p className="text-sm text-muted-foreground">Session #{sessionId}</p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="px-4 py-2 text-base">
              <Clock className="w-4 h-4 mr-2" />
              {estimatedArrival}
            </Badge>
            <Button variant="outline" asChild className="rounded-full">
              <Link to="/dashboard/user">Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex">
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-muted/30">
            <div className="w-full h-full relative overflow-hidden rounded-none">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1600&h=1200&fit=crop)',
                  filter: 'brightness(0.9)'
                }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                      <Car className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <div className="bg-card px-4 py-2 rounded-full shadow-lg border-2">
                        <p className="text-sm">Companion Location</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/4 left-1/3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <div className="bg-card px-3 py-1 rounded-full shadow-lg text-xs">
                      Pickup
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1/4 right-1/3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-xl">
                    <Navigation className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <div className="bg-card px-3 py-1 rounded-full shadow-lg text-xs">
                      Destination
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-6 left-6 right-6 z-10">
            <Card className="border-2 shadow-2xl max-w-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-20 h-20 border-4 border-primary">
                    <AvatarImage src={companion.photo} alt={companion.name} />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-1">{companion.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{companion.age} years</span>
                      <span>•</span>
                      <span>⭐ {companion.rating} ({companion.trips} trips)</span>
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Vehicle</p>
                      <p className="text-base">{companion.car}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Plate Number</p>
                      <p className="text-base font-mono">{companion.plate}</p>
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 rounded-full" asChild>
                    <a href={`tel:${companion.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </a>
                  </Button>
                  <Button
                    className="flex-1 rounded-full bg-primary hover:bg-primary/90"
                    onClick={() => setChatOpen(!chatOpen)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-10">
            <Card className="border-2 shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-base text-muted-foreground">Current Status</p>
                      <p className="text-2xl">{tripStatus}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-base text-muted-foreground">ETA</p>
                    <p className="text-3xl text-primary">{estimatedArrival}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {chatOpen && (
          <div className="w-full md:w-96 bg-card border-l border-border flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl">Live Chat</h3>
                <Button variant="ghost" size="sm" onClick={() => setChatOpen(false)}>
                  ✕
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">Chat with {companion.name}</p>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] ${msg.sender === "user" ? "order-2" : "order-1"}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        msg.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-base">{msg.text}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 px-2">{msg.time}</p>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <div className="p-6 border-t border-border">
              <div className="flex gap-3">
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="h-12 text-base rounded-full border-2"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
