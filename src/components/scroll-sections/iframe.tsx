'use client'
import Image from "next/image"

export type IFrameType = {
    header: string;
    mainText: string;
    src: string;
}

export function IFrame({props}: {props: IFrameType}){

    return(
        <div>
            <h2 className='text-secondary-foreground'>
                {props.header}
            </h2>
            <p>
                {props.mainText}
            </p>
            <div className='w-full mt-standard-gap'>
                <iframe className="w-full aspect-square border border-border rounded-sm" src={props.src} allowFullScreen></iframe>
            </div>
        </div>
    )
}