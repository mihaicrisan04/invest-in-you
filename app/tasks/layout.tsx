import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { PiggyBank } from "lucide-react"
import Link from "next/link"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col">
      <div className="container mx-auto px-4 py-4 flex-1">
        <header className="flex justify-end m-4">
          <div className="flex w-full justify-between items-center">
            <Link href="/" className="flex items-center gap-2 text-green-700 font-semibold">
              <PiggyBank className="h-5 w-5" />
              <span>Invest In You</span>
            </Link>
          </div>

          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex gap-4">
              <SignInButton mode="modal">
                <Button variant="outline">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button>Sign Up</Button>
              </SignUpButton>
            </div>
          </SignedOut>
        </header>
        {children}
      </div>

      <Footer />
    </div>
  )
}   