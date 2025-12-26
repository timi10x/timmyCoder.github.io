import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'timi10x | Software Engineer',
  description: 'Software engineer with over a decade of experience in building and scaling technologies. Currently at Footlocker, previously built fintech products serving 2M+ users. Let\'s build something amazing together.',
  keywords: ['Software Engineer', 'Android', 'Kotlin', 'KMM', 'Jetpack Compose', 'Fintech', 'Mobile Development', 'Dallas'],
  authors: [{ name: 'Timilehin Olatoye' }],
  openGraph: {
    title: 'timi10x | Software Engineer',
    description: 'Software engineer with over a decade of experience building and scaling technologies for millions of users.',
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
      <body>
        {children}
      </body>
    </html>
  )
}
