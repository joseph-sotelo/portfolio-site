'use client'

export type BigTextType = {
    secondaryText: string;
    mainText: string;
}

export function BigText({props}: {props: BigTextType}){
    return(
        <div className='mx-auto w-[67vw] mt-12 mb-12 xl:ml-0'>
            <h6 className='mb-[1.5rem]'>
                {props.secondaryText}
            </h6>
            <h3>
                {props.mainText}
            </h3>
        </div>
    )
}