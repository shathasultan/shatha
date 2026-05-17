import { Link, useNavigate } from "react-router";
import { Heart, Mail, Lock, Chrome } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard/user');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Heart className="w-10 h-10 text-primary" />
            <div>
              <h1 className="text-3xl tracking-tight text-foreground">Rafiq</h1>
              <p className="text-sm text-muted-foreground">Your Trusted Companion</p>
            </div>
          </Link>
          <Button variant="ghost" asChild className="text-base">
            <Link to="/signup">Create an account</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 bg-gradient-to-b from-background to-muted/30">
        <Card className="w-full max-w-md border-2">
          <CardHeader className="text-center space-y-3">
            <CardTitle className="text-3xl">Welcome Back</CardTitle>
            <CardDescription className="text-base">
              Sign in to your Rafiq account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="pl-12 h-14 text-base rounded-full border-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-base">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-12 h-14 text-base rounded-full border-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="text-right">
                <Button variant="link" className="text-base px-0 text-primary">
                  Forgot password?
                </Button>
              </div>

              <Button type="submit" className="w-full h-14 text-lg rounded-full bg-primary hover:bg-primary/90">
                Sign In
              </Button>
            </form>

            <div className="my-6">
              <Separator className="my-6" />
              <p className="text-center text-sm text-muted-foreground mb-6">Or continue with</p>
            </div>

            <div className="space-y-3">
              <Button variant="outline" className="w-full h-14 text-base rounded-full border-2" type="button">
                <Chrome className="mr-3 w-5 h-5" />
                Continue with Google
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
