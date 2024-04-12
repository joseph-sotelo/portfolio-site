'use client'

import CaseStudyHero from '@/components/case-study/case-study-hero';
import Overview from '@/components/case-study/case-study-overview';
import CaseStudySection from '@/components/case-study/case-study-section';

const discoverOlveraData = {
    hero: {
        title: 'Discover Olvera',
        tagline: 'An impactful mobile app that aims to increase foot traffic at Olvera street by gamifying the visitor experience using AR.',
        occasion: 'IxD Studio 1 // Fall 2023',
        image: '/../../work/discover-olvera/discover-olvera-cover.png'
    },
    overview: {
        challenge: 'Olvera Street\'s businesses are suffering due to a lingering, pandemic-enduced drop in foot traffic',
        process: 'Ethnography, Netnography, Prototype, Test, Refine',
        role: 'Design Research, Branding, UX Design',
    },
    observations: {
        sectionHeader: 'Ethnography: Observations',
        bullets: [
            'Six shops and one popular resturant were closed down.',
            'There were many transient individuals within Olvera Street, and we witnessed an attempted theft - perhaps they feel emboldened to steal because of the low foot traffic.',
            'Olvera Street is part of a slightly larger area known as Placita Olvera, which houses five small museums. These Museums are under-promoted, gaining most visitors through outdoor signs, scheduled visits from guided tours, and seasonal events.',
        ],
        images: [
            [
                '/../../work/discover-olvera/olvera-empty.png',
                'Vacant shops at Olvera Street',
                'Vacant shops at Olvera Street',            
            ],
            [
                '/../../work/discover-olvera/firehouse-museum.png',
                'Exterior view of the Firehouse Museum. It is an old-fashioned brick building in a cobblestone plaza',
                'The Firehouse Museum, one of many hidden gems of Placita Olvera',
            ],
        ],
    },
    interviews: {
        sectionHeader: 'Ethnography: Interviews',
        mainText: 'We interviewed 7 vendors, 5 visitors, and 2 museum clerks.',
        bullets: [
            'All vendors concurred that they have not recovered economically from Covid.',
            'The Museums hae a lot to offer but are mainly promoted through entrance signage. They are hidden gems',            
            'Frequent visitors tend to naturally promote Olvera street to their friends and family.'
        ],
        images: [
            [
                '/../../work/discover-olvera/museum-of-social-justice.png',
                'Entrance to the Museum of Social Justice',
                'Another one of Placita Olvera\'s hidden gems',
            ], 
            [
                '/../../work/discover-olvera/mural-a.jpg',
                'The mural \'America Tropical\' by David Alfaro Siquieros',
                '\'America Tropical\', a mural by David Alfaro Siquieros, lies right in the center of Olvera Street but can only be viewed from a one particular balcony'
            ]
        ],
    }
}

export default function Page() {
    return(
        <div className='p-[10vw]'>
            <div>
                <CaseStudyHero {...discoverOlveraData.hero}/>
                <div className='mt-[6rem] mb-[6rem] bg-primary h-[1px] w-[70vw] m-auto'></div>
            </div>
            <div>
                <Overview props={discoverOlveraData.overview}/>
                <div className='mt-[6rem] mb-[6rem] bg-primary h-[1px] w-[100%] w-[70vw] m-auto'></div>
            </div>
            <div>
                <CaseStudySection {...discoverOlveraData.observations}/>
                <div className='mt-[6rem] mb-[6rem] bg-primary h-[1px] w-[100%] w-[70vw] m-auto'></div>
            </div>
            <div>
                <CaseStudySection {...discoverOlveraData.interviews}/>
                <div className='mt-[6rem] mb-[6rem] bg-primary h-[1px] w-[100%] w-[70vw] m-auto'></div>
            </div>
        </div>
    )
}