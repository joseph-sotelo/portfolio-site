'use client'
import Image from "next/image";

export default function ImageAndCaption({props}: {props: string[]}){
    return(
        <div id='image-wrapper'>
        <div className='aspect-square border border-border bg-[#f5f5f5] relative'>
            <Image src={props[0]} alt={props[1]} fill className='object-contain static'/>
        </div>
        <p className='border border-border mt-[-1px] p-[.5rem]'>{props[2]}</p>
    </div>
    )
}