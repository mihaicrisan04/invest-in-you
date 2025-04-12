"use client"

import { Button } from "@/components/ui/button"
import { UserButton } from "@/components/user-button"
import Link from "next/link"
import { PiggyBank } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <PiggyBank className="h-6 w-6 text-green-600" />
            <span className="font-bold text-xl text-green-700">Invest In You</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/investments">View Investments</Link>
            </Button>
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  )
}
