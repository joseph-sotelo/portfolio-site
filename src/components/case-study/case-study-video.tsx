'use client'

export default function CaseStudyVideo({header, mainText, src}: {header: string | undefined, mainText: string | undefined, src: string | undefined}){

    return(
        <div className='mx-auto w-[67vw] mt-12 mb-12 xl:ml-0'>
            <h2 className='text-secondary-foreground'>
                {header}
            </h2>
            <p>
                {mainText}
            </p>
            <iframe className='mt-12 w-full aspect-video rounded-sm' width="1184" height="666" src="https://www.youtube.com/embed/ZsmuhoPbTFE" title="Discover Olvera Final Deliverable" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}