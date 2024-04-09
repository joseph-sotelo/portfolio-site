'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'


export default function CaseStudySection({sectionHeader, mainText, bullets, images}: {sectionHeader: string, mainText: string, bullets?: string[], images: string[][]}){
    return(
        <div className='flex justify-between w-[70vw] ml-auto mr-auto mt-12 mb-12'>
            <div id='left' className='w-[25vw] mt-auto mb-auto'>
                <h2>
                    {sectionHeader}
                </h2>
                <span>
                    {mainText}
                    {bullets && (
                        <ul className='mt-6 pl-[14px]'>
                            {bullets.map((bullet) => (
                                <li className='list-disc mb-6'>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    )}
                </span>
            </div>
            <div id='right' className='w-[35vw]'>
                <Swiper 
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
                </Swiper>
            </div>
        </div>
    )
}