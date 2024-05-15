'use client'

import CaseStudyOverview from '@/components/case-study/case-study-overview.jsx';
import CaseStudySection from '@/components/case-study/case-study-section';
import CaseStudyBigText from '@/components/case-study/case-study-big-text';
import CaseStudyInsights from '@/components/case-study/case-study-insights';
import CaseStudyVideo from '@/components/case-study/case-study-video';
import ContextMenu from '@/components/context-menu';
import MobileMenu from '@/components/mobile-menu';

import data from '@/app/content/case-studies.json'

export default function Page() {

    const discoverOlvera = data[0];
    const sections = discoverOlvera.sections;
    const sectionsLength = sections.length -1;
    const contextMenu = discoverOlvera.contextMenuData;
    const scrollHeight = document.documentElement.scrollHeight;
    
    return(
        <div className='m-auto w-[90vw] sm:w-full sm:m-0 sm:flex justify-evenly'>
            <div className='sm:hidden z-10'>
                <MobileMenu props={contextMenu.props}></MobileMenu>
            </div>
            <div className={`hidden sm:block sm:w-[30vw] lg:w-[15vw] min-w-[217px] h-[${scrollHeight}] relative`}>
                <div id='context-menu-wrapper' className='sticky top-0 right-0 min-w-[217px] h-screen'>
                    <ContextMenu props={contextMenu.props}></ContextMenu>
                </div>
            </div>
            <div className='mt-16 xl:mt-12 sm:w-[60vw] lg:w-[75vw] sm:mt-12 grow-0 z-9'>
            {sections.map((section, index) => {
                switch(section.componentType) {
                    case 'caseStudyOverview':
                        return (
                            <div key={index}>
                                <CaseStudyOverview props={section.props}/>
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
                                    <CaseStudySection sectionHeader={section.sectionHeader} mainText={section.mainText} bullets={section.bullets} images={section.images}/>
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
                                <CaseStudyVideo header={section.header} mainText={section.mainText} src={section.src}/>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                      break;
                      case 'caseStudyBigText':
                        return (
                            <div key={index}>
                                <CaseStudyBigText secondaryText={section.secondaryText} primaryText={section.primaryText}/>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] sm:w-[60vw] md:w-[67vw] m-auto xl:ml-0'></div>
                                )}
                            </div>
                        )
                      break;
                      case 'caseStudyInsights':
                        return (
                            <div key={index}>
                                {section.insights !== undefined && (
                                <CaseStudyInsights title={section.title} caption={section.caption} insights={section.insights}/>
                                )}
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