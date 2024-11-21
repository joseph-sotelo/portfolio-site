'use client'
import { Input } from "@/components/ui/input"
import Image from "next/image"

export type CodeFragmentBillboardType = {
    header: string;
    mainText?: string;
    lines: string[][];
    images: string[][];
  }

export function CodeFragmentBillBoard({props}: {props: CodeFragmentBillboardType}){

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
                    <>
                        <div className = 'border border-border rounded-sm w-full p-standard-gap my-standard-gap'>
                        {props.lines[index].map((line, lineIndex) => (
                            <div key = {lineIndex}>
                                {line}
                            </div>
                            ))}
                        </div>
                        <Image key={index} className='mt-standard-gap w-full rounded-sm border border-border' width="1200" height="1200" src={image[0]} alt={image[1]}/> 
                    </>
                        
                )                  
            ))}
        </div>
    )
}

          