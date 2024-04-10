'use client'

export default function CasStudyOverview({props}: {props: object}){

    return(
        <div className='w-[70vw] ml-auto mr-auto mt-12 mb-12'>
            <h2>
                Overview
            </h2>
            <dl>
                {Object.entries(props).map(([key, value]) =>
                    <>
                        <dt>
                            <strong>
                                {key}
                            </strong>
                        </dt>
                        <dd>
                            {value}
                        </dd>
                    </>
                )}
            </dl>
        </div>
    )
}