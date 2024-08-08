'use client'

export type ParagraphType = {
    header: string; 
    mainText: string;
}

export function Paragraph({props}: {props: ParagraphType}){

    return(
        <div className='mx-auto w-[67vw] mt-12 mb-12 xl:ml-0'>
            <h2 className='text-secondary-foreground'>
                {props.header}
            </h2>
            <p>
                {props.mainText}
            </p>
        </div>
    )
}