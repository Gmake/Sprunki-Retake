import React from 'react'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://sprunki-retake.cc'),
  title: 'Sprunkiretake：horror-themed music creation adventure game｜sprunki-retake.cc',
  description: 'Play Sprunki Retake Online For Free.Experience a unique horror-themed music creation adventure playground. Create, explore, and share your musical journey in an immersive horror environment.',
  keywords: [
    'Sprunki retake',
    'music game',
    'horror game',
    'sprunki game',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/image/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Sprunkiretake - Horror Music Creation Adventure',
    description: 'Create unique musical compositions in a horror-themed adventure playground',
    type: 'website',
    locale: 'en_US',
    url: 'https://sprunki-retake.cc',
  },
  alternates: {
    canonical: 'https://sprunki-retake.cc'
  }
}

export const redirects = () => {
  return [
    {
      source: '/home',
      destination: '/',
      permanent: true,
    },
    {
      source: '/index',
      destination: '/',
      permanent: true,
    },
    {
      source: '/:path+/',
      destination: '/:path+',
      permanent: true,
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://sprunki-retake.cc" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
} 