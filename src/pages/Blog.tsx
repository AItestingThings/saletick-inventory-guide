import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "How to Track Sales with SaleTick",
      excerpt: "Learn how to effectively monitor your sales performance and identify trends using SaleTick's comprehensive analytics dashboard.",
      category: "Tutorial",
      date: "December 15, 2024",
      author: "SaleTick Team",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      title: "How SaleTick Calculates Profit & Loss for You",
      excerpt: "Understand the automated profit and loss calculations in SaleTick and how they can help you make better business decisions.",
      category: "Guide",
      date: "December 10, 2024",
      author: "SaleTick Team",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      title: "Meet Your POS Staff's New Best Friend",
      excerpt: "Discover how SaleTick's staff management features can boost your team's productivity and streamline your point-of-sale operations.",
      category: "Features",
      date: "December 5, 2024",
      author: "SaleTick Team",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      title: "Setting Up Multi-Location Inventory Management",
      excerpt: "Step-by-step guide to managing inventory across multiple locations with SaleTick's powerful synchronization features.",
      category: "Setup",
      date: "November 30, 2024",
      author: "SaleTick Team",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    },
    {
      title: "Real-Time Stock Alerts: Never Run Out Again",
      excerpt: "Learn how to configure and optimize SaleTick's intelligent stock alert system to prevent stockouts and overstock situations.",
      category: "Tips",
      date: "November 25, 2024",
      author: "SaleTick Team",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1489269637500-aa0e75768394?w=400&h=250&fit=crop"
    },
    {
      title: "Maximizing Your Business Insights with Analytics",
      excerpt: "Unlock the full potential of SaleTick's analytics to understand your customers, optimize inventory, and boost profitability.",
      category: "Analytics",
      date: "November 20, 2024",
      author: "SaleTick Team",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "Tutorial", "Guide", "Features", "Setup", "Tips", "Analytics"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How To Guides & Tutorials
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn how to get the most out of SaleTick with our comprehensive guides, tutorials, and tips for better inventory management.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge 
                    className="absolute top-4 left-4 bg-primary text-primary-foreground"
                  >
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter to get the latest tips, tutorials, and updates about SaleTick.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Put these tips into practice with SaleTick. Download the app and start transforming your business today.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/download">Download SaleTick Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;