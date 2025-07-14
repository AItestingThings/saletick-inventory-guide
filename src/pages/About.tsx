import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Target, Users, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Real-time Sales Analytics",
      description: "Get instant insights into your sales performance with comprehensive analytics and reporting."
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Inventory Tracking",
      description: "Monitor stock levels, track product movements, and receive automated alerts for low stock."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Staff Performance Management",
      description: "Track your team's performance, monitor POS activities, and optimize workforce productivity."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with reliable cloud backup to protect your business data."
    }
  ];

  const targetAudience = [
    "Small business owners managing retail stores",
    "Shop managers overseeing daily operations",
    "Sales teams tracking inventory and performance",
    "Multi-location businesses needing centralized control",
    "Entrepreneurs scaling their retail operations"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About SaleTick
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering Nigerian businesses with smart inventory management solutions that drive growth and profitability.
            </p>
          </div>
        </div>
      </section>

      {/* What is SaleTick */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What is SaleTick?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                SaleTick is a comprehensive inventory management application designed specifically for Nigerian businesses. 
                We understand the unique challenges of managing inventory, tracking sales, and monitoring staff performance 
                in the Nigerian market.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our platform combines powerful analytics, real-time tracking, and intuitive design to help businesses 
                of all sizes streamline their operations, reduce costs, and maximize profits.
              </p>
              <p className="text-lg text-muted-foreground">
                From small retail stores to multi-location enterprises, SaleTick provides the tools you need to 
                manage your inventory efficiently and make data-driven decisions that drive business growth.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/e83fb287-c485-4499-bc3c-dc3de081ae17.png" 
                alt="SaleTick Dashboard" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who SaleTick is For
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for Nigerian businesses who want to modernize their inventory management and boost their operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Perfect for:</h3>
              <div className="space-y-4">
                {targetAudience.map((audience, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{audience}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/92d4b4ca-e470-4631-b940-d58b7e4990e0.png" 
                alt="Inventory Management" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your inventory, track sales, and monitor your team's performance in one powerful app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {feature.icon}
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See SaleTick in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the intuitive interface and powerful features that make inventory management effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="/lovable-uploads/39623191-430f-4d9f-ba39-d5b2efaa414a.png" 
                alt="Real-time Analytics" 
                className="rounded-lg shadow-lg mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Analytics</h3>
              <p className="text-sm text-muted-foreground">Track your sales and revenue with comprehensive analytics</p>
            </div>
            <div className="text-center">
              <img 
                src="/lovable-uploads/954820af-045f-4ebc-8ff1-3f9a2c219bf5.png" 
                alt="Multi-location Management" 
                className="rounded-lg shadow-lg mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-foreground mb-2">Multi-location Management</h3>
              <p className="text-sm text-muted-foreground">Manage multiple stores and warehouses from one dashboard</p>
            </div>
            <div className="text-center">
              <img 
                src="/lovable-uploads/6a2e1293-3eca-4a89-aec8-be20ea32c60b.png" 
                alt="Inventory Tracking" 
                className="rounded-lg shadow-lg mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-foreground mb-2">Inventory Tracking</h3>
              <p className="text-sm text-muted-foreground">Monitor stock levels and product movements in real-time</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;