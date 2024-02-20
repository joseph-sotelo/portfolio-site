import { Swiper, SwiperSlide } from 'swiper/react';

export default function ParagraphAndImage({sectionHeader, mainText, bullets, image}: {sectionHeader: string, mainText: string, bullets: string[], image: string}){
    return(
        <div className='flex'>
            <div>
                <div>
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
            </div>
        </div>
    )
}