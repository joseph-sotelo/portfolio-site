'use client'

export type ChapterHeaderType = {
    header: string;
}

export function ChapterHeader({props}: {props: ChapterHeaderType}){

    return(
        <div className='mx-auto w-[67vw] mt-12 mb-12 xl:ml-0 text-[#1FCFB0]'>
            <h1>
                {props.header}
            </h1>
        </div>
    )
}