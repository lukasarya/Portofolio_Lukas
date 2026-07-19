import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'

export const metadata: Metadata = {
  title: 'Lukas Raden Arya Jatayu | Portfolio',
  description: 'Portfolio Lukas Raden Arya Jatayu - Web Developer, Mobile Developer, UI/UX Designer, Data Analyst',
  keywords: ['portfolio', 'developer', 'laravel', 'flutter', 'ui/ux', 'fullstack', 'data analyst'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}