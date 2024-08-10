import { MainLayout } from "@/components/main-layout"
import { AccordionScrollSection, AccordionType } from "../../components/scroll-sections/accordion-scroll-section";
import { BigImageType, BigImage } from "../../components/scroll-sections/big-image";
import ScrollSectionDivider from "@/components/scroll-sections/scroll-section-divider";

import data from '@/app/data/about.json'


export default function Page(){

    const aboutSections = data.sections;
    const accordionData = aboutSections[0] as AccordionType;
    const bigImageData = aboutSections[1] as BigImageType;

    return(
        <MainLayout >
            <>
                <AccordionScrollSection props={accordionData} />
                <ScrollSectionDivider sectionsCount={0} index={1}/>
                <BigImage props={bigImageData} />
            </>
        </MainLayout>
    )
}