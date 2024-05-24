'use client'
import ContextMenu from '@/components/context-menu';
import MobileMenu from '@/components/mobile-menu';

import data from '@/app/content/case-studies-no-insights.json'

const other = data[1];
const sections = other.sections;
const sectionsLength = sections.length -1;
const contextMenu = other.contextMenuData;
var scrollHeight = 5000;

if (typeof document !== 'undefined') {
    scrollHeight = document.documentElement.scrollHeight;
}

export default function Page(){
        
        return(
            <div className='m-auto w-[90vw] sm:w-full sm:m-0 sm:flex justify-evenly'>
                <div className='sm:hidden z-10'>
                    <MobileMenu props={contextMenu.props}></MobileMenu>
                </div>
                <div className={`hidden sm:block sm:w-[30vw] lg:w-[15vw] min-w-[217px] h-[${scrollHeight}] relative`}>
                    <div id='context-menu-wrapper' className='sticky top-0 right-0 min-w-[217px] h-screen'>
                        <ContextMenu props={contextMenu.props}></ContextMenu>
                    </div>
                </div>
                <div className='mt-16 xl:mt-12 sm:w-[60vw] lg:w-[75vw] sm:mt-12 grow-0 z-9'>
                    <h1 className='opacity-20 mx-auto mt-[21vh] text-center'>
                        gallery incoming
                    </h1>
                </div>
            </div>
        )
}