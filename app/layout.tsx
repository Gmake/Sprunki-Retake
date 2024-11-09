import React from 'react'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sprunkiretake：horror-themed music creation adventure game｜sprunki-retake.cc',
  description: 'Experience a unique horror-themed music creation adventure playground. Create, explore, and share your musical journey in an immersive horror environment.',
  keywords: [
    'Sprunki retake',
    'music game',
  ],
  openGraph: {
    title: 'Sprunkiretake - Horror Music Creation Adventure',
    description: 'Create unique musical compositions in a horror-themed adventure playground',
    type: 'website',
    locale: 'en_US',
    url: 'https://sprunki-retake.cc',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
} 