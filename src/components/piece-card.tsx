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

  
export default function PieceCard({name, image, page, labels}: {name: string, image: string, page: string, labels: string[]}) {
    return(
        <Link href={page}>
            <Card className='w-[90vw] sm:w-[50vw] md:w-[375px] shadow'>
                <CardContent>
                        <Image alt={`${name} cover image`} src={image} className='object-cover w-full h-full aspect-square rounded-t-sm' width='375' height='375'/>
                </CardContent>
                <CardHeader id='card-header' className='px-4 py-3'>
                    <CardTitle>{name}</CardTitle>
                </CardHeader>
                <CardFooter className='w-full px-3 pb-4 hidden md:block'>
                    <div className='w=[100%]'>
                        {
                            labels.map((label, index) =>
                                <Badge variant='outline' key={index} className='m-[4px]'>
                                    {label}
                                </Badge>
                            )
                        }
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}