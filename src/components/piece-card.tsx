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
            <Card>
                <CardContent>
                    <Image alt={`${name} cover image`} src={image} className='object-cover w-[290px] h-[260px]' width='300' height='300'/>
                </CardContent>
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                </CardHeader>
                <CardFooter>
                    {
                        labels.map((label, index) =>
                            <Badge variant='outline' key={index}>
                                {label}
                            </Badge>
                        )
                    }
                </CardFooter>
            </Card>
        </Link>
    )
}

{/* <Card>
<Image alt={`${name} cover image`} src={image} className='object-cover w-[290px] h-[260px]'/>
<Card.Content>
    <Card.Header>
        {name}
    </Card.Header>
    <Label.Group>
        {
            labels.map((label, index) =>
                <Label key={index}>
                    {label}
                </Label>
            )
        }
    </Label.Group>
</Card.Content>
</Card> */}