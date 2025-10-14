import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'timi10x | Mobile Engineer',
  description: 'Mobile Engineer building financial products people trust',
  keywords: ['Mobile Engineer', 'Android', 'iOS', 'Kotlin', 'SwiftUI', 'Fintech', 'Portfolio'],
  authors: [{ name: 'timi10x' }],
  openGraph: {
    title: 'timi10x | Mobile Engineer',
    description: 'Mobile Engineer building financial products people trust',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
