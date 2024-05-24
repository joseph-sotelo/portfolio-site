'use client'
import Image from "next/image";

export default function ImageAndCaption({props}: {props: string[]}){
    return(
        <div id='image-wrapper' className='rounded-sm'>
            <div className={`aspect-square border border-border bg-card relative ${props[2] ? 'rounded-t-sm': 'rounded-sm'}`}>
                <Image src={props[0]} alt={props[1]} fill className='object-contain'/>
            </div>
            {props[2] && (
                <p className='border border-border mt-[-1px] p-[1rem] rounded-b-sm text-center'>{props[2]}</p>
            )} 
        </div>
    )
}