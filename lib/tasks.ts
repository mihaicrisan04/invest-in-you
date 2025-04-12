import type { Task } from "./types"

// This is a temporary solution using localStorage
// In a real app, this would be replaced with a database

const TASKS_STORAGE_KEY = "iiy-tasks"

export function getTasks(): Task[] {
  if (typeof window === "undefined") return []

  const tasksJson = localStorage.getItem(TASKS_STORAGE_KEY)
  return tasksJson ? JSON.parse(tasksJson) : []
}

export function addTask(task: Task): void {
  if (typeof window === "undefined") return

  const tasks = getTasks()
  tasks.push(task)
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks))
}

export function updateTask(updatedTask: Task): void {
  if (typeof window === "undefined") return

  const tasks = getTasks()
  const index = tasks.findIndex((task) => task.id === updatedTask.id)

  if (index !== -1) {
    tasks[index] = updatedTask
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks))
  }
}

export function deleteTask(taskId: string): void {
  if (typeof window === "undefined") return

  const tasks = getTasks()
  const filteredTasks = tasks.filter((task) => task.id !== taskId)
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(filteredTasks))
}
