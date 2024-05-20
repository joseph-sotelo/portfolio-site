'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function CaseStudyInsights({title, caption, insights}: {title: string | undefined, caption?: string, insights: string[][]}){
    return(
        <div className='my-12 flex-wrap w-[67vw] mx-auto xl:ml-0'>
            <h2 className='text-secondary-foreground'>
                {title}
            </h2>
            {caption && (
                <h6 className='mb-[2rem]'>
                    {caption}
                </h6>
            )}
            <div className='flex flex-col gap-[1.5rem] xl:flex-row xl:items-start'>
                {insights.map((insight, index)=>
                            <Card key={index} className='min-w-[210px] xl:w-[262px]'>
                            <CardHeader>
                                {insight.length >= 2?(
                                    <>
                                        <CardTitle className='mb-[.5rem]'>{insight[0]}</CardTitle>
                                        <CardDescription className='text-foreground'>{insight[1]}</CardDescription>
                                    </>
                                ): (
                                    <CardDescription key={index}>{insight[0]}</CardDescription>  
                                )}
                            </CardHeader>
                        </Card>
                    )   
                }
            </div>
        </div>
    )
}