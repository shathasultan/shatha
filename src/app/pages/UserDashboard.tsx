import { Link } from "react-router";
import { Heart, Plus, Clock, CheckCircle2, Calendar, MapPin, Download, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";

export default function UserDashboard() {
  const activeServices = [
    {
      id: "RFQ1735123456",
      companion: {
        name: "Ahmed Al-Mansour",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        rating: 4.9
      },
      status: "In Progress",
      startTime: "10:30 AM",
      endTime: "12:30 PM",
      location: "King Fahd Medical City"
    }
  ];

  const serviceHistory = [
    {
      id: "RFQ1735098765",
      companion: {
        name: "Fatima Hassan",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        rating: 5.0
      },
      date: "2026-04-20",
      duration: "3 hours",
      amount: 517.50,
      status: "Completed",
      service: "Medical Appointment Companion"
    },
    {
      id: "RFQ1735012345",
      companion: {
        name: "Mohammed Ibrahim",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        rating: 4.8
      },
      date: "2026-04-15",
      duration: "2 hours",
      amount: 345.00,
      status: "Completed",
      service: "Shopping Assistance"
    },
    {
      id: "RFQ1734987654",
      companion: {
        name: "Sarah Al-Qahtani",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        rating: 4.9
      },
      date: "2026-04-10",
      duration: "4 hours",
      amount: 690.00,
      status: "Completed",
      service: "Social Visit Companion"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/30">
      <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Heart className="w-10 h-10 text-primary" />
            <div>
              <h1 className="text-3xl tracking-tight text-foreground">Rafiq</h1>
              <p className="text-sm text-muted-foreground">Your Trusted Companion</p>
            </div>
          </Link>
          <Button size="lg" asChild className="rounded-full px-8 bg-primary hover:bg-primary/90">
            <Link to="/booking">
              <Plus className="w-5 h-5 mr-2" />
              New Booking
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-12 max-w-7xl">
        <div className="mb-8">
          <h2 className="text-4xl mb-2">My Dashboard</h2>
          <p className="text-xl text-muted-foreground">Manage your companion services and bookings</p>
        </div>

        <Tabs defaultValue="active" className="space-y-8">
          <TabsList className="grid w-full max-w-md grid-cols-2 h-14">
            <TabsTrigger value="active" className="text-base">Active Services</TabsTrigger>
            <TabsTrigger value="history" className="text-base">Service History</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            {activeServices.length > 0 ? (
              activeServices.map((service) => (
                <Card key={service.id} className="border-2 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-16 h-16 border-2 border-primary">
                          <AvatarImage src={service.companion.photo} alt={service.companion.name} />
                          <AvatarFallback>{service.companion.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-2xl mb-1">{service.companion.name}</CardTitle>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{service.companion.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 px-4 py-2 text-base">
                        <Clock className="w-4 h-4 mr-2" />
                        {service.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Service Time</p>
                          <p className="text-base">{service.startTime} - {service.endTime}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Location</p>
                          <p className="text-base">{service.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Session ID</p>
                          <p className="text-base font-mono text-sm">{service.id}</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex gap-3">
                      <Button asChild className="flex-1 h-12 rounded-full bg-primary hover:bg-primary/90">
                        <Link to={`/live/${service.id}`}>
                          <MapPin className="w-4 h-4 mr-2" />
                          View Live Tracking
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="border-2 border-dashed">
                <CardContent className="py-16 text-center">
                  <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl mb-2">No Active Services</h3>
                  <p className="text-base text-muted-foreground mb-6">You don't have any active companion services at the moment</p>
                  <Button size="lg" asChild className="rounded-full px-8 bg-primary hover:bg-primary/90">
                    <Link to="/booking">
                      <Plus className="w-5 h-5 mr-2" />
                      Book a Companion
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            {serviceHistory.map((service) => (
              <Card key={service.id} className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16 border-2">
                        <AvatarImage src={service.companion.photo} alt={service.companion.name} />
                        <AvatarFallback>{service.companion.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-2xl mb-1">{service.companion.name}</CardTitle>
                        <CardDescription className="text-base">{service.service}</CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 px-4 py-2 text-base">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      {service.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Date</p>
                        <p className="text-base">{new Date(service.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="text-base">{service.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Rating</p>
                        <p className="text-base">{service.companion.rating} / 5.0</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 text-primary">SAR</div>
                      <div>
                        <p className="text-sm text-muted-foreground">Amount</p>
                        <p className="text-base">{service.amount.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 h-12 rounded-full border-2">
                      <Download className="w-4 h-4 mr-2" />
                      Download Invoice
                    </Button>
                    <Button variant="outline" className="flex-1 h-12 rounded-full border-2">
                      Book Again
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
