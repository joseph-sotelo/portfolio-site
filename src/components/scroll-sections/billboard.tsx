'use client'
import Image from "next/image"
import { Skeleton } from "../ui/skeleton";
import { Image as ImageIcon } from 'lucide-react'

export type BillboardType = {
    header: string;
    mainText: string;
    images: string[][];
  }

export function Billboard({props}: {props: BillboardType}){

    return(
        <div>
            <h2 className='text-secondary-foreground'>
                {props.header}
            </h2>
            <p>
                {props.mainText}
            </p>
            {props.images.map((image, index) => (
                image[0] !== undefined && (
                    <div className={`overflow-hidden mt-standard-gap w-full border border-border rounded-sm relative ${index < props.images.length && 'mb-medium-gap'}`}>
                        <Skeleton className="absolute"/>
                        <Image key={index} className='scale-[101%] -ml-[1px] border-b border-border' width="1200" height="1200" src={image[0]} alt={image[1]}/> 
                        {image[2] && (
                            <div className="px-4 pb-4 pt-5">
                                <p>
                                    {image[2]}
                                </p>
                            </div>
                        )}
                    </div>
                )                  
            ))}
        </div>
    )
}