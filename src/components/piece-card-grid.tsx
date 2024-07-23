'use client'

import PieceCard from './piece-card';
import data from '../app/content/case-studies.json'

  export default function PieceCardGrid(){

    var cardCount = data.length;
    
    return(
        <div className='grid grid-cols-8 2xl:grid-cols-10 gap-6'>
            {data.map((piece, index) => 
              <div id='piece-card-wrapper' className='col-span-8 md:col-span-7 lg:col-span-4 2xl:col-span-3'>
                <PieceCard key={index} {...piece.cardProps}/>
              </div>
            )}
        </div>
    )
  }