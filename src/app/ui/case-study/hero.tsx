import Image from 'next/image';

export default function Hero({title, tagline}: {title: string, tagline: string}){
    return(
        <div id='hero'>
            <h1>
                {title}
            </h1>
            <h2>
                {tagline}
            </h2>
            <Image src='' alt={`High fidelity mockups from the ${title} project`} width='300' height='300' />
        </div>
    )
}