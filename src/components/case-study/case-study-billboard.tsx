'use client'
import Image from "next/image"

type caseStudyBillBoard = {
    header: string | undefined;
    mainText: string | undefined;
    images: string[][] ;
  }

export default function CaseStudyBillBoard(props: caseStudyBillBoard){

    return(
        <div className='mx-auto w-[67vw] mt-12 mb-12 xl:ml-0'>
            <h2 className='text-secondary-foreground'>
                {props.header}
            </h2>
            <p>
                {props.mainText}
            </p>
            {props.images.map((image, index) => (
                image[0] !== undefined && (
                        <Image key={index} className='mt-7 w-full rounded-sm border border-border' width="1200" height="1200" src={image[0]} alt={image[1]}/> 
                )                  
            ))}
        </div>
    )
}