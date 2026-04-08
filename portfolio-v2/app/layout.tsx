import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'timi10x | Software Engineer',
  description: 'Software engineer with over a decade of experience in building and scaling technologies. Currently at Footlocker, previously built fintech products serving 2M+ users. Let\'s build something amazing together.',
  keywords: ['Software Engineer', 'Android', 'Kotlin', 'KMM', 'Jetpack Compose', 'Fintech', 'Mobile Development', 'Dallas'],
  authors: [{ name: 'Timilehin Olatoye' }],
  openGraph: {
    title: 'timi10x | Software Engineer',
    description: 'I build software that scales to millions.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'timi10x — I build software that scales to millions.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'timi10x | Software Engineer',
    description: 'I build software that scales to millions.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Umami Analytics — privacy-friendly, no cookies, GDPR compliant */}
        {/* Replace WEBSITE_ID and UMAMI_URL with your actual values after setup */}
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="630b5be4-9e82-48db-9b04-2250e4424e37"
        />
      </body>
    </html>
  )
}
