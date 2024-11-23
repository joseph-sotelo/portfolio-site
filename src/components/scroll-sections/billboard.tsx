'use client'
import Image from "next/image"

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
                    <>
                        <Image key={index} className={`mt-standard-gap w-full ${image[2] ? 'rounded-t-sm' : 'rounded-sm'} border border-border`} width="1200" height="1200" src={image[0]} alt={image[1]}/> 
                        {image[2] && (
                            <p className='border border-border mt-[-1px] p-4 rounded-b-sm'>
                                {image[2]}
                            </p>
                        )}
                    </>
                )                  
            ))}
        </div>
    )
}