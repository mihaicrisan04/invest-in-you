import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { ArrowLeft, PiggyBank, TrendingUp, Lock } from "lucide-react"
import Link from "next/link"

export default function InvestmentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="outline" size="sm" asChild className="mr-4">
              <Link href="/tasks">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tasks
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Your Investments</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <PiggyBank className="mr-2 h-5 w-5 text-green-600" />
                Total Invested
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-700">$125.00</p>
              <p className="text-sm text-gray-500 mt-1">From 8 missed tasks</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
                Current Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-700">$127.50</p>
              <p className="text-sm text-gray-500 mt-1">+2% growth</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <Lock className="mr-2 h-5 w-5 text-amber-600" />
                Withdrawal Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold text-amber-600">Locked for 28 days</p>
              <p className="text-sm text-gray-500 mt-1">Available on May 11, 2025</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg border p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Investment Growth</h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Investment chart will be displayed here</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">Investment History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Task</th>
                  <th className="text-left py-3 px-4">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">Apr 10, 2025</td>
                  <td className="py-3 px-4">Read for 30 minutes</td>
                  <td className="py-3 px-4 text-green-600">$15.00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Apr 8, 2025</td>
                  <td className="py-3 px-4">Morning workout</td>
                  <td className="py-3 px-4 text-green-600">$20.00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Apr 5, 2025</td>
                  <td className="py-3 px-4">Practice piano</td>
                  <td className="py-3 px-4 text-green-600">$10.00</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Apr 2, 2025</td>
                  <td className="py-3 px-4">Meditate for 15 minutes</td>
                  <td className="py-3 px-4 text-green-600">$8.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
