'use client'

import CaseStudyOverview from '@/components/case-study/case-study-overview';
import CaseStudyStandardSection from '@/components/case-study/case-study-standard-section';
import CaseStudyBigText from '@/components/case-study/case-study-big-text';
import CaseStudyBillBoard from '@/components/case-study/case-study-billboard';
import CaseStudyChapter from '@/components/case-study/case-study-chapter';
import CaseStudyPrototype from '@/components/case-study/case-study-prototype';
import CaseStudyParagraph from '@/components/case-study/case-study-paragraph';
import CaseStudyVideo from '@/components/case-study/case-study-video';
import CaseStudyInsights from '@/components/case-study/case-study-insights';

import { useRef, useEffect, useState, useContext } from 'react';

import { usePathname } from 'next/navigation';

import { StaticMenuContext } from '@/app/data/static-menu-context';

import { CaseStudySection, PageKey, CaseStudy } from '../component-types';

import data from '@/app/data/case-studies.json';

export default function CaseStudyLayout() {

    let currentPathname = usePathname();
    const currentPage = currentPathname.slice(currentPathname.lastIndexOf('/') + 1, currentPathname.length) as PageKey;
    const pageData: CaseStudy = data[currentPage];
    const pageSections: CaseStudySection[] = pageData.sections;
    const pageSectionsLength = pageSections.length -1;

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

    var scrollHeight = 5000;

    if (typeof document !== 'undefined') {
        scrollHeight = document.documentElement.scrollHeight;
    }
    
    return(
            <div className='mt-16 xl:mt-12 sm:w-[60vw] lg:w-[75vw] sm:mt-12 grow-0 z-9 mb-24'>
            {pageSections.map((section, index) => {
                switch(section.componentType) {
                    case 'caseStudyBigText':
                        return (
                            <div key={index}>
                                <CaseStudyBigText secondaryText={section.secondaryText} mainText={section.mainText}/>
                                {index !== pageSectionsLength && (
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
                                {index !== pageSectionsLength && (
                                    <div ref={overviewRef} className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'caseStudySection':
                        return (
                            <div key={index}>
                                {section.images !== undefined && (
                                    <CaseStudyStandardSection header={section.header} mainText={section.mainText} bullets={section.bullets} images={section.images}/>
                                )}
                                {index !== pageSectionsLength && (
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
                                {index !== pageSectionsLength && (
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
                                {index !== pageSectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        ) 
                    break;
                    case 'caseStudyChapter':
                        return (
                            <div key={index}>
                                    <CaseStudyChapter header={section.header}/>
                                {index !== pageSectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'caseStudyBillBoard':
                        return (
                            <div key={index}>
                                    <CaseStudyBillBoard header={section.header} mainText={section.mainText} images={section.images ?? []}/>
                                {index !== pageSectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'caseStudyPrototype':
                        return (
                            <div key={index}>
                                    <CaseStudyPrototype header={section.header} mainText={section.mainText} ></CaseStudyPrototype>
                                {index !== pageSectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break; 
                    case 'caseStudyParagraph':
                        return (
                            <div key={index}>
                                    <CaseStudyParagraph header={section.header} mainText={section.mainText} ></CaseStudyParagraph>
                                {index !== pageSectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'caseStudyBigText':
                        return (
                            <div key={index}>
                                    <CaseStudyBigText secondaryText={section.secondaryText} mainText={section.mainText} ></CaseStudyBigText>
                                {index !== pageSectionsLength && (
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
    )
}
