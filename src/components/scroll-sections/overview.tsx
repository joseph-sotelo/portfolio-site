'use client'
import Image from "next/image";

export type OverviewType = {
    header: string; 
    descriptiveList: string[][]; 
    image: string;
}

export function Overview({props}: {props: OverviewType}){

    return(
        <div className='flex flex-col xl:flex-row justify-between my-12'>
             <div id='left' className='lg:mt-[11.8rem]'>
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