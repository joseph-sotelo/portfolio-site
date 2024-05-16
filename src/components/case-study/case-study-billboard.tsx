'use client'
import Image from "next/image";

export default function CaseStudyBillBoard({header, mainText, src, alt, caption}: {header?: string, mainText?: string, src: string, alt: string, caption: string}){

    return(
        <div className='mx-auto w-[67vw] mt-12 mb-12 xl:ml-0'>
            <h2 className='text-secondary-foreground'>
                {header}
            </h2>
            <p>
                {mainText}
            </p>
            <Image src={src} alt={alt} width='700' height='500' className='w-[100%] rounded-t-sm border borde-border'></Image>
            <p className='mt-12 w-full border border-border rounded-b-sm'>{caption}</p>
        </div>
    )
}