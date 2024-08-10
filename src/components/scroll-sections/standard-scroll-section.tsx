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
        <div className='xl:grid xl:gap-medium-gap xl:grid-cols-9'>
            <div id='left' className='mb-standard-gap xl:col-span-4 xl:my-auto'>
                <h2 className='text-secondary-foreground'>
                    {props.header}
                </h2>
                <div>
                    <p className='mb-standard-gap'>
                        {props.mainText}
                    </p>
                    {props.bullets && (
                        <ul className='pl-[14px]'>
                            {props.bullets.map((bullet, index) => (
                                <li key ={index} className='list-[square] mb-standard-gap'>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div id='right' className='xl:col-span-5'>
                <StandardCarousel props={props.images} />
            </div>
        </div>
    )
}