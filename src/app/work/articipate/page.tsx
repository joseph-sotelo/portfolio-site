'use client'

import CaseStudyHero from '@/components/case-study/case-study-hero';
import CaseStudyOverview from '@/components/case-study/case-study-overview';
import CaseStudySection from '@/components/case-study/case-study-section';

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
            <CaseStudyHero {...articipateData.hero}/>
            <CaseStudyOverview props={articipateData.overview}/>
            {/* <CaseStudySection {...articipateData.interviews}/> */}
        </div>
    )
}