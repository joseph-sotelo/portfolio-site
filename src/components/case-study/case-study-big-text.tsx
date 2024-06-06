'use client'

export default function CaseStudyBigText({secondaryText, mainText}: {secondaryText: string | undefined, mainText: string | undefined}){
    return(
        <div className='mx-auto w-[67vw] mt-12 mb-12 xl:ml-0'>
            <h6 className='mb-[1.5rem]'>
                {secondaryText}
            </h6>
            <h3>
                {mainText}
            </h3>
        </div>
    )
}