import CaseStudyHero from '@/components/case-study/case-study-hero.jsx';
import CaseStudyOverview from '@/components/case-study/case-study-overview.jsx';
import CaseStudySection from '@/components/case-study/case-study-section';
import CaseStudyBigText from '@/components/case-study/case-study-big-text';
import CaseStudyInsights from '@/components/case-study/case-study-insights';
import CaseStudyVideo from '@/components/case-study/case-study-video';
import MainNav from '@/components/main-nav';

import data from '@/app/content/case-studies.json'

export default async function Page() {

    const discoverOlvera = data[0];
    const sections = discoverOlvera.sections;
    const sectionsLength = sections.length -1;
    
    return(
        <div className='flex flex-row gap-[3.5rem] w-[88vw] mx-auto'>
            <div className='w-[15vw] h-screen'>
                <div className='fixed h-[97.5vh] mt-0 w-[15vw] flex flex-col justify-between'>
                    <div className='flex flex-col gap-[3rem] mt-[3rem]'>
                        <MainNav/>
                        <div>
                            <h5 className='text-right'>
                                Discover Olvera
                            </h5>
                            <p className='text-right mt-[1rem]'>
                                IxD Studio 1 // Fall 2023
                            </p>
                            <p className='text-right mt-[1rem]'>
                                A mobile app that aims to increase foot traffic at Olvera street by gamifying the visitor experience using AR.
                            </p>
                        </div>
                    </div>
                    <small className='text-right'>
                        All content &#169; Joseph Sotelo <br />
                        Site by @joseph-sotelo
                    </small>
                </div>
            </div>
            <div className='w-[67vw]'>
            {sections.map((section, index) => {
                switch(section.componentType) {
                    case 'caseStudyHero':
                      return (
                        <div key={index}>
                        <CaseStudyHero props={section.props}/>
                        {index !== sectionsLength && (
                            <div className='mt-[6rem] mb-[6rem] bg-border h-[2px] w-[70vw] m-auto'></div>
                        )}
                    </div>
                      )
                      break;
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