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
                        <ul>
                            {bullets.map((bullet) => (
                                <li>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    )}
                </span>
            </div>
            <div id='right' className='w-[35vw] h-300'>
                <Swiper 
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    className='w-500px h-500px'
                    navigation
                    pagination={{clickable: true}}
                >
                    {images.map((image) =>(
                        <SwiperSlide >
                            <Image src={image[0]} alt={image[1]} width='500' height='500' className='w-[35vw]'/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}