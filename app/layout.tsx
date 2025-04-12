import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from "@/components/clerk-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Invest In You",
  description: "Invest in your future by completing tasks",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}


import './globals.css'