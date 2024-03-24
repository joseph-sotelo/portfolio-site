import { Swiper, SwiperSlide } from 'swiper/react';
// import  { Navigation, Pagination }  from 'swiper';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CaseStudySection({sectionHeader, mainText, bullets, images}: {sectionHeader: string, mainText: string, bullets?: string[], images: string[][]}){
    return(
        <div className='flex'>
                <div id='left'>
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
                {/* <div id='right'>
                    <Swiper spaceBetween={0} slidesPerView={1} modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}>
                        {images.map((image) =>(
                            <SwiperSlide >
                                <Image src={image[0]} alt={image[1]} width='500' height='500'/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div> */}
        </div>
    )
}