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
        <div id='layout-grid' className='md:grid  md:grid-cols-12 gap-6 mx-6'>
          <StaticMenuContext.Provider value={value}>
            <StaticMenu />
            <div id='content' className='mt-12 md:mt-0 mx-auto max-w-[373px] md:ml-0 md:w-full md:col-span-8 2xl:col-span-10'> 
              {children}
            </div> 
          </StaticMenuContext.Provider>
      </div>
    )
}