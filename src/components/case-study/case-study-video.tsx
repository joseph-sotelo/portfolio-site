'use client'

export default function CaseStudyVideo({header, mainText, sources, hostType}: {header?: string, mainText?: string, sources: string[], hostType?: string}){

    return(
        <div className='mx-auto w-[67vw] mt-12 mb-12 xl:ml-0'>
            <h2 className='text-secondary-foreground'>
                {header}
            </h2>
            <p className='mt-3'>
                {mainText}
            </p>
            {hostType === 'iframe' ? (
                sources.map((src, index) => (
                    <iframe key='index' className='mt-8 w-full aspect-video rounded-sm' src={src} title="Youtube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                ))
            ):(
                sources.map((src, index) => (
                    <video key='index' autoPlay loop muted className='mt-8 rounded-sm w-[50vw]' width="2000" height="1000">
                        <source src={src} type='video/mp4'/>
                    </video>
                ))
            )}
        </div>
    )
}