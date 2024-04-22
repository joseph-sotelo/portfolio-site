'use client'

export default function CaseStudyVideo({header, mainText, src}: {header: string, mainText: string, src: string}){

    return(
        <div className='w-[70vw] ml-auto mr-auto mt-12 mb-12'>
            <h2>
                {header}
            </h2>
            <p className='mt-6'>
                {mainText}
            </p>
            <iframe className='mt-12 w-full aspect-video' src={src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}