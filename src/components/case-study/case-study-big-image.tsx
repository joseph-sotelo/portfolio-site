'use client'
import Image from "next/image";

export default function CaseStudyBigImage({src, alt, caption}: {src: string, alt: string, caption: string}){

    return(
        <div className='w-[70vw] ml-auto mr-auto mt-12 mb-12'>
            <Image src={src} alt={alt} width='700' height='500' className='w-[100%]'></Image>
            <p className='mt-[1rem]'>{caption}</p>
        </div>
    )
}