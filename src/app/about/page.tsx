import { MainLayout } from "@/components/main-layout"
import { AccordionScrollSection, AccordionType } from "../../components/scroll-sections/accordion-scroll-section";
import { BigImageType, BigImage } from "../../components/scroll-sections/big-image";

import data from '@/app/data/about.json'


export default function Page(){

    const aboutSections = data.sections;
    const accordionData = aboutSections[0] as AccordionType;
    const bigImageData = aboutSections[1] as BigImageType;

    const about =  (
        <>
            <AccordionScrollSection props={accordionData} />
            <BigImage props={bigImageData} />
        </>
    )
    return(
        <MainLayout mainContent = {about}>
        </MainLayout>
    )
}