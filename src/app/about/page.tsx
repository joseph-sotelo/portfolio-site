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

const caseStudyImageProps = {
    src: '/about/data-selfie.png',
    alt: 'An infographic displaying what JOey takes pictures of',
    caption: '\'Data Selfie\' exercise for a class on interactive stotytelling // Fall 2023',
}


const contextMenu = {
    props: {
      header: 'About Me',
      subHeader: 'Joey Sotelo',
      mainText: 'Design Technologist',
      links: [
        [
            'Linkedin',
            'http://www.linkedin.com/in/joseph-sotelo-27bb82221'
        ],
        [
            'Github',
            'https://github.com/joseph-sotelo'
        ]
      ]
    }
  }

export default function Page(){
    return(
        <div className='flex flex-row gap-[3.5rem] w-[88vw] mx-auto'>
            <div className='w-[15vw] h-screen'>
                <ContextMenu props={contextMenu.props}></ContextMenu>
            </div>
            <div>
            <div className='flex flex-row justify-between ml-auto mr-auto mt-12 mb-12 w-67vw'>
                <div id='left' className='w-[28vw] mt-auto mb-auto'>
                    <Image src='/about/business_portrait_small.jpg' alt='Photo of Joseph Sotelo' width='375' height='375'>
                    </Image>
                </div>
                <div id='right' className='w-[35vw]'>
                    <h2>
                        Hi!
                    </h2>
                    <p>
                        I’m a human-centered designer based out of Los Angeles. When I’m not in the zone, I enjoy reading, fidgeting with code, and inventing new games to play with my nieces and nephews.
                    </p>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Art and I
                            </AccordionTrigger>
                            <AccordionContent>
                                My earliest creative expression was illustration. I find myself constantly learning to appreciate new kinds of art. Today I have a well-developed eye for aesthetics that I use for my own art and for design.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                Design and I
                            </AccordionTrigger>
                            <AccordionContent>
                                In college I discovered the world of design - graphic, UX/UI, and IxD. I found it to be a beautiful blend of art and practicality. I love submitting my creative and technical skills to the parameters created by other people’s needs. This means that the most fundamental part of the design process is research. Without research, it’s just art.                        
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                Code and I
                            </AccordionTrigger>
                            <AccordionContent>
                                Ever since my first web design class I have been in love with code. From experimenting in Unity to building this website with Next.js, I make every effort to continuously grow in these skills. This is all done through self-learning, extracurricular classes, and the guidance of several mentor friends. I&aposm not an engineer, but I&aposm well-acquanited with what they do.                       
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className='mt-24'>
                <CaseStudyBigImage {...caseStudyImageProps}></CaseStudyBigImage>
            </div>
            </div>
        </div>
      )
}