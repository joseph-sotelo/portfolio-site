'use client'

export type VideoType = {
    header: string;
    mainText: string; 
    sources: string[]; 
    hostType: string;
}

export function Video({props}: {props: VideoType}){

    return(
        <div>
            <h2 className='text-secondary-foreground'>
                {props.header}
            </h2>
            <p>
                {props.mainText}
            </p>
            {props.hostType === 'iframe' ? (
                props.sources.map((src, index) => (
                    <iframe key='index' className='w-full aspect-video rounded-sm mt-standard-gap' src={src} title="Youtube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                ))
            ):(
                props.sources.map((src, index) => (
                    <video key='index' autoPlay loop muted className='rounded-sm mt-standard-gap' width="2000" height="1000">
                        <source src={src} type='video/mp4'/>
                    </video>
                ))
            )}
        </div>
    )
}