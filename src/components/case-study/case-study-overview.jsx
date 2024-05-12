'use client'
import Image from "next/image";

export default function CaseStudyOverview({props}){
    const bullets = props.bullets;

    return(
        <div className='flex justify-between mt-12 mb-12'>
             <div id='left' className='w-[28vw] mt-[11.35rem] mb-auto'>
                <h2 className='mb-[1rem] text-secondary-foreground'>
                    Overview
                </h2>
                <ul>
                    {bullets.map((bullet, index) =>
                    <div key={index} className='mb-[1.5rem]'>
                        <>
                            <li>
                                <strong>
                                    {bullet[0]}
                                </strong>
                                {bullet[1]}
                            </li>
                        </>
                    </div>
                    )}
                </ul>
             </div>
             <div id='right' className='w-[35vw]'>
                <Image src={props.image} alt={`High fidelity mockups from the ${props.title} project`} width='600' height='600' className='mr-auto ml-auto'/>
            </div>
        </div>
    )
}