import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs"
import { HabitContributionPanel } from "@/components/habit-contribution-panel"
import { AddHabitButton } from "@/components/add-habit-button"

// Temporary in-memory habits data
const habits = [
  {
    id: "1",
    name: "Morning Exercise",
    description: "30 minutes of exercise every morning",
    createdAt: new Date(),
    completedDates: ["2024-03-20", "2024-03-21", "2024-03-22"],
  },
  {
    id: "2",
    name: "Read 30 Minutes",
    description: "Read for 30 minutes before bed",
    createdAt: new Date(),
    completedDates: ["2024-03-20", "2024-03-22"],
  },
  {
    id: "3",
    name: "Meditate",
    description: "10 minutes of meditation",
    createdAt: new Date(),
    completedDates: ["2024-03-21", "2024-03-22"],
  },
]

export default function HabitsPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Your Habits</h1>
        <SignedIn>
          <AddHabitButton />
        </SignedIn>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {habits.map((habit) => (
          <HabitContributionPanel key={habit.id} habit={habit} />
        ))}
      </div>
    </div>
  )
} 