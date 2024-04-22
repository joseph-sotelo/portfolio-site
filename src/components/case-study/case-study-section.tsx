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


export default function CaseStudySection({sectionHeader, mainText, bullets, images}: {sectionHeader: string, mainText?: string, bullets?: string[], images: string[][]}){
    return(
        <div className='flex justify-between w-[70vw] ml-auto mr-auto mt-12 mb-12'>
            <div id='left' className='w-[28vw] mt-auto mb-auto'>
                <h2>
                    {sectionHeader}
                </h2>
                <div>
                    <p className='mt-6'>
                        {mainText}
                    </p>
                    {bullets && (
                        <ul className='mt-6 pl-[14px]'>
                            {bullets.map((bullet) => (
                                <li className='list-disc mb-6'>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div id='right' className='w-[35vw]'>
                {images.length >= 2 &&(
                    <Carousel>
                    <CarouselContent>
                        {images.map((image) =>(
                                <CarouselItem >
                                    <ImageAndCaption props={image}></ImageAndCaption>
                                </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>
                )}
                {images.length == 1 && (
                    <ImageAndCaption props={images[0]}></ImageAndCaption>
                )
                }
            </div>
        </div>
    )
}