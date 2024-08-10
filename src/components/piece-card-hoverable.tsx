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

  
export default function PieceCardHoverable({name, image, page, labels}: {name: string, image: string, page: string, labels: string[]}) {
    return(
        <Link href={page}>
            <Card className='max-w-[375px] sm:max-w-full shadow'>
                <CardContent className='relative'>
                    <div id='card-hover-content' className='transition-opacity absolute w-full h-full opacity-0 hover:opacity-100 rounded-t-sm'>
                        <div className='w-full bg-black bg-opacity-50 h-full p-4'>
                            {
                                labels.map((label, index) =>
                                    <Badge variant='hover' key={index} className='m-[4px]'>
                                        {`#${label}`}
                                    </Badge>
                                )
                            }
                        </div>
                        <div id='scrim' className=''>
                        </div>
                    </div>
                    <Image alt={`${name} cover image`} src={image} className='object-cover w-full h-full aspect-square rounded-t-sm' width='375' height='375'/>
                </CardContent>
                <CardHeader id='card-header' className='px-4 py-3'>
                    <CardTitle>{name}</CardTitle>
                </CardHeader>
            </Card>
        </Link>
    )
}