import { Link } from "react-router";
import { Heart, Home } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-6 flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <Heart className="w-10 h-10 text-primary" />
            <div>
              <h1 className="text-3xl tracking-tight text-foreground">Rafiq</h1>
              <p className="text-sm text-muted-foreground">Your Trusted Companion</p>
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 bg-gradient-to-b from-background to-muted/30">
        <div className="text-center max-w-md">
          <h1 className="text-9xl mb-6 text-primary">404</h1>
          <h2 className="text-4xl mb-4">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button size="lg" asChild className="rounded-full px-12 text-lg h-14 bg-primary hover:bg-primary/90">
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
