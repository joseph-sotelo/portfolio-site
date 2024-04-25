import { promises as fs } from 'fs';

import CaseStudyHero from '@/components/case-study/case-study-hero.jsx';
import CaseStudyOverview from '@/components/case-study/case-study-overview.jsx';
import CaseStudySection from '@/components/case-study/case-study-section';
import CaseStudyBigText from '@/components/case-study/case-study-big-text';
import CaseStudyBigImage from '@/components/case-study/case-study-big-image';
import CaseStudyInsights from '@/components/case-study/case-study-insights';
import CaseStudyVideo from '@/components/case-study/case-study-video';

export default async function Page() {
    const file = await fs.readFile(process.cwd() + '/src/app/content/case-studies.json', 'utf8');
    const data = JSON.parse(file);
    const discoverOlvera = data[0];
    const sections = discoverOlvera.sections;
    const sectionsLength = sections.length -1;
    
    return(
        <div>
            {sections.map((section, index) => {
                switch(section.componentType){
                    case 'caseStudyHero':
                        return (
                            <div key={index}>
                                <CaseStudyHero props={section.props}/>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[2px] w-[70vw] m-auto'></div>
                                )}
                            </div>
                        );
                        break;
                    case 'caseStudyOverview':
                        return (
                            <div key={index}>
                                <CaseStudyOverview props={section.props}/>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[2px] w-[70vw] m-auto'></div>
                                )}
                            </div>
                        );
                        break;
                    case 'caseStudySection':
                        return (
                            <div key={index}>
                                <CaseStudySection {...section}/>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[2px] w-[70vw] m-auto'></div>
                                )}
                            </div>
                        );
                        break;
                    case 'caseStudyBigImage':
                        return (
                            <div key={index}>
                                <CaseStudyBigImage {...section}/>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[2px] w-[70vw] m-auto'></div>
                                )}
                            </div>
                        );
                        break;
                    case 'caseStudyBigText':
                        return (
                            <div key={index}>
                                <CaseStudyBigText {...section}/>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[2px] w-[70vw] m-auto'></div>
                                )}
                            </div>
                        );
                        break;
                    case 'caseStudyInsights':
                        return (
                            <div key={index}>
                                <CaseStudyInsights {...section}/>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[2px] w-[70vw] m-auto'></div>
                                )}
                            </div>
                        );
                        break;
                    case 'caseStudyVideo':
                        return (
                            <div key={index}>
                                <CaseStudyVideo {...section}/>
                                {index !== sectionsLength && (
                                    <div className='mt-[6rem] mb-[6rem] bg-border h-[2px] w-[70vw] m-auto'></div>
                                )}
                            </div>
                        );
                        break;
                    default:
                        console.log('This is not an accepted component type')
                }
            })}
        </div>
    )
}