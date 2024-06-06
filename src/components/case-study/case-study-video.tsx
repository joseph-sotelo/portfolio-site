'use client'

export default function CaseStudyVideo({header, mainText, src, hostType}: {header?: string, mainText?: string, src?: string, hostType?: string}){

    return(
        <div className='mx-auto w-[67vw] mt-12 mb-12 xl:ml-0'>
            <h2 className='text-secondary-foreground'>
                {header}
            </h2>
            <p className='mb-8 mt-3'>
                {mainText}
            </p>
            {hostType === 'iframe' ? (
                <iframe className='w-full aspect-video rounded-sm' src={src} title="Youtube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            ):(
                <video autoPlay loop muted className='rounded-sm w-[50vw]' width="2000" height="1000">
                    <source src={src} type='video/mp4'/>
                </video>
            )}
        </div>
    )
}