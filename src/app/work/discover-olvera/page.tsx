'use client'

import CaseStudyHero from '@/components/case-study/case-study-hero';
import CaseStudyOverview from '@/components/case-study/case-study-overview';
import CaseStudySection from '@/components/case-study/case-study-section';
import CaseStudyBigText from '@/components/case-study/case-study-big-text';
import CaseStudyInsights from '@/components/case-study/case-study-insights';

const discoverOlveraData = {
    hero: {
        title: 'Discover Olvera',
        tagline: 'An impactful mobile app that aims to increase foot traffic at Olvera street by gamifying the visitor experience using AR.',
        occasion: 'IxD Studio 1 // Fall 2023',
        image: '/../../work/discover-olvera/discover-olvera-cover.png'
    },
    overview: {
        Challenge: 'Olvera Street\'s businesses are suffering due to a lingering, pandemic-enduced drop in foot traffic',
        Process: 'Ethnography, Netnography, Prototype, Test, Refine',
        Role: 'Design Research, Branding, UX Design',
    },
    observations: {
        sectionHeader: 'Ethnography: Observations',
        mainText: 'Our first form of research was to visit Olvera Street in person. The goal was to unearth problems through observation',
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
        mainText: 'In addition to observations, we interviewed 7 vendors, 5 visitors, and 2 museum clerks.',
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
    },
    netnography: {
        sectionHeader: 'Netnography',
        mainText: 'Next, we took an in-depth look at the online presence of Olvera Street. We investigated what’s said about Olvera on Yelp, Tripadvisor, and in the news. We also looked what others have already done to solve similar challenges.',
        bullets: [
            'The Met used an AR app to enhance artwork and draw the crowds back after Covid. Should we use AR to increase foot traffic at Olvera?',
            'Placita Olvera has poor internet representation. For example, many shops are not represented on Google Maps',            
            'We found qualitative data that confirmed our ethnography, such as the fact that businesses are currently down 30-60%',
            'Journalist Javier Cabral suggests that leveraging social media could be a solution. How might this look in our project?'
        ],
        images: [
            [
                '/../../work/discover-olvera/chroma.png',
                'Image of text reading \'Chroma: ancient sculpture in color\' in front of a Sphinx sculpture',
                'Poster for Chroma AR by The MET',
            ], 
            [
                '/../../work/discover-olvera/google-maps.png',
                'Screenshot of Olvera Street on Google maps',
                'Many businesses at Olvera are not displayed on Google and Apple maps.'
            ]
        ],
    },
    howMightWe: {
        secondaryText: 'At this point a design direction was beginning to emerge:',
        primaryText: 'How might we leverage Olvera\'s hidden museums and it\'s small yet loyal customer base to increase foot traffic at Olvera Street?',
    },
    persona: {
        sectionHeader: 'Persona',
        mainText: 'We created a persona named Jessica based on the visitors that we interviewed. Our design, whatever it would end up being, would focus on bringing her pysically to Olvera Street.',
        images: [
            [
                '/../../work/discover-olvera/persona-left.png',
                'Screenshot of the Jessica Persona',
            ], 
            [
                '/../../work/discover-olvera/persona-right.png',
                'Screenshot of the Jessica Persona',
            ]
        ],
    },
    paperPrototype: {
        sectionHeader: 'Paper Prototype',
        mainText: 'The first iteration of our solution was a system consisting of several digital and physical components.',
        bullets: [
            'App: An app with a detailed map of Olvera’s attractions, as well as AR experiences.',
            'Digital Displays: Users would have the opportunity to post photos of their experiences to digital displays on billboards in public.',            
            'QR Codes: QR codes at Olvera street would have to be scanned to download the app and activate the AR experiences.',
        ],
        images: [
            [
                '/../../work/discover-olvera/paper-prototype.png',
                'The app prototype, made of paper and lego',
                'Lego makes a great prototyping material!',
            ], 
            [
                '/../../work/discover-olvera/camera-sim.png',
                'The app prototype, made of paper and lego',
                'Simulating an AR-colorized mural',
            ],
            [
                '/../../work/discover-olvera/prototype-map.png',
                'The app prototype, made of paper and lego',
                'Simulating physical movement around the location',
            ]
        ],
    },
    prototypeInsights: [
        [
            'Comfort Levels',
            'Most users would not be comfortable sharing their photos to public displays and billboards. Most felt comfortable sharing their experiences on social media.'
        ],
        [
            'America Tropical',
            'We prototyped three AR experiences, and the most delightful was the one that displayed America Tropical, a white-washed mural, in its original colors.'
        ]
    ],
    branding: {
        sectionHeader: 'Branding',
        mainText: 'I was placed in charge of the branding for the app.',
        bullets: [
            'App: An app with a detailed map of Olvera’s attractions, as well as AR experiences.',
            'Digital Displays: Users would have the opportunity to post photos of their experiences to digital displays on billboards in public.',            
            'QR Codes: QR codes at Olvera street would have to be scanned to download the app and activate the AR experiences.',
        ],
        images: [
            [
                '/../../work/discover-olvera/paper-prototype.png',
                'The app prototype, made of paper and lego',
                'Lego makes a great prototyping material!',
            ], 
            [
                '/../../work/discover-olvera/camera-sim.png',
                'The app prototype, made of paper and lego',
                'Simulating an AR-colorized mural',
            ],
            [
                '/../../work/discover-olvera/prototype-map.png',
                'The app prototype, made of paper and lego',
                'Simulating physical movement around the location',
            ]
        ],
    },
}

export default function Page() {
    return(
        <div className='p-[10vw]'>
            <div>
                <CaseStudyHero {...discoverOlveraData.hero}/>
                <div className='mt-[6rem] mb-[6rem] bg-primary h-[1px] w-[70vw] m-auto'></div>
            </div>
            <div>
                <CaseStudyOverview props={discoverOlveraData.overview}/>
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
            <div>
                <CaseStudySection {...discoverOlveraData.netnography}/>
                <div className='mt-[6rem] mb-[6rem] bg-primary h-[1px] w-[100%] w-[70vw] m-auto'></div>
            </div>
            <div>
                <CaseStudyBigText {...discoverOlveraData.howMightWe}/>
                <div className='mt-[6rem] mb-[6rem] bg-primary h-[1px] w-[100%] w-[70vw] m-auto'></div>
            </div>
            <div>
                <CaseStudySection {...discoverOlveraData.persona}/>
                <div className='mt-[6rem] mb-[6rem] bg-primary h-[1px] w-[100%] w-[70vw] m-auto'></div>
            </div>
            <div>
                <CaseStudySection {...discoverOlveraData.paperPrototype}/>
                <div className='mt-[6rem] mb-[6rem] bg-primary h-[1px] w-[100%] w-[70vw] m-auto'></div>
            </div>
            <div>
                <CaseStudyInsights props={discoverOlveraData.prototypeInsights}/>
                <div className='mt-[6rem] mb-[6rem] bg-primary h-[1px] w-[100%] w-[70vw] m-auto'></div>
            </div>
        </div>
    )
}