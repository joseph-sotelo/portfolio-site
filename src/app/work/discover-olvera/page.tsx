'use client'

import Hero from '@/app/ui/case-study/hero';
import Overview from '@/app/ui/case-study/overview';
import ParagraphAndImage from '@/app/ui/case-study/paragraph-and-image';

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
            'Six shops and one popular resturant were closed down',
            'There were many transient individuals within Olvera Street, and we witnessed an attempted theft - perhaps they feel emboldened to steal because of the low foot traffic.',
            'Olvera Street is part of a slightly larger area known as Placita Olvera, which houses five small museums. These Museums are under-promoted, gaining most visitors through outdoor signs, scheduled visits from guided tours, and seasonal events. ',
        ],
        image: '',
    },
    interviews: {
        sectionHeader: 'Ethnography: Interviews',
        mainText: '',
        image: '',
    }
}

export default function Page() {
    return(
        <div>
            <Hero {...discoverOlveraData.hero}/>
            <Overview props={discoverOlveraData.overview}/>
            <ParagraphAndImage {...discoverOlveraData.observations}/>
        </div>
    )
}