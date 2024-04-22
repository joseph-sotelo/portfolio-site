'use client'

import PieceCardGrid from '../components/piece-card-grid';

export default function Work(){
  return(
    <div className='w-[75vw] m-auto'>
      <h1 className='mb-[1rem]'>
          Work
      </h1>
      <div id="card-grid">
        <PieceCardGrid />
      </div>
    </div>
  )
}