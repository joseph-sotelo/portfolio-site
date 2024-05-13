'use client'
import Image from "next/image";

export default function CaseStudyBigImage({src, alt, caption}: {src: string, alt: string, caption: string}){

    return(
        <div className='mt-12 mb-12'>
            <Image src={src} alt={alt} width='700' height='500' className='w-[100%]'></Image>
                <p className='border border-border mt-[-1px] p-[1rem]'>{caption}</p>
        </div>
    )
}