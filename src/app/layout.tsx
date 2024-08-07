import type { Metadata } from 'next'
import { Roboto_Mono as FontSans } from 'next/font/google'
import { Inter as SecondaryFont } from 'next/font/google'
import './globals.css'

import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const secondaryFont = SecondaryFont({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--secondary-font'
})

export const metadata: Metadata = {
  title: 'Joey Sotelo\'s Portfolio',
  description: 'A portfolio website displaying Joey\'s work as a designer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <div className='flex items-center'>
          {children}
        </div>
      </body>
    </html>
  )
}
