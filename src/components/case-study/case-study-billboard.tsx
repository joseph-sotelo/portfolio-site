'use client'
import Image from "next/image"

export default function CaseStudyBillBoard({header, mainText, src}: {header: string | undefined, mainText: string | undefined, src: string | undefined}){

    return(
        <div className='mx-auto w-[67vw] mt-12 mb-12 xl:ml-0'>
            <h2 className='text-secondary-foreground'>
                {header}
            </h2>
            <p>
                {mainText}
            </p>
            {
                src !== undefined && mainText !== undefined && (
                        <Image className='mt-7 w-full rounded-sm border border-border' width="1200" height="1200" src={src} alt={mainText}/>                   
                )
            }
        </div>
    )
}