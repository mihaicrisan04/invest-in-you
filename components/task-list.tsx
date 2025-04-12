"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { formatCurrency } from "@/lib/utils"
import type { Task } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"
import { getTasks, updateTask } from "@/lib/tasks"

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const { toast } = useToast()

  useEffect(() => {
    setTasks(getTasks())
  }, [])

  const handleTaskComplete = (taskId: string, completed: boolean) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const updatedTask = { ...task, completed }
        updateTask(updatedTask)

        if (completed) {
          toast({
            title: "Task Completed!",
            description: "Great job investing in yourself!",
            variant: "default",
          })
        } else if (!completed && task.completed) {
          toast({
            title: `Investment Made: ${formatCurrency(task.amount)}`,
            description: "This amount has been invested in your future.",
            variant: "default",
          })
        }

        return updatedTask
      }
      return task
    })

    setTasks(updatedTasks)
  }

  if (tasks.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-gray-500">No tasks yet. Add a task to get started!</CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Card key={task.id} className={task.completed ? "border-green-200 bg-green-50" : ""}>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 pt-1">
                <Checkbox
                  id={`task-${task.id}`}
                  checked={task.completed}
                  onCheckedChange={(checked) => handleTaskComplete(task.id, checked as boolean)}
                />
                <div className="space-y-1">
                  <label
                    htmlFor={`task-${task.id}`}
                    className={`font-medium ${task.completed ? "line-through text-gray-500" : ""}`}
                  >
                    {task.title}
                  </label>
                  <p className="text-sm text-gray-500">{task.description}</p>
                  <div className="flex items-center space-x-2 pt-1">
                    <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                      {formatCurrency(task.amount)}
                    </Badge>
                    {task.dueDate && (
                      <Badge variant="outline">Due: {new Date(task.dueDate).toLocaleDateString()}</Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
