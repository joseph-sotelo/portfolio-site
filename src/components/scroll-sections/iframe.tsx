'use client'
import { useState, useEffect } from "react";

export type IFrameType = {
    header: string;
    mainText: string;
    src: string;
}

export function IFrame({props}: {props: IFrameType}){

    // below useState and useEffect , as well as style attribute in the iframe wrapper, is used to ensure that the iframe never overflows the height of the screen
    const [isLandscape, setIsLandscape] = useState(false)
    const [windowHeight, setWindowHeight] = useState(0)
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setIsLandscape(window.innerWidth > window.innerHeight);
            setWindowHeight(window.innerHeight);
            setWindowWidth(window.innerWidth);
            console.log(windowHeight + ', ' + window.innerWidth);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return(
        <div>
            <h2 className='text-secondary-foreground'>
                {props.header}
            </h2>
            <p>
                {props.mainText}
            </p>
            <div className='w-full mt-standard-gap'>
                <iframe style={{height: isLandscape ? `${windowHeight-100}px` : `${windowWidth}px` }} className='w-full border border-border rounded-sm' src={props.src} allowFullScreen></iframe>
            </div>
        </div>
    )
}