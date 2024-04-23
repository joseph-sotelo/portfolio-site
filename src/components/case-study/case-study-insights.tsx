'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function CaseStudyInsights({title, caption, insights}: {title: string, caption?: string, insights: string[][]}){
    return(
        <div className='w-[70vw] ml-auto mr-auto mt-12 mb-12 flex-wrap'>
            <h2 className='mb-[1rem]'>
                {title}
            </h2>
            {caption && (
                <h6 className='mb-[2rem]'>
                    {caption}
                </h6>
            )}
            <div className='flex flex-row gap-[1.5rem]'>
                {insights.map((insight, index)=>
                            <Card key={index}>
                            <CardHeader>
                                {insight.length >= 2?(
                                    <>
                                        <CardTitle className='mb-[.5rem]'>{insight[0]}</CardTitle>
                                        <CardDescription>{insight[1]}</CardDescription>
                                    </>
                                ): (
                                    <CardDescription key={index}>{insight[0]}</CardDescription>  
                                ) 
                                }
                            </CardHeader>
                        </Card>
                    )   
                }
            </div>
        </div>
    )
}