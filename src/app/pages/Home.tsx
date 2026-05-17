import { Link } from "react-router";
import { Heart, Users, Newspaper, ArrowRight, Calendar, BookOpen, Stethoscope } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export default function Home() {
  const newsArticles = [
    {
      title: "5 Morning Exercises for Joint Health",
      category: "Health Tips",
      excerpt: "Start your day with gentle movements that keep your joints flexible and strong.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      readTime: "5 min read"
    },
    {
      title: "Building Connections in Your Community",
      category: "Community Stories",
      excerpt: "How local seniors are creating meaningful friendships through shared activities.",
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&h=600&fit=crop",
      readTime: "4 min read"
    },
    {
      title: "Nutrition Guide: Heart-Healthy Foods",
      category: "Daily Advice",
      excerpt: "Simple dietary changes that can make a big difference for your cardiovascular health.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
      readTime: "6 min read"
    },
    {
      title: "Technology Tips for Staying Connected",
      category: "Daily Advice",
      excerpt: "Easy ways to use video calls and messaging to stay in touch with loved ones.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart className="w-10 h-10 text-primary" />
            <div>
              <h1 className="text-3xl tracking-tight text-foreground">Rafiq</h1>
              <p className="text-sm text-muted-foreground">Your Trusted Companion</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="lg" asChild className="rounded-full px-8">
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full px-8">
              <Link to="/chat">Web Chat</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full px-8">
              <Link to="/chat/mobile">Mobile Chat</Link>
            </Button>
            <Button size="lg" asChild className="rounded-full px-8 bg-primary hover:bg-primary/90">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl mb-6 text-foreground">Daily News for Seniors</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Stay informed, healthy, and connected with curated content designed for you
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {newsArticles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {article.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
                <CardTitle className="text-2xl leading-tight">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4 leading-relaxed">
                  {article.excerpt}
                </CardDescription>
                <Button variant="ghost" className="group text-base px-0 hover:bg-transparent">
                  Read More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">How Rafiq Helps You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-primary/20 transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Health Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Companions trained to assist with medical appointments and health monitoring
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/20 transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Social Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Friendly companions for activities, conversations, and community events
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/20 transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Flexible Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Book companionship services whenever you need them, with easy online booking
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="rounded-full px-12 text-lg h-14 bg-primary hover:bg-primary/90">
              <Link to="/booking">Book a Companion Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="text-base">&copy; 2026 Rafiq. Your trusted companion service.</p>
        </div>
      </footer>
    </div>
  );
}
