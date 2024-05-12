'use client'

export default function CaseStudyVideo({header, mainText, src}: {header: string | undefined, mainText: string | undefined, src: string | undefined}){

    return(
        <div className='mt-12 mb-12'>
            <h2 className='text-secondary-foreground'>
                {header}
            </h2>
            <p>
                {mainText}
            </p>
            <iframe className='mt-12 w-full aspect-video' src={src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}