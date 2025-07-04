'use client';
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from 'next/image';
  import { Badge } from "@/components/ui/badge"
  import { Skeleton } from "@/components/ui/skeleton"
  
export default function PieceCard({name, image, page, labels}: {name: string, image: string, page: string, labels: string[]}) {
    return(
        <Link href={page}>
            <Card className='max-w-[500px] md:max-w-full shadow overflow-hidden'>
                <CardContent className='relative'>                    
                    <Image alt={`${name} cover image`} src={image} className='object-cover w-full h-full aspect-square' width='375' height='375'/>
                    <Skeleton className="absolute"/>
                </CardContent>
                <CardHeader id='card-header' className='px-4 py-3'>
                    <CardTitle>{name}</CardTitle>
                </CardHeader>
                <CardFooter className='w-full px-4 pb-4 max-h-[76px] flex items-start'>
                    <div className='w-full max-h-[60px] overflow-y-clip'>
                        {
                            labels.map((label, index) =>
                                <Badge variant='outline' key={index} className='m-[4px]'>
                                    {`#${label}`}
                                </Badge>
                            )
                        }
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}