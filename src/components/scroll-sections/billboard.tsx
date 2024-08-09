'use client'
import Image from "next/image"

export type BillboardType = {
    header: string;
    mainText: string;
    images: string[][];
  }

export function Billboard({props}: {props: BillboardType}){

    return(
        <div className='my-12'>
            <h2 className='text-secondary-foreground'>
                {props.header}
            </h2>
            <p>
                {props.mainText}
            </p>
            {props.images.map((image, index) => (
                image[0] !== undefined && (
                        <Image key={index} className='mt-6 w-full rounded-sm border border-border' width="1200" height="1200" src={image[0]} alt={image[1]}/> 
                )                  
            ))}
        </div>
    )
}