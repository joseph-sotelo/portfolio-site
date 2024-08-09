'use client'

export type BigTextType = {
    secondaryText: string;
    mainText: string;
}

export function BigText({props}: {props: BigTextType}){
    return(
        <div className='my-12'>
            <h6 className='mb-6'>
                {props.secondaryText}
            </h6>
            <h3>
                {props.mainText}
            </h3>
        </div>
    )
}