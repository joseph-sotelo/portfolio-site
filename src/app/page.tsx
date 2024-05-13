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
  return(
    <div className='flex flex-row gap-14 w-[88vw] mx-auto'>
      <div className='sm:hidden'>
        <MobileMenu props={contextMenu.props}></MobileMenu>
      </div>
      <div className='hidden sm:block w-[217px] h-screen'>
        <ContextMenu props={contextMenu.props}></ContextMenu>
      </div>
      <div className='w-[67vw] mt-12 mb-24'>
        <div id="card-grid">
          <PieceCardGrid />
        </div>
      </div>
    </div>
  )
}