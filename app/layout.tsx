import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shamal Technologies | Drone & Geospatial Services Saudi Arabia",
  description:
    "Leading provider of drone and geospatial services in Saudi Arabia. High-accuracy mapping, real-time analytics, and comprehensive geospatial intelligence.",
  keywords: "drone services, geospatial, aerial survey, Saudi Arabia, construction monitoring, GIS, remote sensing",
  icons: {
    icon: "/assets/favicon.svg",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" />
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
