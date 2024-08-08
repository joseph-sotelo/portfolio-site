import CaseStudyAccordion from "../case-study/case-study-accordion";
import CaseStudyBigImage from "../case-study/case-study-big-image";

import data from '@/app/data/about.json'

export default function AboutLayout(){

    type CaseStudyAccordionType = {
        key: string;
        componentType: string;
        header: string,
        subheader: string,
        accordionSections: string[][];
        src: string,
        alt: string
    }

    type CaseStudyBigImageType = {
        key: string,
        componentType: string,
        src: string,
        alt: string,
        caption: string,
        captionSuffix: string,
    }

    const aboutSections = data.sections;
    const accordionData= aboutSections[0] as CaseStudyAccordionType;
    const bigImageData = aboutSections[1] as CaseStudyBigImageType;

    return(
        <>
            <CaseStudyAccordion props={accordionData}></CaseStudyAccordion>
            <CaseStudyBigImage props={bigImageData}>

            </CaseStudyBigImage>
        </>
    )

}