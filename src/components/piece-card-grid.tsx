'use client'

import PieceCard from './piece-card';
import data from '../app/data/case-studies.json'

  export default function PieceCardGrid(){

    var sections = Object.values(data);
    
    return(
        <div className='grid grid-cols-8 2xl:grid-cols-10 gap-6'>
            {sections.map((section, index) => 
              <div key={index} id='piece-card-wrapper' className='col-span-8 md:col-span-7 lg:col-span-4 2xl:col-span-3'>
                <PieceCard {...section.caseStudyCardProps}/>
              </div>
            )}
        </div>
    )
  }