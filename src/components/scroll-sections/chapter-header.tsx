'use client'

export type ChapterHeaderType = {
    header: string;
}

export function ChapterHeader({props}: {props: ChapterHeaderType}){

    return(
        <div className='my-12 text-[#1FCFB0]'>
            <h1>
                {props.header}
            </h1>
        </div>
    )
}