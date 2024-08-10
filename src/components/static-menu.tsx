import MobileMenu from "./mobile-menu";
import InfoMenu from "./info-menu";

import { usePathname } from 'next/navigation';
import { InfoMenuType, GlobalPageKeyType } from "./component-types";

import data from '@/app/data/context-menu.json';

export default function StaticMenu(){

    // get data for the static menu
    let currentPathname = usePathname();
    const currentPage = currentPathname.slice(currentPathname.lastIndexOf('/') + 1, currentPathname.length) as GlobalPageKeyType;
    const staticMenuData = data[currentPage] as InfoMenuType;

    return(
        <div id='static-menu'>
            <div className='md:hidden'> 
                <MobileMenu props={staticMenuData}/>
            </div>
            <div id='context-menu-wrapper' className='hidden md:block h-full'>
                <InfoMenu props={staticMenuData}/>
            </div>
      </div>
    )
}