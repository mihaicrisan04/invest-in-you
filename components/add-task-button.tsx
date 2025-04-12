"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { TaskDialog } from "@/components/task-dialog"

export function AddTaskButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} className="bg-green-600 hover:bg-green-700">
        <Plus className="mr-2 h-4 w-4" /> Add Task
      </Button>
      <TaskDialog open={open} onOpenChange={setOpen} />
    </>
  )
}
