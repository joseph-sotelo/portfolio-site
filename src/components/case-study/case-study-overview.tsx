'use client'
import Image from "next/image";

export default function CaseStudyOverview({header, descriptiveList, image}: {header: string, descriptiveList: string[][], image: string}){

    return(
        <div className='w-[67vw] sm:w-[60vw] md:w-[67vw] flex flex-col xl:flex-row justify-between mb-12 mx-auto xl:ml-0'>
             <div id='left' className='xl:w-[28vw] lg:mt-[11.25rem] mt-[.75rem]'>
                <h2 className='text-secondary-foreground'>
                    {header}
                </h2>
                <ul className='xl:mt-[-.1rem]'>
                {descriptiveList.map((listItem, index) =>
                    <div key={index}>
                        <>
                            <li>
                                <strong>
                                    {listItem[0]}
                                </strong>
                                {listItem[1]}
                            </li>
                            <br />
                        </>
                    </div>
                    )}
                </ul>
             </div>
             <div id='right' className='xl:w-[35vw]'>
                <Image src={image} alt={`High fidelity mockups from the ${header} project`} width='600' height='600' className='mr-auto ml-auto border border-border w-full rounded-sm'/>
            </div>
        </div>
    )
}

// className=''