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
                    <div className={`overflow-hidden mt-standard-gap w-full border border-border rounded-sm ${index < props.images.length && 'mb-medium-gap'}`}>
                        <Image key={index} className='scale-[101%] -ml-[1px]' width="1200" height="1200" src={image[0]} alt={image[1]}/> 
                        {image[2] && (
                            <div className="border-t border-border px-4 pb-4 pt-5">
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