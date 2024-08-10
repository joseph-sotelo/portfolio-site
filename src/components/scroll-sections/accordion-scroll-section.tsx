'use client'
import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



export type AccordionType = {
    key: string;
    componentType: string;
    header: string,
    subheader: string,
    accordionSections: string[][];
    src: string,
    alt: string
}

export function AccordionScrollSection({props}: {props: AccordionType}){

    return(
        <div id='accordion-wrapper' className='xl:grid xl:gap-medium-gap xl:grid-cols-9'>
            <div id='left' className='mt-[10px] xl:col-span-5'>
                <h2 className='text-secondary-foreground'>
                    {props.header}
                </h2>
                <h6>
                    {props.subheader}
                </h6>
                <Accordion type="single" collapsible>
                    {props.accordionSections.map((section, index) => 
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger>
                                <p>
                                    {section[0]}
                                </p>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    {section[1]}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    )}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            <p>
                                Education
                            </p>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div>
                                <p>
                                    B.S. Interaction Design
                                </p>
                                <span className='font-light'>
                                    Anticipated Spring 2025
                                </span>  
                                <br />
                                <span className='font-light'>
                                    Santa Monica College
                                </span>  
                            </div>
                            <div className='mt-4'>
                                <p>
                                    A.S. Graphic Design
                                </p>
                                <span className='font-light'>
                                    Completed Spring 2023
                                </span>
                                <br />
                                <span className='font-light'>
                                    Santa Monica College
                                </span>    
                            </div>                 
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div id='right' className='w-full mt-big-gap max-w-[500px] md:ml-0 xl:col-span-4 xl:mt-0'>
                <Image src={props.src} alt={props.alt} width='300' height='300' className='w-full border border-border rounded-sm'>
                </Image>
            </div>
        </div>
    )
}