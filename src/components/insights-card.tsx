
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function InsightsCard({props}: {props: string[]}){

    return(
        <Card className='min-w-[210px] lg:w-[262px]'>
        <CardHeader>
            {props.length >= 2?(
                <>
                    <CardTitle className='mb-2'>{props[0]}</CardTitle>
                    <CardDescription className='text-foreground'>{props[1]}</CardDescription>
                </>
            ): (
                <CardDescription>{props[0]}</CardDescription>  
            )}
        </CardHeader>
    </Card>
    )

}