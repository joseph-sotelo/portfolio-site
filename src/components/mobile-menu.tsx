import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import ContextMenu from '@/components/context-menu';

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
        <SheetTrigger>
            Open
        </SheetTrigger>
        <SheetContent side='left' className='w-[250px]'>
           <ContextMenu props={props} ></ContextMenu>
        </SheetContent>
      </Sheet>
    </>
  )
}