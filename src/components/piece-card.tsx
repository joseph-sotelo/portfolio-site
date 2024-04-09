// 'use client';
// import Link from 'next/link';

// import { Card, Image, Label } from 'semantic-ui-react';
// // use Image from Semantic or Next?


// // TODO
// // - make cards raise a few pixels on hover
// export default function PieceCard({name, image, page, labels}: {name: string, image: string, page: string, labels: string[]}) {
//     return(
//         <Link href={page}>
//             <Card>
//                 <Image alt={`${name} cover image`} src={image} className='object-cover w-[290px] h-[260px]'/>
//                 <Card.Content>
//                     <Card.Header>
//                         {name}
//                     </Card.Header>
//                     <Label.Group>
//                         {
//                             labels.map((label, index) =>
//                                 <Label key={index}>
//                                     {label}
//                                 </Label>
//                             )
//                         }
//                     </Label.Group>
//                 </Card.Content>
//             </Card>
//         </Link>
//     )
// }

// // onClick={() => router.push('/work/jackson-market')}