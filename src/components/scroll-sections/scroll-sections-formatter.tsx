'use client'

import { AccordionScrollSection, AccordionType } from './accordion-scroll-section';
import { BigImage, BigImageType } from './big-image';
import { Overview, OverviewType } from './overview';
import { StandardScrollSection, StandardScrollSectionType } from './standard-scroll-section';
import { BigText, BigTextType} from '@/components/scroll-sections/big-text';
import { Column, ColumnType } from '@/components/scroll-sections/column';
import { Billboard, BillboardType } from '@/components/scroll-sections/billboard';
import { CodeFragmentBillBoard, CodeFragmentBillboardType } from './code-fragment-billboard';
import { ChapterHeader, ChapterHeaderType} from '@/components/scroll-sections/chapter-header';
import { Paragraph, ParagraphType } from './paragraph';
import { Video, VideoType } from './video';
import { InsightsScrollSection, InsightsScrollSectionType } from './insights-scroll-section';
import { IFrame, IFrameType } from './iframe';
import { useRef, useEffect, useContext } from 'react';
import { usePathname } from 'next/navigation';
import ScrollSectionDivider from './scroll-section-divider';

import { StaticMenuContext } from '@/app/data/static-menu-context';
import { CaseStudyPageKeyType, CaseStudyType } from '../component-types';
import data from '@/app/data/case-studies.json';

export default function ScrollSectionsFormatter() {

    // get relevant data from json file based on pathname
    let currentPathname = usePathname();
    const currentPage = currentPathname.slice(currentPathname.lastIndexOf('/') + 1, currentPathname.length) as CaseStudyPageKeyType;
    const pageData: CaseStudyType = data[currentPage];
    const sections = pageData.sections;
    const sectionsCount = sections.length -1;

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
            <div>
            {sections.map((section, index) => {
                switch(section.componentType) {
                    case 'accordionScrollSection':
                        return (
                            <div key={index} {...(index === 0 ? {ref: overviewRef } : {})}>
                                <AccordionScrollSection props={section as AccordionType}/>
                                <ScrollSectionDivider index={index} sectionsCount={sectionsCount}/>
                            </div>
                        )
                    break;
                    case 'bigImage':
                        return (
                            <div key={index} {...(index === 0 ? {ref: overviewRef } : {})}>
                                <BigImage props={section as BigImageType}/>
                                <ScrollSectionDivider index={index} sectionsCount={sectionsCount}/>
                            </div>
                        )
                    break;
                    case 'bigText':
                        return (
                            <div key={index} {...(index === 0 ? {ref: overviewRef } : {})}>
                                <BigText props={section as BigTextType}/>
                                <ScrollSectionDivider index={index} sectionsCount={sectionsCount}/>
                            </div>
                        )
                    break;
                    case 'overview':
                        return (
                            <div key={index} {...(index === 0 ? {ref: overviewRef } : {})}>
                                    <Overview props={section as OverviewType}/>
                                    <ScrollSectionDivider index={index} sectionsCount={sectionsCount}/>
                            </div>
                        )
                    break;
                    case 'standardScrollSection':
                        return (
                            <div key={index} {...(index === 0 ? {ref: overviewRef } : {})}>
                                <StandardScrollSection props={section as StandardScrollSectionType}/>
                                <ScrollSectionDivider index={index} sectionsCount={sectionsCount}/>
                            </div>
                        )
                    break;
                    case 'video':
                        return (
                            <div key={index} {...(index === 0 ? {ref: overviewRef } : {})}>
                                <Video props={section as VideoType}/>
                                <ScrollSectionDivider index={index} sectionsCount={sectionsCount}/>
                            </div>
                        )
                    break;
                    case 'insightsScrollSection':
                        return (
                            <div key={index} {...(index === 0 ? {ref: overviewRef } : {})}>
                                    <InsightsScrollSection props={section as InsightsScrollSectionType}/>
                                    <ScrollSectionDivider index={index} sectionsCount={sectionsCount}/>
                            </div>
                        ) 
                    break;
                    case 'chapterHeader':
                        return (
                            <div key={index} {...(index === 0 ? {ref: overviewRef } : {})}>
                                    <ChapterHeader props={section as ChapterHeaderType}/>
                                    <ScrollSectionDivider index={index} sectionsCount={sectionsCount}/>
                            </div>
                        )
                    break;
                    case 'billboard':
                        return (
                            <div key={index} {...(index === 0 ? {ref: overviewRef } : {})}>
                                    <Billboard props={section as BillboardType}/>
                                    <ScrollSectionDivider index={index} sectionsCount={sectionsCount}/>
                            </div>
                        )
                    break;
                    case 'iFrame':
                        return (
                            <div key={index} {...(index === 0 ? {ref: overviewRef } : {})}>
                                    <IFrame props={section as IFrameType} />
                                    <ScrollSectionDivider index={index} sectionsCount={sectionsCount}/>
                            </div>
                        )
                    break; 
                    case 'paragraph':
                        return (
                            <div key={index} {...(index === 0 ? {ref: overviewRef } : {})}>
                                    <Paragraph props={section as ParagraphType} />
                                    <ScrollSectionDivider index={index} sectionsCount={sectionsCount}/>
                            </div>
                        )
                    break;
                    case 'column':
                        return (
                            <div key={index} {...(index === 0 ? {ref: overviewRef } : {})}>
                                    <Column props={section as ColumnType} />
                                    <ScrollSectionDivider index={index} sectionsCount={sectionsCount}/>
                            </div>
                        )
                    break;
                    case 'codeFragmentBillboard':
                        return (
                            <div key={index} {...(index === 0 ? {ref: overviewRef } : {})}>
                                    <CodeFragmentBillBoard props={section as CodeFragmentBillboardType} />
                                    <ScrollSectionDivider index={index} sectionsCount={sectionsCount}/>
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
