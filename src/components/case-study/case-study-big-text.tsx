'use client'

export default function CaseStudyBigText({secondaryText, primaryText}: {secondaryText: string | undefined, primaryText: string | undefined}){
    return(
        <div className='mt-12 mb-12'>
            <h6 className='mb-[1rem]'>
                {secondaryText}
            </h6>
            <h3>
                {primaryText}
            </h3>
        </div>
    )
}