"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { format, subDays } from "date-fns"
import { MoreHorizontal, Settings } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface Habit {
  id: string
  name: string
  description: string
  createdAt: Date
  completedDates: string[]
  reminderEnabled?: boolean
  reminderTime?: string
  isArchived?: boolean
}

interface HabitContributionPanelProps {
  habit: Habit
}

export function HabitContributionPanel({ habit }: HabitContributionPanelProps) {
  const { toast } = useToast()
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [habitSettings, setHabitSettings] = useState({
    reminderEnabled: habit.reminderEnabled || false,
    reminderTime: habit.reminderTime || "09:00",
    isArchived: habit.isArchived || false,
  })

  // Generate the last 30 days
  const last30Days = Array.from({ length: 30 }, (_, i) => {
    const date = subDays(new Date(), i)
    return format(date, "yyyy-MM-dd")
  }).reverse()

  const handleCheckIn = () => {
    const today = format(new Date(), "yyyy-MM-dd")
    toast({
      title: "Checked in!",
      description: `You've checked in for ${habit.name} today.`,
    })
  }

  const handleSettingsSave = () => {
    // In a real app, this would save to a database
    toast({
      title: "Settings saved",
      description: "Your habit settings have been updated.",
    })
    setIsSettingsOpen(false)
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg">{habit.name}</CardTitle>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleCheckIn}
            className="px-3"
          >
            Check in
          </Button>
          <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Habit Settings</DialogTitle>
                <DialogDescription>
                  Customize your habit tracking preferences
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="reminder">Daily Reminder</Label>
                  <Switch
                    id="reminder"
                    checked={habitSettings.reminderEnabled}
                    onCheckedChange={(checked) =>
                      setHabitSettings((prev) => ({ ...prev, reminderEnabled: checked }))
                    }
                  />
                </div>
                {habitSettings.reminderEnabled && (
                  <div className="grid gap-2">
                    <Label htmlFor="reminderTime">Reminder Time</Label>
                    <input
                      type="time"
                      id="reminderTime"
                      value={habitSettings.reminderTime}
                      onChange={(e) =>
                        setHabitSettings((prev) => ({ ...prev, reminderTime: e.target.value }))
                      }
                      className="border rounded p-2"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <Label htmlFor="archive">Archive Habit</Label>
                  <Switch
                    id="archive"
                    checked={habitSettings.isArchived}
                    onCheckedChange={(checked) =>
                      setHabitSettings((prev) => ({ ...prev, isArchived: checked }))
                    }
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleSettingsSave}>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-4">{habit.description}</p>
        <div className="grid grid-cols-10 gap-1">
          {last30Days.map((date) => {
            const isCompleted = habit.completedDates.includes(date)
            return (
              <div
                key={date}
                className={`w-4 h-4 rounded-sm ${
                  isCompleted ? "bg-green-500" : "bg-gray-200"
                } hover:opacity-75 transition-opacity`}
                title={`${format(new Date(date), "MMM d, yyyy")}: ${
                  isCompleted ? "Completed" : "Not completed"
                }`}
              />
            )
          })}
        </div>
        <div className="mt-2 text-xs text-gray-500 flex justify-between">
          <span>30 days ago</span>
          <span>Today</span>
        </div>
      </CardContent>
    </Card>
  )
} 