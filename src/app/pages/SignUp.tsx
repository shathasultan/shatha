import { Link, useNavigate } from "react-router";
import { Heart, User, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export default function SignUp() {
  const navigate = useNavigate();

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
            <Link to="/login">Already have an account?</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 bg-gradient-to-b from-background to-muted/30">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Join Rafiq</h2>
            <p className="text-xl text-muted-foreground">Choose how you'd like to get started</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-primary/40 hover:shadow-2xl transition-all cursor-pointer" onClick={() => navigate('/booking')}>
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-6 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl mb-3">Service Seeker</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Looking for a trusted companion for yourself or a loved one
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-base">Book vetted companions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-base">Real-time tracking and updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-base">Secure and easy payment</span>
                  </li>
                </ul>
                <Button className="w-full h-14 text-lg rounded-full bg-primary hover:bg-primary/90">
                  Continue as Service Seeker
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/40 hover:shadow-2xl transition-all cursor-pointer" onClick={() => navigate('/companion/register')}>
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-6 w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-secondary" />
                </div>
                <CardTitle className="text-3xl mb-3">Companion</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Join our network of professional companions helping seniors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-base">Flexible working hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-base">Competitive compensation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-base">Make a meaningful difference</span>
                  </li>
                </ul>
                <Button className="w-full h-14 text-lg rounded-full bg-secondary hover:bg-secondary/90">
                  Become a Companion
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
