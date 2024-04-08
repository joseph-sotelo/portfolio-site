'use client'

import CaseStudyHero from '@/app/ui/case-study/case-study-hero';
import Overview from '@/app/ui/case-study/case-study-overview';
import CaseStudySection from '@/app/ui/case-study/case-study-section';
import { Grid, GridRow } from 'semantic-ui-react';

const discoverOlveraData = {
    hero: {
        title: 'Discover Olvera',
        tagline: 'An impactful mobile app that aims to increase foot traffic at Olvera street by gamifying the visitor experience using AR.',
        occasion: 'IxD Studio 1 // Fall 2023',
        image: '/../../work/discover-olvera/discover-olvera-cover.png'
    },
    overview: {
        challenge: 'Olvera Street\'s businesses are suffering due to a lingering, pandemic-enduced drop in foot traffic',
        process: 'Ethnography, Netnography, Prototype, Usability Test',
        role: 'Design Research, Branding, UX Design',
    },
    observations: {
        sectionHeader: 'Ethnography: Observations',
        mainText: 'The first stage of our research was ethnography. For us, this meant taking three day-trips to Olvera Street, recording our observations and conducting interviews.',
        bullets: [
            'Six shops and one popular resturant were closed down.',
            'There were many transient individuals within Olvera Street, and we witnessed an attempted theft - perhaps they feel emboldened to steal because of the low foot traffic.',
            'Olvera Street is part of a slightly larger area known as Placita Olvera, which houses five small museums. These Museums are under-promoted, gaining most visitors through outdoor signs, scheduled visits from guided tours, and seasonal events.',
        ],
        images: [
            [
                '/../../work/discover-olvera/firehouse-museum.png',
                'Exterior view of the Firehouse Museum. It is an old-fashioned brick building in a cobblestone plaza',
                'The Firehouse Museum, one of many hidden gems of Placita Olvera',
            ],
            [
                '/../../work/discover-olvera/mural-a.jpg',
                'The mural \'America Tropical\' by David Alfaro Siquieros',
                '\'America Tropical\', a mural by David Alfaro Siquieros, lies right in the center of Olvera Street but can only be viewed from a one particular balcony'
            ]
        ],
    },
    interviews: {
        sectionHeader: 'Ethnography: Interviews',
        mainText: '',
        image: '',
    }
}

export default function Page() {
    return(
        <div className='p-[10vw]'>
            <Grid divided='vertically'  className='w-[80vw]'>
                <GridRow>
                    <CaseStudyHero {...discoverOlveraData.hero}/>
                </GridRow>
                <GridRow>
                    <Overview props={discoverOlveraData.overview}/>
                </GridRow>
                <GridRow>
                    <CaseStudySection {...discoverOlveraData.observations}/>
                </GridRow>
            </Grid>
        </div>
    )
}