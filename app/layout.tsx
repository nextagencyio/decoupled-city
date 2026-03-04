import './globals.css'
import ApolloProvider from './components/providers/ApolloProvider'
// DEMO MODE: Remove this import and <DemoModeBanner /> below for production-only builds
import { DemoModeBanner } from './components/DemoModeBanner'
import { Viewport, type Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['400', '500', '700'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, '')
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  const port = process.env.PORT || '3000'
  const host = process.env.HOST || 'localhost'
  return `http://${host}:${port}`
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'City of Maplewood',
    template: `%s | City of Maplewood`
  },
  description: 'The City of Maplewood is committed to providing high-quality services, maintaining safe neighborhoods, and fostering a vibrant community for all residents.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-sans bg-white text-gray-900 antialiased">
        <DemoModeBanner />
        <ApolloProvider>
          {children}
        </ApolloProvider>
      </body>
    </html>
  )
}
