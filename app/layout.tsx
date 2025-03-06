import "./globals.css"
import { Space_Grotesk } from "next/font/google"
import Header from "./components/Header"
import type React from "react"
import type { Metadata } from "next"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const description =
  "Crypto Assassin is an all-in-one hub for crypto enthusiasts and investors, offering in-depth news, insightful analysis, project videos, and curated articles. The site delivers comprehensive market insights and actionable reviews to empower your crypto journey."

export const metadata: Metadata = {
  title: "CRYPTO ASSASSIN",
  description,
  metadataBase: new URL("https://cryptoassassin.xyz"),
  openGraph: {
    title: "Crypto Assassin",
    description,
    url: "https://cryptoassassin.xyz",
    siteName: "Crypto Assassin",
    images: [
      {
        url: "/pre-og-image.png", // This will serve the static image from public directory
        width: 1200,
        height: 630,
        alt: "Crypto Assassin Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Assassin",
    description,
    creator: "@MCAssassin02",
    images: [
      {
        url: "/pre-og-image.png", // This will serve the static image from public directory
        width: 1200,
        height: 630,
        alt: "Crypto Assassin Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.className} min-h-screen`}>
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}



import './globals.css'