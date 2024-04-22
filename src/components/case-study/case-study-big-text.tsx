'use client'

export default function CaseStudyBigText({secondaryText, primaryText}: {secondaryText: string, primaryText: string}){
    return(
        <div className=' w-[70vw] ml-auto mr-auto mt-12 mb-12'>
            <h6 className='mb-[1rem]'>
                {secondaryText}
            </h6>
            <h3>
                {primaryText}
            </h3>
        </div>
    )
}