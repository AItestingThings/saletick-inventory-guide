import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const plans = [
    {
      name: "Small Business",
      price: "₦10,000",
      period: "per month",
      description: "Perfect for small retail stores and individual business owners",
      icon: <Building className="h-8 w-8 text-primary" />,
      features: [
        "Up to 1,000 products",
        "Single location management",
        "Basic sales analytics",
        "Staff performance tracking (up to 3 users)",
        "Real-time stock alerts",
        "Mobile app access",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Growing Business",
      price: "₦50,000",
      period: "per month",
      description: "Ideal for larger businesses with multiple locations and teams",
      icon: <Crown className="h-8 w-8 text-primary" />,
      features: [
        "Unlimited products",
        "Multi-location management",
        "Advanced analytics & reporting",
        "Unlimited staff users",
        "Priority notifications",
        "API access",
        "Priority support",
        "Advanced reporting",
        "Multi-branch synchronization",
        "Custom integrations",
        "Team collaboration tools",
        "Advanced security features"
      ],
      popular: true
    }
  ];

  const faqs = [
    {
      question: "Can I switch between plans?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial for new users. No credit card required to get started."
    },
    {
      question: "Do you offer discounts for annual payments?",
      answer: "Yes, we offer a 20% discount for customers who pay annually. Contact our sales team for more details."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major Nigerian banks, card payments, and mobile money transfers including Paystack and Flutterwave."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transparent Pricing for Every Business
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. Start with our free trial and upgrade as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <div className="mx-auto mb-4">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Plans Include
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every SaleTick subscription comes with these essential features to help you manage your business effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Sync</h3>
              <p className="text-sm text-muted-foreground">All your data syncs in real-time across all devices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Mobile & Web Access</h3>
              <p className="text-sm text-muted-foreground">Access your business data from anywhere, anytime</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Secure Cloud Storage</h3>
              <p className="text-sm text-muted-foreground">Your data is safely stored with enterprise-grade security</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. Contact us if you need more information.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of Nigerian businesses who trust SaleTick to manage their inventory and boost their profits.
          </p>
          <Button size="lg" variant="secondary">
            Start Your Free Trial Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;