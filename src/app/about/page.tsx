import { MainLayout } from "@/components/main-layout"
import { AccordionScrollSection, AccordionType } from "../../components/scroll-sections/accordion-scroll-section";
import { BigImageType, BigImage } from "../../components/scroll-sections/big-image";
import ScrollSectionDivider from "@/components/scroll-sections/scroll-section-divider";
import Orbitalgraphic from "@/components/orbital-graphic/orbital-graphic";

import data from '@/app/data/about.json'


export default function Page(){

    const aboutSections = data.sections;
    const accordionData = aboutSections[0] as AccordionType;
    const bigImageData = aboutSections[1] as BigImageType;

    return(
        <MainLayout >
            <>
                <></>
                <Orbitalgraphic></Orbitalgraphic>
                <AccordionScrollSection props={accordionData} />
                <ScrollSectionDivider sectionsCount={0} index={1}/>
                <BigImage props={bigImageData} />
            </>
        </MainLayout>
    )
}