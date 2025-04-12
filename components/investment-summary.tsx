"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PiggyBank, TrendingUp, Calendar } from "lucide-react"
import { formatCurrency } from "@/lib/utils"
import { getTasks } from "@/lib/tasks"

export function InvestmentSummary() {
  const [totalInvested, setTotalInvested] = useState(0)
  const [pendingAmount, setPendingAmount] = useState(0)
  const [completedTasks, setCompletedTasks] = useState(0)
  const [pendingTasks, setPendingTasks] = useState(0)

  useEffect(() => {
    const tasks = getTasks()

    const invested = tasks
      .filter((task) => !task.completed && new Date(task.dueDate) < new Date())
      .reduce((sum, task) => sum + task.amount, 0)

    const pending = tasks
      .filter((task) => !task.completed && new Date(task.dueDate) >= new Date())
      .reduce((sum, task) => sum + task.amount, 0)

    setTotalInvested(invested)
    setPendingAmount(pending)
    setCompletedTasks(tasks.filter((task) => task.completed).length)
    setPendingTasks(tasks.filter((task) => !task.completed).length)
  }, [])

  return (
    <div className="space-y-6">
      <Card className="bg-green-50 border-green-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium flex items-center">
            <PiggyBank className="mr-2 h-5 w-5 text-green-600" />
            Your Investment Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Total Invested</p>
              <p className="text-2xl font-bold text-green-700">{formatCurrency(totalInvested)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending Investment</p>
              <p className="text-xl font-semibold text-amber-600">{formatCurrency(pendingAmount)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium flex items-center">
            <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
            Task Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Completed Tasks</p>
              <p className="text-xl font-semibold text-green-600">{completedTasks}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending Tasks</p>
              <p className="text-xl font-semibold text-amber-600">{pendingTasks}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-green-600" />
            Investment Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                ✓
              </span>
              <span>Complete tasks to avoid automatic investments</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                ✓
              </span>
              <span>Set realistic investment amounts for each task</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                ✓
              </span>
              <span>Withdrawals should be for important goals only</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
