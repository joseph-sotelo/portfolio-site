'use client'

import StaticMenu from '@/components/static-menu';
import { StaticMenuContext } from '@/app/data/static-menu-context';

import { useState, useEffect } from 'react';

export function MainLayout({
  children,
}: {
  children: React.ReactNode
}){

    const [isOffScreen, setIsOffScreen] = useState(false);
    const value = {isOffScreen, setIsOffScreen};

    return(
        <div id='layout-grid' className='md:grid md:grid-cols-12 gap-standard-gap mx-standard-gap lg:gap-medium-gap lg:mx-medium-gap max-w-[1400px] 2xl:mx-auto'>
          <StaticMenuContext.Provider value={value}>
            <div id='static-menu-wrapper' className='sticky top-0 z-20 md:h-screen md:col-span-3 xl:col-start-1'>
              <StaticMenu />
            </div>
            <div id='content' className='my-big-gap mx-auto max-w-[500px] md:ml-0 md:max-w-full md:col-span-9 md:mt-medium-gap lg:col-span-8 xl:col-span-9'>
              {children}
            </div> 
          </StaticMenuContext.Provider>
      </div>
    )
}