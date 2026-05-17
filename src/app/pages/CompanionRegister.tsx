import { Link, useNavigate } from "react-router";
import { Heart, Upload, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Progress } from "../components/ui/progress";
import { useState } from "react";

export default function CompanionRegister() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    thirdName: "",
    lastName: "",
    nationalId: "",
    gender: "",
    nationality: "",
    languages: [] as string[],
    hasCar: false,
    carMake: "",
    carModel: "",
    carYear: "",
    licensePlate: "",
    photo: null as File | null,
    certificates: [] as File[]
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    navigate('/dashboard/companion');
  };

  const toggleLanguage = (lang: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(lang)
        ? prev.languages.filter(l => l !== lang)
        : [...prev.languages, lang]
    }));
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
            <Link to="/login">Already registered?</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-12 max-w-3xl">
        <div className="mb-8">
          <h2 className="text-4xl mb-2">Companion Registration</h2>
          <p className="text-xl text-muted-foreground">Step {step} of {totalSteps}</p>
          <Progress value={progress} className="mt-4 h-3" />
        </div>

        <Card className="border-2">
          <CardContent className="pt-8">
            {step === 1 && (
              <div className="space-y-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Personal Information</CardTitle>
                  <CardDescription className="text-base">Please provide your full legal name</CardDescription>
                </CardHeader>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-base">First Name</Label>
                    <Input
                      id="firstName"
                      className="h-14 text-base rounded-xl border-2"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="secondName" className="text-base">Second Name</Label>
                    <Input
                      id="secondName"
                      className="h-14 text-base rounded-xl border-2"
                      value={formData.secondName}
                      onChange={(e) => setFormData({...formData, secondName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="thirdName" className="text-base">Third Name</Label>
                    <Input
                      id="thirdName"
                      className="h-14 text-base rounded-xl border-2"
                      value={formData.thirdName}
                      onChange={(e) => setFormData({...formData, thirdName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-base">Last Name</Label>
                    <Input
                      id="lastName"
                      className="h-14 text-base rounded-xl border-2"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nationalId" className="text-base">National ID / Iqama Number</Label>
                    <Input
                      id="nationalId"
                      className="h-14 text-base rounded-xl border-2"
                      value={formData.nationalId}
                      onChange={(e) => setFormData({...formData, nationalId: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender" className="text-base">Gender</Label>
                    <Select value={formData.gender} onValueChange={(value) => setFormData({...formData, gender: value})}>
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
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Background & Languages</CardTitle>
                  <CardDescription className="text-base">Tell us about your background and language skills</CardDescription>
                </CardHeader>

                <div className="space-y-2">
                  <Label htmlFor="nationality" className="text-base">Nationality</Label>
                  <Select value={formData.nationality} onValueChange={(value) => setFormData({...formData, nationality: value})}>
                    <SelectTrigger className="h-14 text-base rounded-xl border-2">
                      <SelectValue placeholder="Select nationality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="saudi">Saudi Arabia</SelectItem>
                      <SelectItem value="egypt">Egypt</SelectItem>
                      <SelectItem value="jordan">Jordan</SelectItem>
                      <SelectItem value="lebanon">Lebanon</SelectItem>
                      <SelectItem value="philippines">Philippines</SelectItem>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="pakistan">Pakistan</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-base">Languages Spoken</Label>
                  <div className="grid grid-cols-2 gap-4">
                    {['Arabic', 'English', 'Urdu', 'Hindi', 'Tagalog', 'French'].map(lang => (
                      <div key={lang} className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:bg-muted/50 cursor-pointer" onClick={() => toggleLanguage(lang)}>
                        <Checkbox
                          id={lang}
                          checked={formData.languages.includes(lang)}
                          onCheckedChange={() => toggleLanguage(lang)}
                        />
                        <Label htmlFor={lang} className="text-base cursor-pointer flex-1">{lang}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Vehicle Information</CardTitle>
                  <CardDescription className="text-base">Do you have a car available for companion services?</CardDescription>
                </CardHeader>

                <div className="flex items-center space-x-3 p-6 border-2 rounded-xl bg-muted/30">
                  <Checkbox
                    id="hasCar"
                    checked={formData.hasCar}
                    onCheckedChange={(checked) => setFormData({...formData, hasCar: checked as boolean})}
                  />
                  <Label htmlFor="hasCar" className="text-base cursor-pointer">I have a car available</Label>
                </div>

                {formData.hasCar && (
                  <div className="grid md:grid-cols-2 gap-6 animate-in fade-in duration-300">
                    <div className="space-y-2">
                      <Label htmlFor="carMake" className="text-base">Car Make</Label>
                      <Input
                        id="carMake"
                        placeholder="e.g., Toyota"
                        className="h-14 text-base rounded-xl border-2"
                        value={formData.carMake}
                        onChange={(e) => setFormData({...formData, carMake: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="carModel" className="text-base">Car Model</Label>
                      <Input
                        id="carModel"
                        placeholder="e.g., Camry"
                        className="h-14 text-base rounded-xl border-2"
                        value={formData.carModel}
                        onChange={(e) => setFormData({...formData, carModel: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="carYear" className="text-base">Year</Label>
                      <Input
                        id="carYear"
                        placeholder="e.g., 2020"
                        className="h-14 text-base rounded-xl border-2"
                        value={formData.carYear}
                        onChange={(e) => setFormData({...formData, carYear: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="licensePlate" className="text-base">License Plate Number</Label>
                      <Input
                        id="licensePlate"
                        placeholder="e.g., ABC 1234"
                        className="h-14 text-base rounded-xl border-2"
                        value={formData.licensePlate}
                        onChange={(e) => setFormData({...formData, licensePlate: e.target.value})}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Documents & Verification</CardTitle>
                  <CardDescription className="text-base">Upload your photo and relevant certificates</CardDescription>
                </CardHeader>

                <div className="space-y-2">
                  <Label htmlFor="photo" className="text-base">Personal Photo</Label>
                  <div className="border-2 border-dashed rounded-xl p-8 text-center hover:bg-muted/50 cursor-pointer transition-colors">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-base mb-2">Click to upload or drag and drop</p>
                    <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB</p>
                    <input
                      id="photo"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => setFormData({...formData, photo: e.target.files?.[0] || null})}
                    />
                  </div>
                  {formData.photo && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      {formData.photo.name}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="certificates" className="text-base">Certificates & Experience Documents</Label>
                  <div className="border-2 border-dashed rounded-xl p-8 text-center hover:bg-muted/50 cursor-pointer transition-colors">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-base mb-2">Upload certificates, training documents, or references</p>
                    <p className="text-sm text-muted-foreground">PDF, PNG, JPG up to 10MB each</p>
                    <input
                      id="certificates"
                      type="file"
                      multiple
                      accept=".pdf,image/*"
                      className="hidden"
                      onChange={(e) => setFormData({...formData, certificates: Array.from(e.target.files || [])})}
                    />
                  </div>
                  {formData.certificates.length > 0 && (
                    <div className="space-y-1 mt-2">
                      {formData.certificates.map((file, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          {file.name}
                        </div>
                      ))}
                    </div>
                  )}
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
                  Submit Application
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
