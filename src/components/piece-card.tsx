'use client';
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from 'next/image';
  import { Badge } from "@/components/ui/badge"

  
export default function PieceCard({name, image, page, labels}: {name: string, image: string, page: string, labels: string[]}) {
    return(
        <Link href={page}>
            <Card className='w-[375px]'>
                <CardContent>
                    <Image alt={`${name} cover image`} src={image} className='object-cover w-[375px] h-[375px]' width='375' height='375'/>
                </CardContent>
                <CardHeader id='card-header'>
                    <CardTitle>{name}</CardTitle>
                </CardHeader>
                <CardFooter className='w-[375px]'>
                    <div className='w=[100%]'>
                        {
                            labels.map((label, index) =>
                                <Badge variant='outline' key={index}>
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