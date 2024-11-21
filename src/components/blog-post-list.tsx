'use client';
import Link from 'next/link';


  
export default function BlogPostList({name, page, labels}: {name: string, page: string, labels: string[]}) {
    return(
        <Link href={page}>

        </Link>
    )
}