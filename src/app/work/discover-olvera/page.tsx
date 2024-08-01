'use client'

import CaseStudyOverview from '@/components/case-study/case-study-overview';
import CaseStudySection from '@/components/case-study/case-study-section';
import CaseStudyBigText from '@/components/case-study/case-study-big-text';
import CaseStudyBillBoard from '@/components/case-study/case-study-billboard';
import CaseStudyChapter from '@/components/case-study/case-study-chapter';
import CaseStudyPrototype from '@/components/case-study/case-study-prototype';
import CaseStudyParagraph from '@/components/case-study/case-study-paragraph';
import CaseStudyVideo from '@/components/case-study/case-study-video';
import CaseStudyInsights from '@/components/case-study/case-study-insights';

import { useRef, useEffect, useState, useContext } from 'react';

import { StaticMenuContext } from '@/app/sub-layout';

import data from '@/app/content/case-studies.json';

type CaseStudySection = {
    key: string;
    componentType: string;
    descriptiveList?: string[][];
    header?: string;
    secondaryText?: string;
    mainText?: string;
    bullets?: string[];
    images?: string[][];
    image?: string;
    src?: string;
    hostType?: string;
    sources?: string[];
}

export default function Page() {

    const overviewRef = useRef(null);
    const {setIsOffScreen} = useContext(StaticMenuContext);
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) =>{
            const entry = entries[0];
            let isInvisible = (!entry.isIntersecting);
            console.log('isinvisible: ' + isInvisible)
            setIsOffScreen(isInvisible);
            console.log('context: ' + StaticMenuContext);
        })
        {overviewRef.current && (
            observer.observe(overviewRef.current)
        )}
    }, [])

    const discoverOlvera = data[0];
    const sections: CaseStudySection[] = discoverOlvera.sections;
    const sectionsLength = sections.length -1;
    const contextMenu = discoverOlvera.contextMenuData;
    var scrollHeight = 5000;

    if (typeof document !== 'undefined') {
        scrollHeight = document.documentElement.scrollHeight;
    }
    
    return(
        <div className='mt-12 mb-24 sm:flex justify-evenly'>
            <div className='mt-16 xl:mt-12 sm:w-[60vw] lg:w-[75vw] sm:mt-12 grow-0 z-9 mb-24'>
            {sections.map((section, index) => {
                switch(section.componentType) {
                    case 'caseStudyBigText':
                        return (
                            <div key={index}>
                                <CaseStudyBigText secondaryText={section.secondaryText} mainText={section.mainText}/>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'caseStudyOverview':
                        return (
                            <div key={index}>
                                {section.header !== undefined && section.descriptiveList !== undefined && section.image !== undefined && (
                                    <CaseStudyOverview header={section.header} descriptiveList={section.descriptiveList} image={section.image}/>
                                )}
                                {index !== sectionsLength && (
                                    <div ref={overviewRef} className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'caseStudySection':
                        return (
                            <div key={index}>
                                {section.images !== undefined && (
                                    <CaseStudySection header={section.header} mainText={section.mainText} bullets={section.bullets} images={section.images}/>
                                )}
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'caseStudyVideo':
                        return (
                            <div key={index}>
                                {section.sources !== undefined && (
                                    <CaseStudyVideo header={section.header} mainText={section.mainText} sources={section.sources} hostType={section.hostType}/>
                                )}
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'caseStudyInsights':
                        return (
                            <div key={index}>
                                {section.descriptiveList !== undefined && (
                                    <CaseStudyInsights header={section.header} secondaryText={section.secondaryText} descriptiveList={section.descriptiveList}/>
                                )}
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        ) 
                    break;
                    case 'caseStudyChapter':
                        return (
                            <div key={index}>
                                    <CaseStudyChapter header={section.header}/>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'caseStudyBillBoard':
                        return (
                            <div key={index}>
                                    <CaseStudyBillBoard header={section.header} mainText={section.mainText} images={section.images ?? []}/>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'caseStudyPrototype':
                        return (
                            <div key={index}>
                                    <CaseStudyPrototype header={section.header} mainText={section.mainText} ></CaseStudyPrototype>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break; 
                    case 'caseStudyParagraph':
                        return (
                            <div key={index}>
                                    <CaseStudyParagraph header={section.header} mainText={section.mainText} ></CaseStudyParagraph>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'caseStudyBigText':
                        return (
                            <div key={index}>
                                    <CaseStudyBigText secondaryText={section.secondaryText} mainText={section.mainText} ></CaseStudyBigText>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    default:
                        console.log('This is not an accepted component type')
                }
            })}
            </div>
        </div>
    )
}
