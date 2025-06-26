'use client'
import Image from "next/image";
import { Skeleton } from "./skeleton";

export default function ImageAndCaption({props}: {props: string[]}){
    return(
        <div id='image-wrapper' className='rounded-sm'>
            <div className={`aspect-square border border-border overflow-hidden bg-card relative ${props[2] ? 'rounded-t-sm': 'rounded-sm'}`}>
                <Skeleton className="absolute"/>
                <Image 
                    src={props[0]} 
                    alt={props[1]} 
                    width={1100}
                    height={1100}
                    className='w-[102%] h-[102%] object-cover -mt-[1%] absolute blur-2xl'
                />
                <div className='absolute bg-black/10 w-full h-full'/>
                <Image src={props[0]} alt={props[1]} fill className='aspect-square object-contain absolute'/>
            </div>
            {props[2] && (
                <p className='border border-border mt-[-1px] p-[1rem] rounded-b-sm text-center'>{props[2]}</p>
            )} 
        </div>
    )
}