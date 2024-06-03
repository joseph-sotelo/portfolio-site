'use client'

export default function CaseStudyParagraph({header, mainText}: {header?: string, mainText?: string}){

    return(
        <div className='mx-auto w-[67vw] mt-12 mb-12 xl:ml-0'>
            <h2 className='text-secondary-foreground'>
                {header}
            </h2>
            <p>
                {mainText}
            </p>
        </div>
    )
}