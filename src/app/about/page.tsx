'use client'
import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import CaseStudyBigImage from "@/components/case-study/case-study-big-image"
import ContextMenu from "@/components/context-menu"
import MobileMenu from "@/components/mobile-menu"

const caseStudyImageProps = {
    src: '/about/data-selfie.svg',
    alt: 'An infographic displaying what Joey takes pictures of',
    caption: 'Interpret however you like. Interactive Storytelling | Fall 2023',
}


const contextMenu = {
    props: {
      header: 'About Me',
      subHeader: [
        'Joey Sotelo',
        'Design Technologist'],
      links: [
        [
            'LinkedIn',
            'http://www.linkedin.com/in/joseph-sotelo-27bb82221'
        ],
        [
            'GitHub',
            'https://github.com/joseph-sotelo'
        ],
        [
            'Resume',
            'https://drive.google.com/file/d/1QOQX90k8UsTVoyWRSoy7191cTZCTMw4y/view?usp=sharing'
        ]
      ]
    }
  }

const scrollHeight = document.documentElement.scrollHeight;

// when you find a better pic of you, remove lg:w-[858px] and md:max-w-[320px]

export default function Page(){
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
            <div id='main' className='mt-16 xl:mt-12 sm:w-[60vw] md:w-[67vw] lg:w-[75vw] sm:mt-12 grow-0 z-9'>
                <div id='about-section' className='w-[67vw] md:w-[67vw] lg:w-[858px] flex flex-col justify-between md:justify-evenly xl:justify-between my-24 sm:w-[60vw] sm:mt-[0.6rem] mx-auto md:flex-row xl:ml-0'>
                    <div id='left' className='mb-auto md:w-[35vw] lg:w-[448px]'>
                        <h2 className='text-secondary-foreground'>
                            Hi!
                        </h2>
                        <h6>
                            I’m a human-centered designer based out of Los Angeles. When I’m not in the zone, I enjoy reading, fidgeting with code, and inventing new games to play with my nieces and nephews.
                        </h6>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <p>
                                        Art and I
                                    </p>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p>
                                        My earliest creative expression was illustration. I find myself constantly learning to appreciate new kinds of art. Today I have a well-developed eye for aesthetics that I use for my own art and for design.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    <p>
                                        Design and I
                                    </p>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p>
                                        In college I discovered the world of design - graphic, UX/UI, and IxD. I found it to be a beautiful blend of art and practicality. I love submitting my creative and technical skills to the parameters created by other people’s needs. This means that the most fundamental part of the design process is research. Without research, it’s just art.                        
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    <p>
                                        Code and I
                                    </p>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p> 
                                        Ever since my first web design class I have been in love with code. From experimenting in Unity to building this website with Next.js, I make every effort to continuously grow in these skills. This is all done through self-learning, extracurricular classes, and the guidance of several mentor friends. I’m not an engineer, but I’m well-acquanited with what they do. 
                                    </p>                      
                                </AccordionContent>
                            </AccordionItem>
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
                    <div id='right' className='w-full mt-6 md:w-[25vw] lg:w-[320px] md:mt-[4.6rem]'>
                        <Image src='/about/business_portrait_small.jpg' alt='Photo of Joseph Sotelo' width='300' height='300' className='w-full border border-border md:max-w-[320px]'>
                        </Image>
                    </div>
                </div>
                <div className='hidden md:block mt-[6rem] mb-[6rem] bg-border h-[1px] w-[67vw] md:w-[62vw] m-auto md:mx-auto xl:ml-0 xl:ml-0 lg:w-[858px]'></div>
                <div className='hidden md:block mb-24 md:w-[62vw] lg:w-[858px] md:mx-auto xl:ml-0'>
                    <CaseStudyBigImage {...caseStudyImageProps}></CaseStudyBigImage>
                </div>
            </div>
        </div>
      )
}