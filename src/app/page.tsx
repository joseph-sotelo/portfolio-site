'use client'

import PieceCardGrid from '../components/piece-card-grid';
import ContextMenu from '@/components/context-menu';
import MobileMenu from '@/components/mobile-menu';

const contextMenu = {
  props: {
    header: 'My Work',
    subHeader: [
      'Joey Sotelo',
      'Design Technologist'],
  }
}

export default function Work(){

  var scrollHeight = 5000;

  if (typeof document !== 'undefined') {
      scrollHeight = document.documentElement.scrollHeight;
  }

  return(
    <div className='m-auto w-[90vw] sm:w-full sm:m-0 sm:flex justify-evenly'>
      <div className='sm:hidden'>
        <MobileMenu props={contextMenu.props}></MobileMenu>
      </div>
      <div className={`hidden sm:block sm:w-[30vw] lg:w-[15vw] min-w-[217px] h-[${scrollHeight}] relative`}>
        <div id='context-menu-wrapper' className='sticky top-0 right-0 min-w-[217px] h-screen'>
         <ContextMenu props={contextMenu.props} isInvisible={true} hideTitleAtStart={false}></ContextMenu>
        </div>
      </div>
      <div className='mt-16 mb-24 sm:w-[60vw] lg:w-[75vw] sm:mt-12 grow-0'>
        <div id="card-grid">
          <PieceCardGrid />
        </div>
      </div>
    </div>
  )
}