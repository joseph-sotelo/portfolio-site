'use client'

export default function CaseStudyChapter({header}: {header: string | undefined}){

    return(
        <div className='mx-auto w-[67vw] mt-12 mb-12 xl:ml-0 text-[#1FCFB0]'>
            <h1>
                {header}
            </h1>
        </div>
    )
}