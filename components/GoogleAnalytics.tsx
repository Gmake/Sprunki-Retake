'use client';

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()
    // @ts-ignore
    window.gtag('config', 'G-V4PMNM5WS7', {
      page_path: url,
    })
  }, [pathname, searchParams])

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-V4PMNM5WS7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-V4PMNM5WS7');
        `}
      </Script>
    </>
  )
} 