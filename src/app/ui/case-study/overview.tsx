'use client'

export default function Overview({props}: {props: object}){

    return(
        <div>
            <dl>
                {Object.entries(props).map(([key, value]) =>
                    <>
                        <dt>
                            {key}
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