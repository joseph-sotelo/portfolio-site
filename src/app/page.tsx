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

  const scrollHeight = document.documentElement.scrollHeight;

  return(
    <div className='m-auto w-[90vw] sm:w-full sm:m-0 sm:flex justify-evenly'>
      <div className='sm:hidden'>
        <MobileMenu props={contextMenu.props}></MobileMenu>
      </div>
      <div className={`hidden sm:block sm:w-[30vw] lg:w-[15vw] min-w-[217px] h-[${scrollHeight}] relative`}>
        <div id='context-menu-wrapper' className='sticky top-0 right-0 min-w-[217px] h-screen'>
         <ContextMenu props={contextMenu.props}></ContextMenu>
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

// export default function Work(){
//   return(
//     <div className='flex flex-row gap-14 w-[88vw] mx-auto'>
//       <div className='sm:hidden z-10'>
//         <MobileMenu props={contextMenu.props}></MobileMenu>
//       </div>
//       <div className='hidden sm:block w-[217px] h-screen'>
//         <ContextMenu props={contextMenu.props}></ContextMenu>
//       </div>
//       <div className='w-[67vw] mt-12 mb-24'>
//         <div id="card-grid">
//           <PieceCardGrid />
//         </div>
//       </div>
//     </div>
//   )
// }