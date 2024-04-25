'use client'

import PieceCard from './piece-card';
import data from '../app/content/case-studies.json'

  export default function PieceCardGrid(){
    
    return(
        <div className='flex flex-row justify-start flex-wrap gap-[1rem] m-auto'>
          {data.map((piece, index) => 
              <PieceCard key={index} {...piece.cardProps}/>
          )}
        </div>
    )
  }