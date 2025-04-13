import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, PiggyBank, CheckCircle, TrendingUp, Star, Quote } from "lucide-react"
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col">
      <div className="container mx-auto px-4 py-4 flex-1">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <PiggyBank className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-green-700">Invest In You</span>
          </div>
          <div className="flex items-center gap-4">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button>Sign Up</Button>
              </SignUpButton>
            </SignedOut>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl font-bold tracking-tight text-green-700">
              Transform Your Goals Into Wealth
            </h1>
            <p className="text-xl text-gray-600 max-w-[600px]">
              Complete your tasks or invest in your future. Every action you take builds your financial success.
            </p>
            <div className="flex gap-4">
              <Link href="/tasks">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <PiggyBank className="h-16 w-16 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Your Success, Your Investment</h2>
                  <p className="text-lg">Start building your future today</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Track Tasks</CardTitle>
                <CheckCircle className="h-5 w-5 text-green-600" />
              </CardHeader>
              <CardContent>
                <CardDescription>Create and track personal growth tasks that matter to you.</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Set Stakes</CardTitle>
                <PiggyBank className="h-5 w-5 text-green-600" />
              </CardHeader>
              <CardContent>
                <CardDescription>Assign monetary values to each task as an investment in yourself.</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Grow Wealth</CardTitle>
                <TrendingUp className="h-5 w-5 text-green-600" />
              </CardHeader>
              <CardContent>
                <CardDescription>Watch your investment grow as you complete tasks or miss them.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-green-50 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700">What Our Users Say</h2>
            <p className="text-gray-600 mt-4">Real stories from people who transformed their lives</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Entrepreneur",
                quote: "This platform helped me stay accountable and build my savings while working on my business.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Student",
                quote: "I've never been more motivated to complete my tasks. The financial incentive really works!",
                rating: 5
              },
              {
                name: "Emma Rodriguez",
                role: "Freelancer",
                quote: "Invest In You has transformed how I approach my daily goals. It's a game-changer.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-600 text-center mb-4">{testimonial.quote}</p>
                  <div className="text-center">
                    <p className="font-semibold text-green-700">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Ready to Transform Your Life?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of people who are already investing in their future success.
            </p>
            <Link href="/tasks">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
