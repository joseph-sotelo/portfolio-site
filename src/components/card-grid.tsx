'use client'

import PieceCard from './piece-card';
import data from '../app/data/case-studies.json'

  export default function CardGrid(){

    var sections = Object.values(data);
    
    return(
        <div className='grid gap-medium-gap xl:grid-cols-9'>
            {sections.map((section, index) => 
              index < 6 ? (
                <div key={index} id='piece-card-wrapper' className='xl:col-span-4'>
                  <PieceCard {...section.caseStudyCardProps}/>
                </div>
              ) : null
            )}
        </div>
    )
  }