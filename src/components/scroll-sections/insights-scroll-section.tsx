'use client'

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export type InsightsScrollSectionType = {
    header: string;
    secondaryText?: string;
    descriptiveList: string[][];
}

export function InsightsScrollSection({props}: {props: InsightsScrollSectionType}){
    return(
        <div className='my-12 flex-wrap w-[67vw] mx-auto xl:ml-0'>
            <h2 className='text-secondary-foreground'>
                {props.header}
            </h2>
            {props.secondaryText && (
                <h6 className='mb-[2rem]'>
                    {props.secondaryText}
                </h6>
            )}
            <div className='flex flex-col gap-[1.5rem] xl:flex-row xl:items-start'>
                {props.descriptiveList.map((listItem, index)=>
                            <Card key={index} className='min-w-[210px] xl:w-[262px]'>
                            <CardHeader>
                                {listItem.length >= 2?(
                                    <>
                                        <CardTitle className='mb-[.5rem]'>{listItem[0]}</CardTitle>
                                        <CardDescription className='text-foreground'>{listItem[1]}</CardDescription>
                                    </>
                                ): (
                                    <CardDescription key={index}>{listItem[0]}</CardDescription>  
                                )}
                            </CardHeader>
                        </Card>
                    )   
                }
            </div>
        </div>
    )
}