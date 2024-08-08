'use client'

import { AccordionScrollSection, AccordionType } from './accordion-scroll-section';
import { BigImage, BigImageType } from './big-image';
import { Overview, OverviewType } from './overview';
import { StandardScrollSection, StandardScrollSectionType } from './standard-scroll-section';
import { BigText, BigTextType} from '@/components/scroll-sections/big-text';
import { Billboard, BillboardType } from '@/components/scroll-sections/billboard';
import { ChapterHeader, ChapterHeaderType} from '@/components/scroll-sections/chapter-header';
import { Paragraph, ParagraphType } from './paragraph';
import { Video, VideoType } from './video';
import { InsightsScrollSection, InsightsScrollSectionType } from './insights-scroll-section';
import { IFrame, IFrameType } from './iframe';
import { useRef, useEffect, useContext } from 'react';
import { usePathname } from 'next/navigation';

import { StaticMenuContext } from '@/app/data/static-menu-context';
import { CaseStudyPageKeyType, CaseStudyType } from '../component-types';
import data from '@/app/data/case-studies.json';

export default function ScrollSectionsFormatter() {

    // get relevant data from json file based on pathname
    let currentPathname = usePathname();
    const currentPage = currentPathname.slice(currentPathname.lastIndexOf('/') + 1, currentPathname.length) as CaseStudyPageKeyType;
    const pageData: CaseStudyType = data[currentPage];
    const pageSections = pageData.sections;
    const pageSectionsLength = pageSections.length -1;

    // set the context-stored boolean based on the overview component's visibility. Context is consumed by the static menu component.
    const overviewRef = useRef(null);
    const {setIsOffScreen} = useContext(StaticMenuContext);
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) =>{
            const entry = entries[0];
            let isOffScreen = (!entry.isIntersecting);
            setIsOffScreen(isOffScreen);
        })
        {overviewRef.current && (
            observer.observe(overviewRef.current)
        )}
    }, [])
    
    return(
            <div className='mt-16 xl:mt-12 sm:w-[60vw] lg:w-[75vw] sm:mt-12 grow-0 z-9 mb-24'>
            {pageSections.map((section, index) => {
                switch(section.componentType) {
                    case 'accordionScrollSection':
                        return (
                            <div key={index}>
                                <AccordionScrollSection props={section as AccordionType}/>
                                {index !== pageSectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'bigImage':
                        return (
                            <div key={index}>
                                <BigImage props={section as BigImageType}/>
                                {index !== pageSectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'bigText':
                        return (
                            <div key={index}>
                                <BigText props={section as BigTextType}/>
                                {index !== pageSectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'overview':
                        return (
                            <div key={index}>
                                    <Overview props={section as OverviewType}/>
                                {index !== pageSectionsLength && (
                                    <div ref={overviewRef} className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'standardScrollSection':
                        return (
                            <div key={index}>
                                <StandardScrollSection props={section as StandardScrollSectionType}/>
                                {index !== pageSectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'video':
                        return (
                            <div key={index}>
                                <Video props={section as VideoType}/>
                                {index !== pageSectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'insightsScrollSection':
                        return (
                            <div key={index}>
                                    <InsightsScrollSection props={section as InsightsScrollSectionType}/>
                                {index !== pageSectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        ) 
                    break;
                    case 'chapterHeader':
                        return (
                            <div key={index}>
                                    <ChapterHeader props={section as ChapterHeaderType}/>
                                {index !== pageSectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'billboard':
                        return (
                            <div key={index}>
                                    <Billboard props={section as BillboardType}/>
                                {index !== pageSectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break;
                    case 'iFrame':
                        return (
                            <div key={index}>
                                    <IFrame props={section as IFrameType} />
                                {index !== pageSectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                    break; 
                    case 'paragraph':
                        return (
                            <div key={index}>
                                    <Paragraph props={section as ParagraphType} />
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
