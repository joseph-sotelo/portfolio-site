'use client'
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

export type OverviewType = {
    header: string; 
    descriptiveList: string[][]; 
    image: string;
}

export function Overview({props}: {props: OverviewType}){

    return(
        <div className='flex flex-col flex-col-reverse gap-standard-gap justify-between xl:grid xl:gap-medium-gap xl:grid-cols-9'>
             <div id='left' className='xl:col-span-4 xl:mt-[11px]'>
                <h2 className='text-secondary-foreground'>
                    {props.header}
                </h2>
                <ul>
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
             <div id='right' className='xl:col-span-5 overflow-hidden border border-border rounded-sm relative'>
                <Skeleton className="absolute"/>
                <Image src={props.image} alt={`High fidelity mockups from the ${props.header} project`} width='600' height='600' className='scale-[101%]'/>
            </div>
        </div>
    )
}