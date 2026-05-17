import { Link, useNavigate, useLocation } from "react-router";
import { Heart, CheckCircle2, Calendar, MapPin, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const { total, sessionId } = location.state || { total: 0, sessionId: 'RFQ123456' };
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D97941', '#8B7355', '#E8A87C']
    });

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate(`/live/${sessionId}`);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, sessionId]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/30">
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Heart className="w-10 h-10 text-primary" />
            <div>
              <h1 className="text-3xl tracking-tight text-foreground">Rafiq</h1>
              <p className="text-sm text-muted-foreground">Your Trusted Companion</p>
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <Card className="max-w-2xl w-full border-2 shadow-2xl">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="mb-8 animate-in zoom-in duration-500">
              <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-16 h-16 text-green-600" />
              </div>
              <h2 className="text-4xl mb-3">Payment Successful!</h2>
              <p className="text-xl text-muted-foreground">Your companion has been notified</p>
            </div>

            <div className="bg-muted/50 rounded-2xl p-8 mb-8 space-y-4">
              <div className="flex justify-between items-center text-base">
                <span className="text-muted-foreground">Transaction ID</span>
                <span className="font-mono">{sessionId}</span>
              </div>
              <div className="flex justify-between items-center text-base">
                <span className="text-muted-foreground">Amount Paid</span>
                <span className="text-2xl text-primary">SAR {total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-6 bg-card border-2 rounded-xl text-left">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-base mb-1">Service Confirmed</p>
                  <p className="text-sm text-muted-foreground">Your companion will arrive at the scheduled time. You'll receive updates via SMS and email.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border-2 rounded-xl text-left">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-base mb-1">Live Tracking Available</p>
                  <p className="text-sm text-muted-foreground">You'll be redirected to the live dashboard to track your companion in real-time.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border-2 rounded-xl text-left">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-base mb-1">24/7 Support Available</p>
                  <p className="text-sm text-muted-foreground">Contact us anytime if you need assistance or have questions about your service.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-base text-muted-foreground">
                Redirecting to live dashboard in <span className="text-2xl text-primary">{countdown}</span> seconds...
              </div>
              <Button
                size="lg"
                onClick={() => navigate(`/live/${sessionId}`)}
                className="h-14 text-lg rounded-full bg-primary hover:bg-primary/90 px-12"
              >
                Go to Live Dashboard Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
