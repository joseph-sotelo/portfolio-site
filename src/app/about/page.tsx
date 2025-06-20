import { MainLayout } from "@/components/main-layout"
import { AccordionScrollSection, AccordionType } from "../../components/scroll-sections/accordion-scroll-section";
import { BigImageType, BigImage } from "../../components/scroll-sections/big-image";
import { VideoType, Video } from "../../components/scroll-sections/video";
import ScrollSectionDivider from "@/components/scroll-sections/scroll-section-divider";

import data from '@/app/data/about.json'


export default function Page(){

    const aboutSections = data.sections;
    const videoData = aboutSections[0] as VideoType;
    const accordionData = aboutSections[1] as AccordionType;
    const bigImageData = aboutSections[2] as BigImageType;

    return(
        <MainLayout >
            <div className="-mt-6">
                <Video props={videoData}/>
                <ScrollSectionDivider sectionsCount={0} index={1}/>
                <AccordionScrollSection props={accordionData} />
                <ScrollSectionDivider sectionsCount={0} index={1}/>
                <BigImage props={bigImageData} />
            </div>
        </MainLayout>
    )
}