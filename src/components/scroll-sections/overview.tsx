'use client'
import Image from "next/image";

export type OverviewType = {
    header: string; 
    descriptiveList: string[][]; 
    image: string;
}

export function Overview({props}: {props: OverviewType}){

    return(
        <div className='w-[67vw] sm:w-[60vw] md:w-[67vw] flex flex-col xl:flex-row justify-between mb-12 mx-auto xl:ml-0'>
             <div id='left' className='xl:w-[28vw] lg:mt-[11.8rem] mt-[.75rem]'>
                <h2 className='text-secondary-foreground'>
                    {props.header}
                </h2>
                <ul className='xl:mt-[-.1rem]'>
                {props.descriptiveList.map((listItem, index) =>
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
                <Image src={props.image} alt={`High fidelity mockups from the ${props.header} project`} width='600' height='600' className='mr-auto ml-auto border border-border w-full rounded-sm'/>
            </div>
        </div>
    )
}