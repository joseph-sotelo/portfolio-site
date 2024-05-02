'use client'
import Image from "next/image";

export default function CaseStudyOverview({props}){
    const bullets = props.bullets;

    return(
        <div className='flex justify-between mt-12 mb-12'>
             <div id='left' className='w-[28vw] mt-auto mb-auto'>
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
             <div id='right' className='w-[35vw]'>
                <Image src={props.image} alt={`High fidelity mockups from the ${props.title} project`} width='600' height='600' className='mr-auto ml-auto'/>
            </div>
        </div>
    )
}