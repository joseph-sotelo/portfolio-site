'use client'

export type ParagraphType = {
    header: string; 
    mainText: string;
}

export function Paragraph({props}: {props: ParagraphType}){

    return(
        <div className='my-12'>
            <h2 className='text-secondary-foreground'>
                {props.header}
            </h2>
            <p>
                {props.mainText}
            </p>
        </div>
    )
}