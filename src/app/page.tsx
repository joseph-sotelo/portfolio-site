'use client'

import PieceCardGrid from '../components/piece-card-grid';
import ContextMenu from '@/components/context-menu';

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
      <div className='w-[13.2vw] h-screen'>
        <ContextMenu props={contextMenu.props}></ContextMenu>
      </div>
      <div className='w-[67vw] mt-[3rem] mb-24'>
        <div id="card-grid">
          <PieceCardGrid />
        </div>
      </div>
    </div>
  )
}