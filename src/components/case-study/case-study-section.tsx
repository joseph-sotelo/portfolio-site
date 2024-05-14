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
        <div className='w-[67vw] flex flex-col xl:flex-row justify-between my-24 mx-auto xl:ml-0'>
            <div id='left' className='mt-auto mb-auto xl:w-[25vw]'>
                <h2 className='text-secondary-foreground'>
                    {props.sectionHeader}
                </h2>
                <div>
                    <p className='mb-6'>
                        {props.mainText}
                    </p>
                    {props.bullets && (
                        <ul className='mt-6 pl-[14px]'>
                            {props.bullets.map((bullet, index) => (
                                <li key ={index} className='list-[square] mb-6'>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div id='right' className='xl:w-[35vw]'>
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