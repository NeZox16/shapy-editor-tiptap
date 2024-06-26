import './globals.css'
import type { Metadata } from 'next'

import 'cal-sans'
import { Header } from '@/src/components/Header/Header'
import { Sidebar } from '@/src/components/Sidebar'

export const metadata: Metadata = {
  metadataBase: new URL('https://demos.tiptap.dev'),
  title: 'Tiptap block editor template',
  description:
    'Tiptap is a suite of open source content editing and real-time collaboration tools for developers building apps like Notion or Google Docs.',
  robots: 'noindex, nofollow',
  icons: [{ url: '/favicon.svg' }],
  twitter: {
    card: 'summary_large_image',
    site: '@tiptap_editor',
    creator: '@tiptap_editor',
  },
  openGraph: {
    title: 'Tiptap block editor template',
    description:
      'Tiptap is a suite of open source content editing and real-time collaboration tools for developers building apps like Notion or Google Docs.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full font-sans" lang="en">
      <body className="flex flex-col h-full">
        <Header/>
        <main className="h-full">{children}</main>
      </body>
    </html>
  )
}
