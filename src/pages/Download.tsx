import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Download, Apple, Play } from "lucide-react";

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Download SaleTick for Free
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get SaleTick on your mobile device and start managing your inventory like a pro. Available for iOS and Android.
            </p>
          </div>
        </div>
      </section>

      {/* Download Buttons */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-8">
                <div className="mx-auto mb-4">
                  <Apple className="h-16 w-16 text-foreground" />
                </div>
                <CardTitle className="text-2xl">Download for iOS</CardTitle>
                <CardDescription>Available on the App Store</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="w-full mb-4">
                  <Download className="mr-2 h-5 w-5" />
                  Download from App Store
                </Button>
                <p className="text-sm text-muted-foreground">
                  Requires iOS 12.0 or later
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-8">
                <div className="mx-auto mb-4">
                  <Play className="h-16 w-16 text-foreground" />
                </div>
                <CardTitle className="text-2xl">Download for Android</CardTitle>
                <CardDescription>Available on Google Play</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="w-full mb-4">
                  <Download className="mr-2 h-5 w-5" />
                  Download from Google Play
                </Button>
                <p className="text-sm text-muted-foreground">
                  Requires Android 8.0 or later
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See What You'll Get
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take a look at SaleTick's intuitive interface and powerful features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="/lovable-uploads/39623191-430f-4d9f-ba39-d5b2efaa414a.png" 
                alt="Real-time Analytics" 
                className="mx-auto mb-4 rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center">
              <img 
                src="/lovable-uploads/e83fb287-c485-4499-bc3c-dc3de081ae17.png" 
                alt="Dashboard Overview" 
                className="mx-auto mb-4 rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center">
              <img 
                src="/lovable-uploads/92d4b4ca-e470-4631-b940-d58b7e4990e0.png" 
                alt="Inventory Management" 
                className="mx-auto mb-4 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;