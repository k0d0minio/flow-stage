import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Music, MapPin, Users, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Flow Stage</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Revolutionize Musical Touring
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            B2B SaaS platform that automates the entire musical touring value chain, 
            from artist-venue matching to complete tour management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Demo
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Music className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Smart Matching</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Intelligent algorithm to match artists and venues in 3 clicks
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Geographic Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Reduce your transport costs by 30-40% with our optimization
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Technical Teams</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Intelligent matching of technicians based on skills and geolocation
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Automated Contracts</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Automatic contract generation with integrated e-signature
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary to-purple-600 text-white border-0">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to transform your touring?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join the first users of Flow Stage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Your professional email" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" size="lg">
                Sign Up
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Flow Stage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
