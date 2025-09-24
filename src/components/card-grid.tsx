'use client'

import PieceCard from './piece-card';
import data from '../app/data/case-studies.json'

export default function CardGrid(){

  var sections = Object.values(data);
  
  return(
    <div className='grid gap-medium-gap xl:grid-cols-9'>        
      <h2 className='text-secondary-foreground mt-3 mb-6 xl:col-span-9'>
          Professional Work
      </h2>
        {sections.map((section, index) => 
          index < 1 ? (
            <div key={index} id='piece-card-wrapper' className='xl:col-span-4'>
              <PieceCard {...section.caseStudyCardProps}/>
            </div>
          ) : null
        )}
        
        {sections.length >= 1 && (
          <h2 className='text-secondary-foreground my-standard-gap xl:col-span-9'>
            Academic Projects
          </h2>
        )}
        
        {sections.map((section, index) => 
          index >= 1 && index < 7 ? (
            <div key={index} id='piece-card-wrapper' className='xl:col-span-4'>
              <PieceCard {...section.caseStudyCardProps}/>
            </div>
          ) : null
        )}
    </div>
  )
}