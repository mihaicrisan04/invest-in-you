import { TaskList } from "@/components/task-list"
import { InvestmentSummary } from "@/components/investment-summary"
import { AddTaskButton } from "@/components/add-task-button"
import { DashboardHeader } from "@/components/dashboard-header"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Your Tasks</h2>
              <AddTaskButton />
            </div>
            <TaskList />
          </div>
          <div>
            <InvestmentSummary />
          </div>
        </div>
      </main>
    </div>
  )
}
