import { Link } from "react-router";
import { Heart, DollarSign, Star, TrendingUp, Calendar, Clock, MapPin, User, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import { useState } from "react";

export default function CompanionDashboard() {
  const [isAvailable, setIsAvailable] = useState(true);

  const stats = {
    totalEarnings: 15420.50,
    thisMonth: 3240.00,
    totalTrips: 347,
    rating: 4.9,
    completionRate: 98
  };

  const upcomingBookings = [
    {
      id: "RFQ1735200001",
      client: {
        name: "Abdullah Al-Rashid",
        age: 78,
        photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop"
      },
      date: "2026-04-23",
      time: "09:00 AM",
      duration: "3 hours",
      pickup: "Al Nakheel District",
      destination: "King Faisal Specialist Hospital",
      amount: 517.50,
      requiresCar: true,
      notes: "Client has hearing impairment, please speak clearly and face them when talking."
    },
    {
      id: "RFQ1735200002",
      client: {
        name: "Fatima Al-Harbi",
        age: 82,
        photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop"
      },
      date: "2026-04-23",
      time: "02:00 PM",
      duration: "2 hours",
      pickup: "Al Olaya",
      destination: "Al Nakheel Mall",
      amount: 345.00,
      requiresCar: false,
      notes: "Shopping assistance needed. Client uses walking cane."
    }
  ];

  const completedServices = [
    {
      id: "RFQ1735098765",
      client: "Mohammed Al-Qahtani",
      date: "2026-04-21",
      duration: "4 hours",
      amount: 690.00,
      rating: 5,
      tip: 50.00
    },
    {
      id: "RFQ1735012345",
      client: "Noura Al-Saud",
      date: "2026-04-20",
      duration: "2 hours",
      amount: 345.00,
      rating: 5,
      tip: 0
    },
    {
      id: "RFQ1734987654",
      client: "Hassan Ibrahim",
      date: "2026-04-18",
      duration: "3 hours",
      amount: 517.50,
      rating: 4,
      tip: 25.00
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
              <p className="text-sm text-muted-foreground">Companion Dashboard</p>
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-4 py-2 bg-muted/50 rounded-full">
              <Label htmlFor="availability" className="text-base cursor-pointer">
                {isAvailable ? "Available" : "Offline"}
              </Label>
              <Switch
                id="availability"
                checked={isAvailable}
                onCheckedChange={setIsAvailable}
              />
            </div>
            <Avatar className="w-12 h-12 border-2 border-primary">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-12 max-w-7xl">
        <div className="mb-8">
          <h2 className="text-4xl mb-2">Welcome back, Ahmed</h2>
          <p className="text-xl text-muted-foreground">Here's your performance overview</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardDescription className="text-base">Total Earnings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl mb-1">SAR {stats.totalEarnings.toLocaleString()}</p>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    +12% this month
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardDescription className="text-base">This Month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl mb-1">SAR {stats.thisMonth.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">32 trips completed</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardDescription className="text-base">Average Rating</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl mb-1">{stats.rating} / 5.0</p>
                  <p className="text-sm text-muted-foreground">{stats.totalTrips} total trips</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-600 fill-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardDescription className="text-base">Completion Rate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl mb-1">{stats.completionRate}%</p>
                  <p className="text-sm text-muted-foreground">Excellent performance</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-8">
          <TabsList className="grid w-full max-w-md grid-cols-2 h-14">
            <TabsTrigger value="upcoming" className="text-base">Upcoming Bookings</TabsTrigger>
            <TabsTrigger value="completed" className="text-base">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            {upcomingBookings.map((booking) => (
              <Card key={booking.id} className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16 border-2">
                        <AvatarImage src={booking.client.photo} alt={booking.client.name} />
                        <AvatarFallback>{booking.client.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-2xl mb-1">{booking.client.name}</CardTitle>
                        <CardDescription className="text-base">{booking.client.age} years old</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl text-primary mb-1">SAR {booking.amount.toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground">{booking.duration}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Date</p>
                        <p className="text-base">{new Date(booking.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Time</p>
                        <p className="text-base">{booking.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Pickup</p>
                        <p className="text-base">{booking.pickup}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Destination</p>
                        <p className="text-base">{booking.destination}</p>
                      </div>
                    </div>
                  </div>

                  {booking.requiresCar && (
                    <Badge variant="secondary" className="text-base px-3 py-1">
                      Car Required
                    </Badge>
                  )}

                  {booking.notes && (
                    <div className="bg-muted/50 p-4 rounded-xl border-2">
                      <p className="text-sm text-muted-foreground mb-1">Special Instructions</p>
                      <p className="text-base">{booking.notes}</p>
                    </div>
                  )}

                  <Separator />

                  <div className="flex gap-3">
                    <Button className="flex-1 h-12 rounded-full bg-primary hover:bg-primary/90">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Accept Booking
                    </Button>
                    <Button variant="outline" className="h-12 rounded-full border-2 px-6">
                      <XCircle className="w-4 h-4 mr-2" />
                      Decline
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            {completedServices.map((service) => (
              <Card key={service.id} className="border-2">
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-1">{service.client}</CardTitle>
                        <CardDescription className="text-base">
                          {new Date(service.date).toLocaleDateString()} • {service.duration}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl text-primary mb-1">SAR {service.amount.toFixed(2)}</p>
                      {service.tip > 0 && (
                        <p className="text-sm text-green-600">+ SAR {service.tip.toFixed(2)} tip</p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-base">Client Rating: {service.rating} / 5</span>
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
