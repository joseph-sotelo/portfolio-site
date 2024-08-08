'use client'
import Image from "next/image";

type CaseStudyBigImageType = {
    key: string,
    componentType: string,
    src: string,
    alt: string,
    caption: string,
    captionSuffix: string,
}

export default function CaseStudyBigImage({props}: {props: CaseStudyBigImageType}){

    return(
        <div className='mt-12 mb-12 rounded-sm'>
            <Image src={props.src} alt={props.alt} width='700' height='500' className='w-[100%] rounded-t-sm'></Image>
                <p className='border border-border mt-[-1px] p-[1rem] rounded-b-sm'>
                    {props.caption}
                    <em className='font-normal'>
                        {props.captionSuffix}
                    </em>
                </p>
        </div>
    )
}