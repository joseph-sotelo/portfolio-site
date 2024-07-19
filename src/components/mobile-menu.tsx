import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import ContextMenu from '@/components/context-menu';
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

type ContextMenu = {
  header: string,  
  subHeader: string[],  
  mainText?: string, 
  links?: string[][]
}

export default function MobileMenu({props}: {props: ContextMenu}){
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
                  {props.header}
                </strong>
              </h6>
            </div>
          </div>
        </div>
        <SheetContent side='left' className='w-2/3 px-4 pt-4'>
           <ContextMenu props={props} isInvisible={true} hideTitleAtStart={false}></ContextMenu>
        </SheetContent>
      </Sheet>
    </>
  )
}