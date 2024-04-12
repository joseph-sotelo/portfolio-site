'use client'

import Image from 'next/image'
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
            <div id='left' className='w-[25vw] mt-auto mb-auto'>
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
                <Carousel>
                    <CarouselContent>
                        {images.map((image) =>(
                            <CarouselItem >
                                <div>
                                    <Image src={image[0]} alt={image[1]} width='500' height='500' className='w-[100%] h-[100%] object-cover'/>
                                    <p>{image[2]}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

{/* <Swiper 
modules={[Navigation, Pagination]}
spaceBetween={50}
slidesPerView={1}
className='w-[35vw] h-[35vw] bg-black'
navigation
pagination={{clickable: true}}
>
{images.map((image) =>(
    <SwiperSlide >
        <Image src={image[0]} alt={image[1]} width='500' height='500' className='w-[100%] h-[100%] object-cover'/>
        <p>{image[2]}</p>
    </SwiperSlide>
))}
</Swiper> */}