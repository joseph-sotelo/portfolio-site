'use client'

import Hero from '@/app/ui/case-study/hero';
import Overview from '@/app/ui/case-study/overview';
import ParagraphAndImage from '@/app/ui/case-study/paragraph-and-image';

const articipateData = {
    hero: {
        title: 'Articipate',
        tagline: 'A mobile app that uses community to stimulate and challenge visual artists',
        occasion: 'Mobile Design // Spring 2021',
        image: '/../../work/articipate/articipate-cover.png'
    },
    overview: {
        challenge: 'Visual Artists often lack the motivation and inspiration they need to thrive.',
        insight: 'Artists are commonly inspired by other artists.',
        solution: 'Articipate, an app in which users are given a daily prompt for a piece of art. Users can post their art for others to see and critique.',
    },
    interviews: {
        sectionHeader: 'Interviews',
        mainText: '',
        image: '',
    }
}

export default function Page() {
    return(
        <div>
            <Hero {...articipateData.hero}/>
            <Overview props={articipateData.overview}/>
            <ParagraphAndImage {...articipateData.interviews}/>
        </div>
    )
}