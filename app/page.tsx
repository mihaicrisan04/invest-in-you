import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, PiggyBank, CheckCircle, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-green-700">
              Invest In You
            </h1>
            <p className="text-xl text-gray-600 max-w-[600px] mx-auto">
              Complete your tasks or invest in your future. Either way, you win.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Track Tasks</CardTitle>
                <CheckCircle className="h-5 w-5 text-green-600" />
              </CardHeader>
              <CardContent>
                <CardDescription>Create and track personal growth tasks that matter to you.</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Set Stakes</CardTitle>
                <PiggyBank className="h-5 w-5 text-green-600" />
              </CardHeader>
              <CardContent>
                <CardDescription>Assign monetary values to each task as an investment in yourself.</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Grow Wealth</CardTitle>
                <TrendingUp className="h-5 w-5 text-green-600" />
              </CardHeader>
              <CardContent>
                <CardDescription>Watch your investment grow as you complete tasks or miss them.</CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="pt-4">
            <Link href="/dashboard">
              <Button className="bg-green-600 hover:bg-green-700">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
