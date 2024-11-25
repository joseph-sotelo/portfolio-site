'use client'

export type BigTextType = {
    secondaryText?: string;
    mainText: string;
    postScript?: string;
}

export function BigText({props}: {props: BigTextType}){
    return(
        <div>
            <h6>
                {props.secondaryText}
            </h6>
            <h3 className='mt-standard-gap'>
                {props.mainText}
            </h3>
            <h6 className='mt-standard-gap'>
                {props.postScript}
            </h6>
        </div>
    )
}