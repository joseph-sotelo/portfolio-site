'use client'

import PieceCardGrid from '../components/piece-card-grid';
import ContextMenu from '@/components/context-menu';

const contextMenu = {
  props: {
    header: 'My Work',
    subHeader: 'Joey Sotelo',
    mainText: 'Design Technologist'
  }
}

export default function Work(){
  return(
    <div className='flex flex-row gap-[3.5rem] w-[88vw] mx-auto'>
      <div className='w-[15vw] h-screen'>
        <ContextMenu props={contextMenu.props}></ContextMenu>
      </div>
      <div className='w-[67vw] mt-[3rem]'>
        <div id="card-grid">
          <PieceCardGrid />
        </div>
      </div>
    </div>
  )
}