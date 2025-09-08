import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Sprout, 
  Droplets, 
  Brain, 
  Users, 
  Clock, 
  MapPin, 
  User, 
  Heart,
  Smartphone,
  Leaf,
  Star,
  CheckCircle,
  TrendingUp,
  Camera,
  Building,
  GraduationCap
} from "lucide-react";
import heroImage from "@/assets/hero-balcony-garden.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-primary/10 to-primary-light/20" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              🌱 Smart Gardening Solution
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Grow Smart.
              </span>
              <br />
              <span className="text-foreground">Live Green.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Turn any small space into a thriving garden with IoT-powered wicking beds and our EcoMentor app.
            </p>
            
            <div className="pt-6">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                🌱 Start Growing Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Summary */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            <span className="font-semibold text-primary">Farmily</span> helps you grow fresh, organic food at home in just 
            <span className="font-semibold"> 10 minutes a week</span>—saving 
            <span className="font-semibold text-accent"> 80% water</span>, cutting grocery costs, and making gardening simple with 
            <span className="font-semibold text-primary"> AI tips and reminders</span>.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Everything You Need to 
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"> Succeed</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-feature transition-all duration-300 border-0 shadow-soft">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Smart Sensors</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Track soil moisture, sunlight, and temperature automatically.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-feature transition-all duration-300 border-0 shadow-soft">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Save Water</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Wicking bed design uses 80% less water than traditional gardening.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-feature transition-all duration-300 border-0 shadow-soft">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">EcoMentor App</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  AI-powered tips, harvest reminders, and personalized planting guides.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-feature transition-all duration-300 border-0 shadow-soft">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Share gardening hacks and progress with other growers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Why Growing Your Own is Hard
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Forgetting to water plants regularly</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Limited space in urban environments</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Busy lifestyle with no time for gardening</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Lack of gardening knowledge and experience</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary mb-6">
                The Farmily Solution
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground">Automated reminders and smart notifications</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground">Self-watering beds perfect for any space</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground">Just 10 minutes per week maintenance</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground">AI-powered guidance for every step</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It 
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"> Works</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h4 className="font-semibold text-lg mb-2">Install Sensor</h4>
              <p className="text-muted-foreground text-sm">
                Place the smart sensor in your pot or garden bed
              </p>
              {/* Connection line */}
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary-light transform -translate-x-8 -translate-y-0.5" />
            </div>
            
            <div className="text-center relative">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h4 className="font-semibold text-lg mb-2">Connect App</h4>
              <p className="text-muted-foreground text-sm">
                Link to the Farmily app for instant monitoring
              </p>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-light to-accent transform -translate-x-8 -translate-y-0.5" />
            </div>
            
            <div className="text-center relative">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h4 className="font-semibold text-lg mb-2">Get Guidance</h4>
              <p className="text-muted-foreground text-sm">
                Receive smart reminders and AI gardening advice
              </p>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent to-secondary transform -translate-x-8 -translate-y-0.5" />
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h4 className="font-semibold text-lg mb-2">Harvest Fresh</h4>
              <p className="text-muted-foreground text-sm">
                Enjoy fresh vegetables and herbs from your garden
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perfect for 
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"> Everyone</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Farmily is for everyone—beginners, families, and green lifestyle seekers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Urban Professionals</h4>
              <p className="text-muted-foreground">
                Busy schedules made simple with automated care and smart reminders.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Busy Families</h4>
              <p className="text-muted-foreground">
                Teach kids about nature while growing healthy food together.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Eco-Conscious</h4>
              <p className="text-muted-foreground">
                Reduce your carbon footprint with sustainable home-grown produce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Users 
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"> Say</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 shadow-feature border-0">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                  <Star className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-foreground italic">
                  "I killed every plant before, now I grow basil and tomatoes on my balcony! 
                  Farmily made gardening foolproof for me."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Sarah M.</p>
                    <p className="text-xs text-muted-foreground">Urban Professional</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 shadow-feature border-0">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground italic">
                  "Farmily makes gardening stress-free and sustainable. 
                  My kids love watching our herbs grow!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <Heart className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Mike & Lisa T.</p>
                    <p className="text-xs text-muted-foreground">Family of Four</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6 text-muted-foreground">Trusted by leading organizations</h4>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6" />
                <span className="text-sm">Universities</span>
              </div>
              <div className="flex items-center gap-2">
                <Sprout className="h-6 w-6" />
                <span className="text-sm">Garden Centers</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6" />
                <span className="text-sm">Sustainability NGOs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your 
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"> Plan</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-soft border-0">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-2">Free</CardTitle>
                <div className="text-3xl font-bold text-primary">$0</div>
                <CardDescription className="text-base">Perfect for beginners</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Basic plant care reminders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Plant care library access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Community forum access</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-6">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>
            
            <Card className="p-6 shadow-feature border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge variant="default" className="bg-primary">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-2">Premium</CardTitle>
                <div className="text-3xl font-bold text-primary">
                  AUD $5.99
                  <span className="text-base font-normal text-muted-foreground">/month</span>
                </div>
                <CardDescription className="text-base">For serious growers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">AI-powered gardening advice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Smart scheduling & notifications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Harvest tracking & analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Priority customer support</span>
                  </div>
                </div>
                <Button variant="hero" className="w-full mt-6">
                  Start Premium Trial
                </Button>
              </CardContent>
            </Card>
            
            <Card className="p-6 shadow-soft border-0">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-2">Hardware Bundle</CardTitle>
                <div className="text-3xl font-bold text-secondary">
                  AUD $89
                  <span className="text-base font-normal text-muted-foreground">/one-time</span>
                </div>
                <CardDescription className="text-base">Complete smart garden kit</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">IoT sensor included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">6 months Premium free</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Self-watering bed kit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Setup support included</span>
                  </div>
                </div>
                <Button variant="accent" className="w-full mt-6">
                  Pre-Order Bundle
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Future of 
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"> Gardening</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're constantly innovating to make home gardening even smarter and more accessible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card shadow-soft">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">AI Plant Recognition</h4>
              <p className="text-muted-foreground">
                Automatically detect plant diseases and pests using your phone camera.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card shadow-soft">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Greenhouse Integration</h4>
              <p className="text-muted-foreground">
                Connect and control smart greenhouse systems for year-round growing.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card shadow-soft">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">School Programs</h4>
              <p className="text-muted-foreground">
                Educational gardening programs to teach sustainability in schools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary-light/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Grow Smarter. Live Greener.
              <br />
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Join the Farmily Today.
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start your smart gardening journey and transform any space into a thriving garden.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Join the Waitlist
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Pre-Order Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-16 border-t">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-primary">Farmily</h3>
              <p className="text-sm text-muted-foreground">
                Smart gardening for everyone. Grow fresh, live green.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>About</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Hardware</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Help Center</p>
                <p>Community</p>
                <p>Blog</p>
                <p>Contact</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookie Policy</p>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Get weekly tips to keep your plants thriving:
                </p>
                <div className="flex gap-2">
                  <Input placeholder="Enter your email" className="max-w-xs" />
                  <Button variant="eco" size="sm">Subscribe</Button>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Follow us:</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">Instagram</Button>
                  <Button variant="ghost" size="sm">YouTube</Button>
                  <Button variant="ghost" size="sm">Facebook</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;