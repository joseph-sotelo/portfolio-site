'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function CaseStudyInsights({props}: {props: string[][]}){
    return(
        <div className='w-[70vw] ml-auto mr-auto mt-12 mb-12 flex-wrap'>
            <h2 className='mb-[1rem]'>
                Insights
            </h2>
            <div className='flex flex-row gap-[1.5rem]'>
                {props.map((insight)=>
                            <Card>
                            <CardHeader>
                                <CardTitle>{insight[0]}</CardTitle>
                                <CardDescription>{insight[1]}</CardDescription>
                            </CardHeader>
                        </Card>
                    )   
                }
            </div>
        </div>
    )
}