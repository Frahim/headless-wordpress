import type { Metadata } from 'next'

import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Script from 'next/script';
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Playfair_Display } from "next/font/google";
const inter = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Global Life',
  description: 'headless wordpress with nextjs ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Header/>
        {children}
        <Footer/>
        </body>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>
    </html>
  )
}
