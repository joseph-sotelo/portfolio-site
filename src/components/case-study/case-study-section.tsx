'use client'

import Image from 'next/image'
import ImageAndCaption from '../ui/image-and-caption'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  type caseStudySection = {
    sectionHeader: string | undefined;
    mainText: string | undefined;
    bullets: string[] | undefined;
    images: string[][];
  }

export default function CaseStudySection(props:caseStudySection){
    return(
        <div className='flex justify-between mt-24 mb-24'>
            <div id='left' className='w-[28vw] mt-auto mb-auto'>
                <h2>
                    {props.sectionHeader}
                </h2>
                <div>
                    <p className='mt-6'>
                        {props.mainText}
                    </p>
                    {props.bullets && (
                        <ul className='mt-6 pl-[14px]'>
                            {props.bullets.map((bullet, index) => (
                                <li key ={index} className='list-disc mb-6'>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div id='right' className='w-[35vw]'>
                {props.images.length >= 2 &&(
                    <Carousel>
                    <CarouselContent>
                        {props.images.map((image, index) =>(
                                <CarouselItem key={index}>
                                    <ImageAndCaption props={image}></ImageAndCaption>
                                </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>
                )}
                {props.images.length == 1 && (
                    <ImageAndCaption props={props.images[0]}></ImageAndCaption>
                )
                }
            </div>
        </div>
    )
}