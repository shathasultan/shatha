import { Link, useNavigate, useLocation } from "react-router";
import { Heart, CreditCard, Smartphone, ShieldCheck, Lock, Info } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Separator } from "../components/ui/separator";
import { useState } from "react";

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state?.bookingData || {};

  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const basePrice = parseFloat(bookingData.serviceDuration || "2") * 150;
  const carFee = bookingData.requiresCar ? 75 : 0;
  const subtotal = basePrice + carFee;
  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  const handlePayment = () => {
    setTimeout(() => {
      navigate('/payment/success', { state: { total, sessionId: 'RFQ' + Date.now() } });
    }, 1500);
  };

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

      <main className="flex-1 container mx-auto px-6 py-12 max-w-5xl">
        <div className="mb-8">
          <h2 className="text-4xl mb-2">Secure Checkout</h2>
          <p className="text-xl text-muted-foreground">Complete your booking with secure payment</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Payment Method</CardTitle>
                <CardDescription className="text-base">Select your preferred payment option</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                  <div className="flex items-center space-x-4 border-2 rounded-xl p-6 cursor-pointer hover:bg-muted/30 transition-colors">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex items-center gap-3 cursor-pointer flex-1">
                      <CreditCard className="w-6 h-6 text-primary" />
                      <div>
                        <p className="text-base">Credit / Debit Card</p>
                        <p className="text-sm text-muted-foreground">Visa, Mastercard, Amex</p>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-4 border-2 rounded-xl p-6 cursor-pointer hover:bg-muted/30 transition-colors">
                    <RadioGroupItem value="mada" id="mada" />
                    <Label htmlFor="mada" className="flex items-center gap-3 cursor-pointer flex-1">
                      <CreditCard className="w-6 h-6 text-primary" />
                      <div>
                        <p className="text-base">Mada</p>
                        <p className="text-sm text-muted-foreground">Local Saudi payment card</p>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-4 border-2 rounded-xl p-6 cursor-pointer hover:bg-muted/30 transition-colors">
                    <RadioGroupItem value="apple-pay" id="apple-pay" />
                    <Label htmlFor="apple-pay" className="flex items-center gap-3 cursor-pointer flex-1">
                      <Smartphone className="w-6 h-6 text-primary" />
                      <div>
                        <p className="text-base">Apple Pay</p>
                        <p className="text-sm text-muted-foreground">Quick and secure</p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "credit-card" || paymentMethod === "mada" ? (
                  <div className="mt-8 space-y-6 animate-in fade-in duration-300">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber" className="text-base">Card Number</Label>
                      <div className="relative">
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className="h-14 text-base rounded-xl border-2"
                        />
                        <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="expiry" className="text-base">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          className="h-14 text-base rounded-xl border-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv" className="text-base">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          type="password"
                          maxLength={4}
                          className="h-14 text-base rounded-xl border-2"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardName" className="text-base">Cardholder Name</Label>
                      <Input
                        id="cardName"
                        placeholder="Name as shown on card"
                        className="h-14 text-base rounded-xl border-2"
                      />
                    </div>
                  </div>
                ) : null}
              </CardContent>
            </Card>

            <div className="flex items-start gap-3 p-6 bg-muted/50 rounded-xl border-2">
              <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-base mb-1">Your payment is secure</p>
                <p className="text-sm text-muted-foreground">We use industry-standard encryption to protect your payment information. Your card details are never stored on our servers.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="border-2 sticky top-6">
              <CardHeader>
                <CardTitle className="text-2xl">Service Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-base">
                    <span className="text-muted-foreground">Companion Service</span>
                    <span>{bookingData.serviceDuration || "2"} hours</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="text-muted-foreground">Rate per hour</span>
                    <span>SAR 150</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-base">
                    <span className="text-muted-foreground">Service subtotal</span>
                    <span>SAR {basePrice.toFixed(2)}</span>
                  </div>
                  {bookingData.requiresCar && (
                    <div className="flex justify-between text-base">
                      <span className="text-muted-foreground">Car service fee</span>
                      <span>SAR {carFee.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base">
                    <span className="text-muted-foreground">VAT (15%)</span>
                    <span>SAR {tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-xl pt-2">
                    <span>Total</span>
                    <span className="text-primary">SAR {total.toFixed(2)}</span>
                  </div>
                </div>

                {bookingData.recipientName && (
                  <div className="pt-4 border-t-2 space-y-3">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                      <div className="text-sm text-muted-foreground">
                        <p className="mb-1">Booking for: <span className="text-foreground">{bookingData.recipientName}</span></p>
                        {bookingData.serviceDate && (
                          <p>Date: <span className="text-foreground">{new Date(bookingData.serviceDate).toLocaleDateString()}</span></p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handlePayment}
                  className="w-full h-14 text-lg rounded-full bg-primary hover:bg-primary/90"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  Complete Payment
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By completing this payment, you agree to our Terms of Service and Privacy Policy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
