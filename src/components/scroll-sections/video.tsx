'use client'

export type VideoType = {
    header: string;
    mainText: string; 
    sources: string[]; 
    hostType: string;
}

export function Video({props}: {props: VideoType}){

    return(
        <div className='mx-auto w-[67vw] mt-12 mb-12 xl:ml-0'>
            <h2 className='text-secondary-foreground'>
                {props.header}
            </h2>
            <p className='mt-3'>
                {props.mainText}
            </p>
            {props.hostType === 'iframe' ? (
                props.sources.map((src, index) => (
                    <iframe key='index' className='mt-8 w-full aspect-video rounded-sm' src={src} title="Youtube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                ))
            ):(
                props.sources.map((src, index) => (
                    <video key='index' autoPlay loop muted className='mt-8 rounded-sm w-[50vw]' width="2000" height="1000">
                        <source src={src} type='video/mp4'/>
                    </video>
                ))
            )}
        </div>
    )
}