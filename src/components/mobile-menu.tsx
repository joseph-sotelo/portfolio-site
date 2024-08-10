'use client'

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import InfoMenu from '@/components/info-menu';
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { InfoMenuType } from "./component-types";

export default function MobileMenu({props}: {props: InfoMenuType}){
  return(
    <>
      <Sheet>
        <div id='top-bar' className='h-12 top-0 left-0 px-6 fixed z-20 w-full bg-card shadow-md'>
          <div className='h-full'>
            <div className='flex justify-between items-center max-w-[500px] h-full mx-auto'>
              <SheetTrigger>
                  <HamburgerMenuIcon className='h-6 w-6' />
              </SheetTrigger>
              <h6>
                <strong>
                  {props.header}
                </strong>
              </h6>
            </div>
          </div>
        </div>
        <SheetContent side='left' className='px-4 pt-4'>
           <InfoMenu props={props}></InfoMenu>
        </SheetContent>
      </Sheet>
    </>
  )
}