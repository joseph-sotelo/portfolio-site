'use client'

export default function CaseStudyOverview({props}){
    const bullets = props.bullets;

    return(
        <div className='w-[70vw] ml-auto mr-auto mt-12 mb-12'>
            <h2 className='mb-[1rem]'>
                Overview
            </h2>
            <dl>
                {bullets.map((bullet, index) =>
                <div key={index}>
                    <>
                        <dt>
                            <strong>
                                {bullet[0]}:
                            </strong>
                        </dt>
                        <dd>
                            {bullet[1]}
                        </dd>
                    </>
                </div>
                )}
            </dl>
        </div>
    )
}