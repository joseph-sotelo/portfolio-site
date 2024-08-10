'use client'

export type BigTextType = {
    secondaryText: string;
    mainText: string;
}

export function BigText({props}: {props: BigTextType}){
    return(
        <div>
            <h6 className='mb-standard-gap'>
                {props.secondaryText}
            </h6>
            <h3>
                {props.mainText}
            </h3>
        </div>
    )
}