'use client'

import InsightsCard from "../insights-card";

export type InsightsScrollSectionType = {
    header: string;
    secondaryText?: string;
    descriptiveList: string[][];
}

export function InsightsScrollSection({props}: {props: InsightsScrollSectionType}){
    return(
        <div className='flex flex-col gap-standard-gap'>
            <h2 className='text-secondary-foreground'>
                {props.header}
            </h2>
            {props.secondaryText && (
                <h6 >
                    {props.secondaryText}
                </h6>
            )}
            <div className='flex flex-col gap-standard-gap xl:flex-row xl:items-start'>
                {props.descriptiveList.map((listItem, index)=>
                    <div key={index}>
                        <InsightsCard props={listItem}/>
                    </div>
                    )   
                }
            </div>
        </div>
    )
}