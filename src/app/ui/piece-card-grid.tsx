'use client'

import PieceCard from './piece-card';

  export default function PieceCardGrid(){
    const PortfolioPieces = [
        {name: 'Articipate', image: '/../../../work/articipate/articipate-cover.png', page: '/work/articipate', labels: ['UX/UI', 'Mobile Design', 'User Interviews']},
        {name: 'Discover Olvera', image: '/../../../work/discover-olvera/discover-olvera-cover.png', page: '/work/discover-olvera',  labels: ['UX/UI', 'Logo Design', 'Ethnography']},
        {name: 'Jackson Market Redesign', image: '/../../../work/jackson-market/jackson-market-cover.png', page: '/work/jackson-market',  labels: ['UX/UI', 'Web Design', 'html/css/js', 'competetive analysis']},
        {name: 'Stories Move People', image: '/../../../work/stories-move-people/stories-move-people-cover.png', page: '/work/stories-move-people',  labels: ['UX/UI', 'Branding', 'Product Design', 'Social Media']},
        {name: 'Other Stuff I Do', image: '/../../../work/other/other-cover.png', page: '/work/other',  labels: ['Typography', 'Book Illustration', 'Digital Art', 'Analog Art']},
      ]
    
    return(
        <div className='flex flex-row items-start flex-wrap gap-[20px] w-3/5 m-auto'>
          {PortfolioPieces.map((piece, index) => 
              <PieceCard key={index} {...piece}  />
          )}
        </div>
    )
  }