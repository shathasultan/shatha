import { Link, useNavigate } from "react-router";
import { Heart, User, Heart as HeartIcon, MapPin, Phone, MessageSquare } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import { Textarea } from "../components/ui/textarea";
import { Progress } from "../components/ui/progress";
import { useState } from "react";

export default function BookingFlow() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    recipientName: "",
    recipientAge: "",
    recipientGender: "",
    heartDisease: false,
    diabetes: false,
    asthma: false,
    bloodPressure: false,
    alzheimers: false,
    seizureHistory: false,
    hearingImpairment: false,
    visualImpairment: false,
    pickupLocation: "",
    destinationLocation: "",
    requiresCar: false,
    emergencyContact: "",
    emergencyName: "",
    specialInstructions: "",
    serviceDate: "",
    serviceDuration: "2"
  });

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    navigate('/payment', { state: { bookingData } });
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
          <Button variant="ghost" asChild className="text-base">
            <Link to="/login">Sign in</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8">
          <h2 className="text-4xl mb-2">Book a Companion</h2>
          <p className="text-xl text-muted-foreground">Step {step} of {totalSteps}</p>
          <Progress value={progress} className="mt-4 h-3" />
        </div>

        <Card className="border-2">
          <CardContent className="pt-8">
            {step === 1 && (
              <div className="space-y-6">
                <CardHeader className="px-0 pt-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Recipient Profile</CardTitle>
                      <CardDescription className="text-base">Who will receive companion services?</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="recipientName" className="text-base">Full Name</Label>
                    <Input
                      id="recipientName"
                      className="h-14 text-base rounded-xl border-2"
                      placeholder="Enter full name"
                      value={bookingData.recipientName}
                      onChange={(e) => setBookingData({...bookingData, recipientName: e.target.value})}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="recipientAge" className="text-base">Age</Label>
                      <Input
                        id="recipientAge"
                        type="number"
                        className="h-14 text-base rounded-xl border-2"
                        placeholder="e.g., 75"
                        value={bookingData.recipientAge}
                        onChange={(e) => setBookingData({...bookingData, recipientAge: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="recipientGender" className="text-base">Gender</Label>
                      <Select value={bookingData.recipientGender} onValueChange={(value) => setBookingData({...bookingData, recipientGender: value})}>
                        <SelectTrigger className="h-14 text-base rounded-xl border-2">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="serviceDate" className="text-base">Service Date</Label>
                      <Input
                        id="serviceDate"
                        type="date"
                        className="h-14 text-base rounded-xl border-2"
                        value={bookingData.serviceDate}
                        onChange={(e) => setBookingData({...bookingData, serviceDate: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="serviceDuration" className="text-base">Duration (hours)</Label>
                      <Select value={bookingData.serviceDuration} onValueChange={(value) => setBookingData({...bookingData, serviceDuration: value})}>
                        <SelectTrigger className="h-14 text-base rounded-xl border-2">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 hour</SelectItem>
                          <SelectItem value="2">2 hours</SelectItem>
                          <SelectItem value="3">3 hours</SelectItem>
                          <SelectItem value="4">4 hours</SelectItem>
                          <SelectItem value="6">6 hours</SelectItem>
                          <SelectItem value="8">8 hours (full day)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <CardHeader className="px-0 pt-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <HeartIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Health & Safety</CardTitle>
                      <CardDescription className="text-base">Important medical information for the companion</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <div className="space-y-4">
                  <Label className="text-base">Chronic Conditions (select all that apply)</Label>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-4 border-2 rounded-xl bg-muted/30">
                      <Label htmlFor="heartDisease" className="text-base cursor-pointer">Heart Disease</Label>
                      <Switch
                        id="heartDisease"
                        checked={bookingData.heartDisease}
                        onCheckedChange={(checked) => setBookingData({...bookingData, heartDisease: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 border-2 rounded-xl bg-muted/30">
                      <Label htmlFor="diabetes" className="text-base cursor-pointer">Diabetes</Label>
                      <Switch
                        id="diabetes"
                        checked={bookingData.diabetes}
                        onCheckedChange={(checked) => setBookingData({...bookingData, diabetes: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 border-2 rounded-xl bg-muted/30">
                      <Label htmlFor="asthma" className="text-base cursor-pointer">Asthma</Label>
                      <Switch
                        id="asthma"
                        checked={bookingData.asthma}
                        onCheckedChange={(checked) => setBookingData({...bookingData, asthma: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 border-2 rounded-xl bg-muted/30">
                      <Label htmlFor="bloodPressure" className="text-base cursor-pointer">High Blood Pressure</Label>
                      <Switch
                        id="bloodPressure"
                        checked={bookingData.bloodPressure}
                        onCheckedChange={(checked) => setBookingData({...bookingData, bloodPressure: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 border-2 rounded-xl bg-muted/30">
                      <Label htmlFor="alzheimers" className="text-base cursor-pointer">Alzheimer's/Dementia</Label>
                      <Switch
                        id="alzheimers"
                        checked={bookingData.alzheimers}
                        onCheckedChange={(checked) => setBookingData({...bookingData, alzheimers: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 border-2 rounded-xl bg-muted/30">
                      <Label htmlFor="seizureHistory" className="text-base cursor-pointer">Seizure History</Label>
                      <Switch
                        id="seizureHistory"
                        checked={bookingData.seizureHistory}
                        onCheckedChange={(checked) => setBookingData({...bookingData, seizureHistory: checked})}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-base">Physical Limitations</Label>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-4 border-2 rounded-xl bg-muted/30">
                      <Label htmlFor="hearingImpairment" className="text-base cursor-pointer">Hearing Impairment</Label>
                      <Switch
                        id="hearingImpairment"
                        checked={bookingData.hearingImpairment}
                        onCheckedChange={(checked) => setBookingData({...bookingData, hearingImpairment: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 border-2 rounded-xl bg-muted/30">
                      <Label htmlFor="visualImpairment" className="text-base cursor-pointer">Visual Impairment</Label>
                      <Switch
                        id="visualImpairment"
                        checked={bookingData.visualImpairment}
                        onCheckedChange={(checked) => setBookingData({...bookingData, visualImpairment: checked})}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <CardHeader className="px-0 pt-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Logistics & Emergency</CardTitle>
                      <CardDescription className="text-base">Location details and emergency contact</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="pickupLocation" className="text-base">Pick-up Location</Label>
                    <Input
                      id="pickupLocation"
                      className="h-14 text-base rounded-xl border-2"
                      placeholder="Enter pick-up address"
                      value={bookingData.pickupLocation}
                      onChange={(e) => setBookingData({...bookingData, pickupLocation: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="destinationLocation" className="text-base">Destination</Label>
                    <Input
                      id="destinationLocation"
                      className="h-14 text-base rounded-xl border-2"
                      placeholder="Enter destination address (if applicable)"
                      value={bookingData.destinationLocation}
                      onChange={(e) => setBookingData({...bookingData, destinationLocation: e.target.value})}
                    />
                  </div>

                  <div className="flex items-center justify-between p-6 border-2 rounded-xl bg-primary/5">
                    <div>
                      <Label htmlFor="requiresCar" className="text-base cursor-pointer mb-1 block">Require companion with car?</Label>
                      <p className="text-sm text-muted-foreground">Additional fee applies</p>
                    </div>
                    <Switch
                      id="requiresCar"
                      checked={bookingData.requiresCar}
                      onCheckedChange={(checked) => setBookingData({...bookingData, requiresCar: checked})}
                    />
                  </div>

                  <div className="pt-4 border-t-2">
                    <div className="flex items-center gap-2 mb-4">
                      <Phone className="w-5 h-5 text-primary" />
                      <Label className="text-base">Emergency Contact</Label>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="emergencyName" className="text-base">Contact Name</Label>
                        <Input
                          id="emergencyName"
                          className="h-14 text-base rounded-xl border-2"
                          placeholder="Emergency contact person"
                          value={bookingData.emergencyName}
                          onChange={(e) => setBookingData({...bookingData, emergencyName: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact" className="text-base">Phone Number</Label>
                        <Input
                          id="emergencyContact"
                          type="tel"
                          className="h-14 text-base rounded-xl border-2"
                          placeholder="+966 XXX XXX XXX"
                          value={bookingData.emergencyContact}
                          onChange={(e) => setBookingData({...bookingData, emergencyContact: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      <Label htmlFor="specialInstructions" className="text-base">Special Instructions for Companion</Label>
                    </div>
                    <Textarea
                      id="specialInstructions"
                      className="min-h-32 text-base rounded-xl border-2"
                      placeholder="Any special instructions, preferences, or important information for the companion..."
                      value={bookingData.specialInstructions}
                      onChange={(e) => setBookingData({...bookingData, specialInstructions: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-8 pt-6 border-t">
              {step > 1 && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleBack}
                  className="h-14 text-base rounded-full border-2 px-8"
                >
                  Back
                </Button>
              )}
              {step < totalSteps ? (
                <Button
                  size="lg"
                  onClick={handleNext}
                  className="flex-1 h-14 text-base rounded-full bg-primary hover:bg-primary/90"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  size="lg"
                  onClick={handleSubmit}
                  className="flex-1 h-14 text-base rounded-full bg-primary hover:bg-primary/90"
                >
                  Proceed to Payment
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
