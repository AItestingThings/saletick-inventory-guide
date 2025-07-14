import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, TrendingUp, Users, Shield, BarChart3, Bell, Smartphone } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Inventory & Stock Tracking",
      description: "Monitor stock levels in real-time, track product movements, and get alerts when items are running low."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Automatic Profit/Loss Calculation",
      description: "Get instant insights into your business performance with automated financial calculations and reporting."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Staff Performance Dashboard",
      description: "Track your team's performance, monitor POS activities, and optimize your workforce productivity."
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Sales Trends & Real-time Alerts",
      description: "Stay informed with intelligent alerts and comprehensive sales analytics to make data-driven decisions."
    }
  ];

  const benefits = [
    "Streamlined inventory management",
    "Increased operational efficiency",
    "Better decision making with real-time data",
    "Reduced manual errors and time wastage",
    "Enhanced staff productivity monitoring",
    "Comprehensive financial reporting"
  ];

  const testimonials = [
    {
      name: "Adebayo Ogundimu",
      role: "Store Manager",
      company: "Lagos Fashion Hub",
      content: "SaleTick has revolutionized how we manage our inventory. The real-time alerts have saved us from countless stockouts and the staff dashboard helps us optimize our team's performance.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fatima Hassan",
      role: "Business Owner",
      company: "Northern Traders Ltd",
      content: "The profit/loss calculations are incredibly accurate and have helped us identify our most profitable products. SaleTick is now essential to our daily operations.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9db1d50?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Chidi Okwu",
      role: "Operations Director",
      company: "East Coast Electronics",
      content: "We've been using SaleTick for 8 months now, and it's transformed our multi-location inventory management. The system is intuitive and the support team is excellent.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Smarter Inventory Management for Growing Businesses
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Track sales, monitor staff, and get real-time stock alerts — all in one app. 
              Designed specifically for Nigerian businesses to streamline operations and boost profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/download">Download Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Manage Your Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              SaleTick provides comprehensive tools to help you track inventory, analyze sales, and manage your team effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SaleTick */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose SaleTick?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Built by Nigerians for Nigerian businesses. SaleTick understands the unique challenges 
                of managing inventory in our market and provides solutions that actually work.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/70410441-84b5-49ae-b92f-f66e96f0dc37.png" 
                alt="SaleTick App Screenshot" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of Nigerian businesses who trust SaleTick to manage their inventory and boost their profits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}, {testimonial.company}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Managing Your Inventory Like a Pro
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of businesses across Nigeria who have transformed their operations with SaleTick.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/download">
              <Smartphone className="mr-2 h-5 w-5" />
              Download SaleTick Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;