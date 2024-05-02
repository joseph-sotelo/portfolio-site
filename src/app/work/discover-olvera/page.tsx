import CaseStudyHero from '@/components/case-study/case-study-hero.jsx';
import CaseStudyOverview from '@/components/case-study/case-study-overview.jsx';
import CaseStudySection from '@/components/case-study/case-study-section';
import CaseStudyBigText from '@/components/case-study/case-study-big-text';
import CaseStudyInsights from '@/components/case-study/case-study-insights';
import CaseStudyVideo from '@/components/case-study/case-study-video';
import ContextMenu from '@/components/context-menu';

import data from '@/app/content/case-studies.json'

export default async function Page() {

    const discoverOlvera = data[0];
    const sections = discoverOlvera.sections;
    const sectionsLength = sections.length -1;
    const contextMenu = discoverOlvera.contextMenuData;
    
    return(
        <div className='flex flex-row gap-[3.5rem] w-[88vw] mx-auto'>
            <div className='w-[15vw] h-screen'>

                <ContextMenu props={contextMenu.props}></ContextMenu>
            </div>
            <div className='w-[67vw]'>
            {sections.map((section, index) => {
                switch(section.componentType) {
                    case 'caseStudyOverview':
                        return (
                            <div key={index}>
                                <CaseStudyOverview props={section.props}/>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[2px] w-[70vw] m-auto'></div>
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
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[2px] w-[70vw] m-auto'></div>
                                )}
                            </div>
                        )
                      break;
                      case 'caseStudyVideo':
                        return (
                            <div key={index}>
                                <CaseStudyVideo header={section.header} mainText={section.mainText} src={section.src}/>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[2px] w-[70vw] m-auto'></div>
                                )}
                            </div>
                        )
                      break;
                      case 'caseStudyBigText':
                        return (
                            <div key={index}>
                                <CaseStudyBigText secondaryText={section.secondaryText} primaryText={section.primaryText}/>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[2px] w-[70vw] m-auto'></div>
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
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[2px] w-[70vw] m-auto'></div>
                                )}
                            </div>
                        ) 
                      break;
                      default:
                        console.log('This is not an accepted component type')
                  }
                return (
                    <div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}