'use client'

import ImageAndCaption from '../ui/image-and-caption'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export type StandardScrollSectionType = {
    header: string; 
    mainText?: string; 
    bullets?: string[]; 
    images: string[][]
}

export function StandardScrollSection({props}: {props: StandardScrollSectionType}){
    return(
        <div className='w-[67vw] sm:w-[60vw] md:w-[67vw] flex flex-col xl:flex-row justify-between my-24 mx-auto xl:ml-0'>
            <div id='left' className='my-auto sm:w-[58.5vw] xl:w-[25vw]'>
                <h2 className='text-secondary-foreground'>
                    {props.header}
                </h2>
                <div>
                    <p className='mb-6'>
                        {props.mainText}
                    </p>
                    {props.bullets && (
                        <ul className='mt-6 pl-[14px] lg:pl-0'>
                            {props.bullets.map((bullet, index) => (
                                <li key ={index} className='list-[square] mb-6'>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div id='right' className='mt-6 sm:mt-0 sm:w-[50vw] md:w-[67vw] sm:mx-auto xl:w-[35vw] xl:mr-0'>
                {props.images.length >= 2 &&(
                    <Carousel>
                    <CarouselContent>
                        {props.images.map((image, index) =>(
                                <CarouselItem key={index}>
                                    <ImageAndCaption props={image}></ImageAndCaption>
                                </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className='absolute top-full flex justify-around w-full'>
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
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