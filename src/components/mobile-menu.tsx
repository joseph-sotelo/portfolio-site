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
        <SheetTrigger className='h-12 fixed flex justify-between items-center left-[-1px] top-[-1px] w-[102vw] bg-card border border-border shadow-md'>
            <HamburgerMenuIcon className='h-6 w-6 ml-[5vw]' />
            <h6 className='mr-[7vw]'>
              {props.header}
            </h6>
        </SheetTrigger>
        <SheetContent side='left' className='w-[250px]'>
           <ContextMenu props={props} isInvisible={true} hideTitleAtStart={false}></ContextMenu>
        </SheetContent>
      </Sheet>
    </>
  )
}