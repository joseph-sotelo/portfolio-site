'use client'

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function CaseStudyInsights({header, secondaryText, descriptiveList}: {header?: string, secondaryText?: string, descriptiveList: string[][]}){
    return(
        <div className='my-12 flex-wrap w-[67vw] mx-auto xl:ml-0'>
            <h2 className='text-secondary-foreground'>
                {header}
            </h2>
            {secondaryText && (
                <h6 className='mb-[2rem]'>
                    {secondaryText}
                </h6>
            )}
            <div className='flex flex-col gap-[1.5rem] xl:flex-row xl:items-start'>
                {descriptiveList.map((listItem, index)=>
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