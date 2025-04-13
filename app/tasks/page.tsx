import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs"
import { TaskList } from "@/components/task-list"
import { AddTaskButton } from "@/components/add-task-button"

export default function TasksPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Your Tasks</h1>
          <SignedIn>
            <AddTaskButton />
          </SignedIn>
      </div>
      <TaskList />
    </div>
  )
}
