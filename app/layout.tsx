import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

import ClientLayout from "../app/ClientLayout"

export const metadata: Metadata = {
  title: "Eagle Eye Technology - Advanced Security Solutions",
  description: "Professional security solutions with 24/7 monitoring, AI-powered detection, and expert installation.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans">
        {/* <Suspense fallback={null}>{children}</Suspense> */}
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  )
}
