'use client'

import StandardCarousel from "../standard-carousel";

export type StandardScrollSectionType = {
    header: string; 
    mainText?: string; 
    bullets?: string[]; 
    images: string[][]
}

export function StandardScrollSection({props}: {props: StandardScrollSectionType}){
    return(
        <div className='flex flex-col xl:flex-row justify-between'>
            <div id='left' className='my-auto'>
                <h2 className='text-secondary-foreground mb-standard-gap'>
                    {props.header}
                </h2>
                <div>
                    <p className='mb-standard-gap'>
                        {props.mainText}
                    </p>
                    {props.bullets && (
                        <ul className='pl-[14px] lg:pl-0'>
                            {props.bullets.map((bullet, index) => (
                                <li key ={index} className='list-[square] mb-standard-gap'>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div id='right'>
                <StandardCarousel props={props.images} />
            </div>
        </div>
    )
}