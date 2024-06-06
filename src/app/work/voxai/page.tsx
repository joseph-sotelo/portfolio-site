'use client'

import CaseStudyOverview from '@/components/case-study/case-study-overview';
import CaseStudySection from '@/components/case-study/case-study-section';
import CaseStudyBigText from '@/components/case-study/case-study-big-text';
import CaseStudyBillBoard from '@/components/case-study/case-study-billboard';
import ContextMenu from '@/components/context-menu';
import MobileMenu from '@/components/mobile-menu';
import CaseStudyChapter from '@/components/case-study/case-study-chapter';
import CaseStudyPrototype from '@/components/case-study/case-study-prototype';
import CaseStudyParagraph from '@/components/case-study/case-study-paragraph';
import CaseStudyVideo from '@/components/case-study/case-study-video';
import CaseStudyInsights from '@/components/case-study/case-study-insights';

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
    noBorder?: string;
}

export default function Page() {

    const voxAI = data[1];
    const sections: CaseStudySection[] = voxAI.sections;
    const sectionsLength = sections.length -1;
    const contextMenu = voxAI.contextMenuData;
    var scrollHeight = 5000;

    if (typeof document !== 'undefined') {
        scrollHeight = document.documentElement.scrollHeight;
    }
    
    return(
        <div className='m-auto w-[90vw] sm:w-full sm:m-0 sm:flex justify-evenly'>
            <div className='sm:hidden z-10'>
                <MobileMenu props={contextMenu.props}></MobileMenu>
            </div>
            <div className={`hidden sm:block sm:w-[30vw] lg:w-[15vw] min-w-[217px] h-[${scrollHeight}px] relative`}>
                <div id='context-menu-wrapper' className='sticky top-0 right-0 min-w-[217px] h-screen'>
                    <ContextMenu props={contextMenu.props}></ContextMenu>
                </div>
            </div>
            <div className='mt-16 xl:mt-12 sm:w-[60vw] lg:w-[75vw] sm:mt-12 grow-0 z-9'>
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
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
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
                                <CaseStudyVideo header={section.header} mainText={section.mainText} src={section.src} hostType={section.hostType}/>
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