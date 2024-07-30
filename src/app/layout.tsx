import type { Metadata } from 'next'
import { Roboto_Mono as FontSans } from 'next/font/google'
import { Inter as SecondaryFont } from 'next/font/google'
import './globals.css'
import SubLayout from './sub-layout'

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

  var scrollHeight = 5000;

  if (typeof document !== 'undefined') {
      scrollHeight = document.documentElement.scrollHeight;
  }

  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <SubLayout children={children}>

          </SubLayout>
      </body>
    </html>
  )
}
