'use client'

import PieceCard from './piece-card';
import data from '../app/content/case-studies.json'
import data2 from '../app/content/case-studies-no-insights.json'

  export default function PieceCardGrid(){
    
    return(
        <div className='flex flex-col justify-start flex-wrap gap-[1rem] sm:flex-row items-center'>
          {data.map((piece, index) => 
              <PieceCard key={index} {...piece.cardProps}/>
          )}
                    {data2.map((piece, index) => 
              <PieceCard key={index} {...piece.cardProps}/>
          )}
        </div>
    )
  }