'use client'
import Image from "next/image";

export type BigImageType = {
    key: string,
    componentType: string,
    src: string,
    alt: string,
    caption: string,
    captionSuffix: string,
}

export function BigImage({props}: {props: BigImageType}){

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