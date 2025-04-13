import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-2 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Invest In You. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="hover:text-green-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-green-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 