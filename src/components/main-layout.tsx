'use client'

import StaticMenu from '@/components/static-menu';
import MobileMenu from '@/components/mobile-menu';
import { StaticMenuContext } from '@/app/data/static-menu-context';

import { useState, useEffect } from 'react';

interface MainContent {
  mainContent: React.ReactNode;
}

export function MainLayout({mainContent}: MainContent){

    const [isOffScreen, setIsOffScreen] = useState(false);
    const value = {isOffScreen, setIsOffScreen};

    return(
        <div id='layout-grid' className='sm:grid  sm:grid-cols-12 gap-6 mx-6'>
          <StaticMenuContext.Provider value={value}>
            <div id='static-menu' className='sm:col-span-4 lg:col-span-3 xl:col-span-2 xl:col-start-2 2xl:col-span-2'>
              <div className='sm:hidden'> 
                <MobileMenu ></MobileMenu>
              </div>
              <div id='context-menu-wrapper' className='hidden sm:block h-full'>
                  <StaticMenu></StaticMenu>
              </div>
            </div>
            <div id='content' className='mr-auto ml-auto max-w-[373px] sm:ml-0 sm:max-w-full sm:col-span-8 2xl:col-span-10'> 
              {mainContent}
            </div> 
          </StaticMenuContext.Provider>
      </div>
    )
}