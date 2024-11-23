
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function InsightsCard({props}: {props: string[]}){

    console.log(props.length)
    return(
        <Card className='min-w-[210px] lg:w-[262px]'>
        <CardHeader>
            <CardTitle className='mb-2'>{props[0]}</CardTitle>
                {props.slice(1).map((newLine, index) =>
                    <CardDescription key={index} className='text-foreground'>
                        {index !== 0 && (
                            <br />
                        )}
                        {newLine}
                    </CardDescription>
                )}
        </CardHeader>
    </Card>
    )
}