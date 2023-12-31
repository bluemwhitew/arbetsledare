import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arbetsledare',
  description: 'Your virtual ticket-creating assistant'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
