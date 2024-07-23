import type { Metadata } from 'next'
import { Roboto_Mono as FontSans } from 'next/font/google'
import { Inter as SecondaryFont } from 'next/font/google'
import './globals.css'

import ContextMenu from '@/components/context-menu';
import MobileMenu from '@/components/mobile-menu';

import data from '@/app/content/context-menu.json';

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

  const contextMenuData = data.work;

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
      <div id='layout-grid' className='sm:grid  sm:grid-cols-12 gap-6 mx-6'>
        <div id='static-menu' className='sm:col-span-4 lg:col-span-3 xl:col-span-2 xl:col-start-2 2xl:col-span-2'>
          <div className='sm:hidden'>
            <MobileMenu props={contextMenuData.props}></MobileMenu>
          </div>
          <div id='context-menu-wrapper' className='hidden sm:block h-full'>
              <ContextMenu props={contextMenuData.props} isInvisible={true} hideTitleAtStart={false}></ContextMenu>
          </div>
        </div>
        <div id='content' className='mr-auto ml-auto max-w-[373px] sm:ml-0 sm:max-w-full sm:col-span-8 2xl:col-span-10'> 
            {children}
        </div>
      </div>
      </body>
    </html>
  )
}
