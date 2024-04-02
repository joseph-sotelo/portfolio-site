'use client'

import PieceCardGrid from './ui/piece-card-grid';

export default function Work(){
  return(
    <div className='mt-[1rem]'>
      <h1 className='w-3/5 ml-auto mr-auto mb-[1rem]'>
          Work
      </h1>
      <div id="card-grid">
        <PieceCardGrid />
      </div>
    </div>
  )
}