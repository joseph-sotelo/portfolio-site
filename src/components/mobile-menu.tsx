'use client'

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import StaticMenu from '@/components/static-menu';
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function MobileMenu(){
  return(
    <>
      <Sheet>
        <div id='top-bar' className='h-12 top-0 left-0 px-6 fixed w-full bg-card shadow-md'>
          <div className='h-full'>
            <div className='flex justify-between items-center max-w-[373px] h-full mx-auto'>
              <SheetTrigger>
                  <HamburgerMenuIcon className='h-6 w-6' />
              </SheetTrigger>
              <h6>
                <strong>
                  Header
                </strong>
              </h6>
            </div>
          </div>
        </div>
        <SheetContent side='left' className='w-2/3 px-4 pt-4'>
           <StaticMenu></StaticMenu>
        </SheetContent>
      </Sheet>
    </>
  )
}