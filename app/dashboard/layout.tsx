import { SignedIn, UserButton } from "@clerk/nextjs"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-4">  
        <SignedIn>
          <UserButton />
      </SignedIn>
    </header>
      <div className="flex-1 flex flex-col overflow-y-auto">
        {children}
      </div>
    </div>
  )
}   