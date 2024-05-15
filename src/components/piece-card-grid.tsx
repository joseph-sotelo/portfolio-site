'use client'

import PieceCard from './piece-card';
import data from '../app/content/case-studies.json'

  export default function PieceCardGrid(){
    
    return(
        <div className='flex flex-col justify-start flex-wrap gap-[1rem] sm:flex-row items-center'>
          {data.map((piece, index) => 
              <PieceCard key={index} {...piece.cardProps}/>
          )}
        </div>
    )
  }